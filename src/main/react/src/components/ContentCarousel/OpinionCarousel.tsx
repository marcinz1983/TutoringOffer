import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {contentCarouselStyles as styles} from "./content-carousel-styles";
import {Box, Grid, Paper, Rating, Typography} from "@mui/material";
import AvatarSquared from "../AvatarSquared/AvatarSquared";
import {IOpinionCarouselProps} from "../../typescript/interfaces";
import {CustomNextArrow, CustomPrevArrow} from "./ContentCarousel";

const OpinionCarousel = (props: IOpinionCarouselProps) => {

    const {data} = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 2,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <Box key={index} sx={styles.opinionBox}>
                    <Paper sx={styles.opinionPaper}>
                        <Grid container sx={styles.opinionMainGridContainer}>
                            <Grid item id={"grid-avatar"} xs={3} sx={styles.opinionGridAvatarGridItem}>
                                <AvatarSquared image={item.image} alt={item.name} width={styles.avatarSize}
                                               height={styles.avatarSize}/>
                            </Grid>
                            <Grid item id={"grid-description"} xs={9}>
                                <Grid container sx={styles.gridDescriptionContainer}>
                                    <Grid item id={"grid-description-title"} sx={styles.gridItemDescriptionTitle}>
                                        <Typography variant={'h5'} sx={styles.typographyTitle}>{item.name}</Typography>
                                        <Rating value={item.rate} precision={0.5}/>
                                    </Grid>
                                    <Grid item id={"grid-description-details"} sx={styles.gridItemDescriptionDetails}>
                                        {item.desc}
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
            ))}
        </Slider>
    )

}

export default OpinionCarousel;