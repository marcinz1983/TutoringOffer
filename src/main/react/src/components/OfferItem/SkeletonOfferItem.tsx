import React from 'react';
import {Skeleton, Stack} from "@mui/material";
import {offerItemStyle as styles} from "./offer-item-style";

const SkeletonOfferItem = () => {
    return (
        <Stack sx={styles.mainContainer}>
            <Skeleton variant={"rectangular"}
                      sx={styles.skeletonUserImg}
            />
            <Skeleton
                variant={"text"}
                width={"150px"}
                sx={styles.skeletonRating}
            />
            <Skeleton
                variant={"rectangular"}
                sx={styles.skeletonDescription}
            />
        </Stack>
    );
};

export default SkeletonOfferItem;