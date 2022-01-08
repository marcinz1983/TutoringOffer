import {Autocomplete, IconButton, InputBase, Paper} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import {searchInputStyles as styles} from "../../components/SearchInput/search-input-styles";
import {AUTOCOMPLETE_INPUT_OPTIONS, HOMEPAGE, SEARCH_OFFER} from "../../utility/constants";
import React from "react";

export const SearchOffersInput = (props: any) => {

    const {
        searchInputValue,
        setSearchInputValue,
        searchButtonClickAction
    } = props

    const handleKeyPressSearch = (e:  React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key == SEARCH_OFFER.KEYPRESS_ACTION) {
            searchButtonClickAction()
        }
    }

    return (
        <div>
            <Paper sx={styles.paper}>
                <Autocomplete
                    onInputChange={(e, newInputValue) => {
                        setSearchInputValue(newInputValue)
                    }}

                    ListboxProps={{style: styles.listBoxProps}}
                    value={searchInputValue}
                    disablePortal
                    freeSolo
                    defaultValue={searchInputValue}
                    id="search-input"
                    options={AUTOCOMPLETE_INPUT_OPTIONS}
                    PaperComponent={({children}) => (
                        <Paper style={styles.autocompletePaper}>{children}</Paper>
                    )}
                    sx={styles.autocompleteInput}
                    renderInput={(params) => {
                        const {InputLabelProps, InputProps, ...rest} = params;
                        return <InputBase
                            autoFocus
                            onKeyPress={(e) => handleKeyPressSearch(e)}
                            {...params.InputProps}
                            {...rest}
                            onChange={(e) => setSearchInputValue(e.target.value)}
                            placeholder={HOMEPAGE.SEARCHBAR_PLACEHOLDER}
                        />
                    }}/>
                <IconButton
                    onClick={() => searchButtonClickAction()}
                    sx={styles.iconButton}
                >
                    <SearchIcon sx={styles.searchIcon}/>
                </IconButton>
            </Paper>
        </div>
    )
}