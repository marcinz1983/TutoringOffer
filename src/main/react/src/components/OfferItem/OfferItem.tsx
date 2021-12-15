import {offerItemStyle as styles} from "./offer-item-style";
import {Avatar, Rating, Typography} from "@mui/material";
import {SEARCH_OFFER} from "../../utility/constants";
import {Box} from "@mui/system";
import {IPublicOffer} from "../../typescript/offer.model";
import photoPlaceholderMan from "../../assets/photo-placeholder-man.png"
import { Link } from 'react-router-dom'
import { ROUTER_CONSTANTS} from "../../utility/router-constants";

interface IPublicOfferProps {
    offer: IPublicOffer
}

export const OfferItem = ({offer}: IPublicOfferProps) => {
    const {price, trainer} = offer

    return (
        <Link
            to={{
                pathname: `${ROUTER_CONSTANTS.SEARCH}/${offer.firstName}-${offer.lastName}`,
                state: { offer }
            }}
            style={styles.link}
        >
        <Box sx={styles.mainContainer}>
            <Box>
                <Avatar alt={trainer.name} src={trainer.image ? trainer.image : photoPlaceholderMan}
                        sx={styles.userImg}/>
                <Typography variant="h4" sx={styles.name}>
                    {trainer.name}
                </Typography>
            </Box>

            <Rating
                readOnly
                value={trainer.rating}
                precision={0.5}
                size="large"
                sx={styles.descItem}
            />
            <Typography sx={styles.descItem} variant="body2">
                {offer.shortDescription}
            </Typography>
            <Typography
                sx={styles.descItem}
                variant="h5"
                color="secondary"
            >{`${SEARCH_OFFER.FROM} ${price[0].price} ${price[0].currency} / ${price[0].description}`}</Typography>
        </Box>
        </Link>
    );
};
