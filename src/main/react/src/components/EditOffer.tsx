import {Button, Divider, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

type TLocationState = {
    from: {
        path: string;
    };
    offerProps: {
        backgroundDescription: string;
        firstName: string;
        lastName: string;
        longDescription: string;
        price: number;
        rateDescription: string;
        shortDescription: string;
    };
};

export const EditOffer = (props: object) => {
    const location = useLocation<TLocationState>();

    const {
        shortDescription,
        longDescription,
        rateDescription,
        backgroundDescription,
        price,
    } = location.state.offerProps;

    const [offerData, setOfferData] = useState({
        shortDescription: shortDescription,
        longDescription: longDescription,
        rateDescription: rateDescription,
        backgroundDescription: backgroundDescription,
        price: price,
    });

    return (
        <Grid container>
            <Grid item xs={12} sx={{paddingTop: 4}}>
                <Typography variant="body2">Edycja</Typography>
                <Divider/>
            </Grid>
            <Grid item xs={12} md={12} sx={{paddingTop: 5}}>
                <Typography variant="h4">Edytuj ofertę</Typography>
                <Grid container sx={{paddingTop: 4}} spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">Tytuł oferty</Typography>
                        <TextField
                            id="short-description"
                            variant="outlined"
                            value={offerData.shortDescription}
                            fullWidth
                            onChange={(e) =>
                                setOfferData({...offerData, shortDescription: e.target.value})
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2">Cena</Typography>
                        <TextField
                            id="price"
                            variant="outlined"
                            value={offerData.price}
                            type="number"
                            fullWidth
                            onChange={(e) =>
                                setOfferData({...offerData, price: parseInt(e.target.value)})
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2">Czas</Typography>
                        <TextField
                            id="rate-description"
                            variant="outlined"
                            value={offerData.rateDescription}
                            fullWidth
                            onChange={(e) =>
                                setOfferData({...offerData, rateDescription: e.target.value})
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2">Poziom</Typography>
                        <TextField
                            id="background-description"
                            variant="outlined"
                            value={offerData.backgroundDescription}
                            fullWidth
                            onChange={(e) =>
                                setOfferData({
                                    ...offerData,
                                    backgroundDescription: e.target.value,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">Opis oferty</Typography>
                        <TextField
                            id="long-description"
                            variant="outlined"
                            value={offerData.longDescription}
                            multiline
                            rows={8}
                            fullWidth
                            onChange={(e) =>
                                setOfferData({...offerData, longDescription: e.target.value})
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{paddingTop: 3}}>
                    <Grid item xs={12} md={6}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Button variant="outlined" fullWidth>
                                Anuluj
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="info" fullWidth>
                            Aktualizuj
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
