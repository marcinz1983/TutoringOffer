import { offerItemStyle as styles } from "./offer-item-style";
import { Rating, Typography, Avatar } from "@mui/material";
import { IOfferItem } from "../../typescript/interfaces";
import { SEARCH_OFFER } from "../../utility/constants";
import { Box } from "@mui/system";

interface IOfferItemProps {
  offer: IOfferItem;
}

export const OfferItem = ({ offer }: IOfferItemProps) => {
  const { description, price } = offer.offer;
  const { image, name, rating } = offer.trainer;

  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Avatar alt={name} src={image} sx={styles.userImg} />
        <Typography variant="h4" sx={styles.name}>
          {name}
        </Typography>
      </Box>

      <Rating
        readOnly
        value={rating}
        precision={0.5}
        size="large"
        sx={styles.descItem}
      />
      <Typography sx={styles.descItem} variant="body2">
        {description}
      </Typography>
      <Typography
        sx={styles.descItem}
        variant="h5"
        color="secondary"
      >{`${SEARCH_OFFER.FROM} ${price} ${SEARCH_OFFER.CURRENCY_PER_HOUR}`}</Typography>
    </Box>
  );
};
