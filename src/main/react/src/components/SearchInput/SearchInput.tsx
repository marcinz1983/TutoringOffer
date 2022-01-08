import {Autocomplete, IconButton, InputBase, Paper} from "@mui/material"
import {AUTOCOMPLETE_INPUT_DEFAULT_OPTIONS, HOMEPAGE, SEARCH_OFFER} from "../../utility/constants";
import React, {useEffect, useState} from "react";
import {BehaviorSubject, switchMap, tap} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {getPublicOfferByKeyWord, getPublicOfferByOfferId} from "../../services/offer.service";
import AvatarSquared from "../AvatarSquared/AvatarSquared";
import {searchInputStyles as styles} from "./search-input-styles";
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from "react-router";
import {ROUTER_CONSTANTS} from "../../utility/router-constants";
import {IfoundResults} from "../../typescript/interfaces";

export const SearchInput = () => {

    const [foundResults, setFoundResults] = useState<IfoundResults[]>(AUTOCOMPLETE_INPUT_DEFAULT_OPTIONS)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [subject, setSubject] = useState<BehaviorSubject<string> | null>(null)
    const [inputValue, setInputValue] = useState<string>("")
    const [selectedOffer, setSelectedOffer] = useState<IfoundResults>();

    const history = useHistory();

    useEffect(() => {
        if (!subject) {
            const sub = new BehaviorSubject('');
            setSubject(sub)
        } else {
            const observable = subject.pipe(
                tap(() => {
                    setIsLoading(true)
                }),
                debounceTime(500),
                filter(value => value !== undefined),
                filter(value => value.length >= 2),
                map(value => value.trim()),
                distinctUntilChanged(),
                switchMap(keyWord => {
                    return getPublicOfferByKeyWord(keyWord)
                }),
            ).subscribe(keyWord => {
                setFoundResults(keyWord as IfoundResults[])
                setIsLoading(false)
            })
            return () => {
                observable.unsubscribe();
                subject.unsubscribe();
            };
        }
    }, [subject])

    useEffect(() => {
        if (!inputValue.length) {
            setFoundResults(AUTOCOMPLETE_INPUT_DEFAULT_OPTIONS)
        }
    }, [inputValue])

    useEffect(() => {
        const foundOffer = foundResults.filter((offer: { fullNameOrSpecialization: string; }) =>
            offer.fullNameOrSpecialization === inputValue)
        setSelectedOffer(foundOffer[0])
    }, [foundResults, inputValue])

    const handleKeyPressSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === SEARCH_OFFER.KEYPRESS_ACTION) {
            handleInputSearch(selectedOffer)
        }
    }

    const handleInputSearch = (selectedOffer: (IfoundResults | undefined)) => {
        if (!selectedOffer) {
            return null
        }
        if (selectedOffer.type === SEARCH_OFFER.SPECIALIZATION) {
            history.push({
                pathname: ROUTER_CONSTANTS.SEARCH,
                search: selectedOffer.fullNameOrSpecialization,
                state: selectedOffer.fullNameOrSpecialization
            })
            return null
        }
        getPublicOfferByOfferId(selectedOffer.offerUuid as string)
            .then(offer => {
                if (offer) {
                    history.push({
                        pathname: `${ROUTER_CONSTANTS.SEARCH}/${offer.firstName}-${offer.lastName}`,
                        state: { offer }
                    })
                }
            })
    }

    return (
        <Paper sx={styles.paper}>
            <Autocomplete
                id={"homepage-autocomplete-search-input"}
                onInputChange={(e: React.SyntheticEvent, newInputValue): void => {
                    if (subject) {
                        setInputValue(newInputValue)
                        return subject.next((e.target as HTMLInputElement).value)
                    }
                }}
                ListboxProps={{style: styles.listBoxProps}}
                PaperComponent={({children}) => (
                    <Paper style={styles.autocompletePaper}>{children}</Paper>
                )}
                sx={styles.autocompleteInput}
                fullWidth
                options={foundResults}
                disableClearable
                freeSolo
                loading={isLoading}
                loadingText={SEARCH_OFFER.SEARCHING}
                getOptionLabel={(option: IfoundResults) => option.fullNameOrSpecialization}
                renderOption={(props, option) => (
                    <li {...props}>
                        <AvatarSquared
                            image={option.iconOrUserAvatar}
                            alt={option.fullNameOrSpecialization}
                            width={styles.optionAvatarSize}
                            height={styles.optionAvatarSize}/>
                        <span style={styles.homepageSearchSpanOption}>{option.fullNameOrSpecialization}</span>
                    </li>
                )}
                renderInput={(params) => {
                    const {InputLabelProps, InputProps, ...rest} = params;
                    return <InputBase
                        autoFocus
                        onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyPressSearch(e)}
                        {...params.InputProps}
                        {...rest}
                        placeholder={HOMEPAGE.SEARCHBAR_PLACEHOLDER}
                    />
                }}
            />
            <IconButton
                onClick={() => handleInputSearch(selectedOffer)}
                sx={styles.iconButton}
            >
                <SearchIcon sx={styles.searchIcon}/>
            </IconButton>
        </Paper>
    )
}
