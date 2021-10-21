import { Button,Typography, InputAdornment, Switch, Stack, TextField, Box} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useState} from "react";
import axios from 'axios';




interface OfferDetails {
    firstName: string,
    lastName: string,
    shortDescription: string,
    longDescription: string,
    price: number,
    rateDescription: boolean | string,
    backgroundDescription: string
}

export const CreateOfferForm = () =>{
    //State
    const [offerDetails, setOfferDetails] = useState<OfferDetails>({
        firstName: '',
        lastName: '',
        shortDescription: '',
        longDescription: '',
        price: 0,
        rateDescription: false,
        backgroundDescription: ''
    });

    const handleSubmit = () => {
        const headers = 
        {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }

        if(offerDetails.rateDescription){
            setOfferDetails({...offerDetails, rateDescription: 'Stawka za 1h'});
        }else{
            setOfferDetails({...offerDetails, rateDescription: 'Stawka za zlecenie'});
        }
        axios.post('./api/offer/save', JSON.stringify(offerDetails),
        {headers: headers})
        .then(Response => console.log(Response));
    }

    return (
        
        <Box component="form" sx={{
            display: "flex",
            flexDirection: "column"
            }}>
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
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Płatność za projekt</Typography>
                        <Switch 
                            value={offerDetails.rateDescription}
                            onChange={e => setOfferDetails({...offerDetails, rateDescription: !offerDetails.rateDescription})}
                        /> 
                        <Typography>Płatność za godzinę</Typography>
                    </Stack>
                
                <TextField 
                    margin="normal" 
                    id="filled-multiline" 
                    label="Your background" 
                    rows={4} 
                    inputProps={{maxLength: 500}} 
                    variant="filled" 
                    value={offerDetails.backgroundDescription} onChange={e => setOfferDetails({...offerDetails, backgroundDescription: e.target.value})} 
                    multiline required/>
                <Button variant="contained" type="submit" onSubmit={() => handleSubmit}>Submit</Button>       

                <Link to="/">
                    <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon />}>
                        Powrót
                    </Button>
                </Link> 
        </Box>
    )
}
