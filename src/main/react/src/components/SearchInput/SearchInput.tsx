import { Autocomplete, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { searchInputStyles as styles } from "./search-input-styles";
import { HOMEPAGE_SEARCHBAR_PLACEHOLDER , AUTOCOMPLETE_INPUT_OPTIONS } from "../../utility/constants";
import { useState } from "react";

export const SearchInput = () => {

    const [searchInputValue, setSearchInputValue] = useState<string | null>(null)    


    return (
        <div>
            <Paper sx={styles.paper}>
            <Autocomplete
                onInputChange={(e, newInputValue) => {setSearchInputValue(newInputValue)}}
                ListboxProps={{style: styles.listBoxProps}}
                disablePortal
                id="search-input"
                options={AUTOCOMPLETE_INPUT_OPTIONS}
                PaperComponent={({ children }) => (
                    <Paper style={ styles.autocompletePaper }>{children}</Paper>
                  )}
                sx={styles.autocompleteInput}
                renderInput={(params) => {
                    const {InputLabelProps,InputProps,...rest} = params;
                    return <InputBase
                     {...params.InputProps}
                     {...rest}
                     value={searchInputValue}
                     onChange={(e) => setSearchInputValue(e.target.value)}
                     placeholder={HOMEPAGE_SEARCHBAR_PLACEHOLDER}/>}}/>
                <IconButton
                //TODO: add proper API call to onClick
                onClick={() => console.log('SearchInput buttonClick')}
                sx={styles.iconButton}
                >
                    <SearchIcon sx={styles.searchIcon}/>
                </IconButton>
            </Paper>
        </div>
    )
}
