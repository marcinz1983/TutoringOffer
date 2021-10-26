import { Button,Typography, InputAdornment, TextField, Box, MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useState, FormEvent} from "react";
import { addOffer } from "../../services/offer.service"
import { IOffer } from '../../typescript/interfaces';


export const CreateOfferForm = () =>{
    //State
    const [offerDetails, setOfferDetails] = useState<IOffer>({
        firstName: '',
        lastName: '',
        shortDescription: '',
        longDescription: '',
        rateDescription: '',
        backgroundDescription: '',
        price: 0
    });
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        addOffer(offerDetails)
    }       
        
    return (
        
        <Box>
            <form 
            style={{
                display: 'flex',
                flexDirection: 'column'
            }} 
            onSubmit={handleSubmit}>

                <Typography variant="h2">Create your offer</Typography>
                <TextField 
                    margin="normal" 
                    id="filled-basic" 
                    label="Name" 
                    variant="filled" 
                    value={offerDetails.firstName} 
                    onChange={e => setOfferDetails({...offerDetails, firstName: e.target.value})} 
                    autoFocus required/>
                <TextField 
                    margin="normal" 
                    id="filled-basic" 
                    label="Surname" 
                    variant="filled" 
                    value={offerDetails.lastName} 
                    onChange={e => setOfferDetails({...offerDetails, lastName: e.target.value})} 
                    required/>
                <TextField 
                    margin="normal" 
                    id="filled-multiline-flexible" 
                    label="Shorthand description" 
                    rows={3} 
                    inputProps={{maxLength: 150}} 
                    variant="filled" value={offerDetails.shortDescription} 
                    onChange={e => setOfferDetails({...offerDetails, shortDescription: e.target.value})} 
                    multiline required/>
                <TextField 
                    margin="normal" 
                    id="filled-multiline-flexible" 
                    label="Long description" 
                    rows={12} 
                    inputProps={{maxLength: 500}} 
                    variant="filled" 
                    value={offerDetails.longDescription} onChange={e => setOfferDetails({...offerDetails, longDescription: e.target.value})} 
                    multiline required/>
                <TextField 
                    margin="normal" 
                    id="filled-basic" label="Price"
                    type="number"
                    value={offerDetails.price}
                    onChange={e => setOfferDetails({...offerDetails, price: parseFloat(e.target.value)})}
                    InputProps={{startAdornment: (
                        <InputAdornment position="start">
                            PLN
                        </InputAdornment>
                    ),}}
                    variant="filled" required/>
                    <FormControl>
                        <InputLabel id="filled-select-label">Rate Description</InputLabel>
                        <Select
                        labelId="filled-select-label"
                        id="filled-select"
                        variant="filled"
                        value={offerDetails.rateDescription}
                        label="rate description"
                        onChange={e => setOfferDetails({...offerDetails, rateDescription: e.target.value})}
                        >
                        <MenuItem value={'Stawka za 1h'}>Stawka za 1h</MenuItem>
                        <MenuItem value={'Stawka za zlecenie'}>Stawka za zlecenie</MenuItem>
                        </Select>
                    </FormControl>
                <TextField 
                    margin="normal" 
                    id="filled-multiline" 
                    label="Your background" 
                    rows={4} 
                    inputProps={{maxLength: 500}} 
                    variant="filled" 
                    value={offerDetails.backgroundDescription} onChange={e => setOfferDetails({...offerDetails, backgroundDescription: e.target.value})} 
                    multiline required/>
                <Button variant="contained" type="submit">Submit</Button>       
                <Link to="/">
                    <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon />}>
                        Powrót
                    </Button>
                </Link> 
            </form>
        </Box>
    )
}
