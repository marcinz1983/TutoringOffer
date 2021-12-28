import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Grid, Paper, Rating, Typography} from "@mui/material"
import AvatarSquared from "../AvatarSquared/AvatarSquared";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {contentCarouselStyles as styles} from "./content-carousel-styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {SEARCH_OFFER} from "../../utility/constants";
import {IContentCarousel} from "../../typescript/interfaces";

function CustomNextArrow(props: any) {
    const {className, onClick} = props;
    return (
        <ArrowForwardIosIcon
            className={className}
            style={styles.arrowIcon}
            onClick={onClick}
            fontSize={"large"}
        />
    );
}

function CustomPrevArrow(props: any) {
    const {className, onClick} = props;
    return (
        <ArrowBackIosIcon
            className={className}
            style={styles.arrowIcon}
            onClick={onClick}
            fontSize={"large"}
        />
    );
}


const ContentCarousel = (props: IContentCarousel) => {

    const {data} = props

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
                <Box key={index} sx={styles.sliderBox}>
                    <Paper sx={styles.itemPaper}>
                        <Grid container sx={styles.sliderGridContainer}>
                            <Grid item sx={styles.sliderGridItem}>
                                <AvatarSquared
                                    alt={item.name}
                                    image={item.image}
                                    height={"80%"}
                                    width={"80%"}/>
                            </Grid>
                            <Grid item sx={styles.sliderDescGridItem}>
                                <Rating
                                    readOnly
                                    value={item.rating}
                                    precision={0.5}
                                    size={"large"}/>
                                <Typography
                                    variant={"h5"}>
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant={"h6"}
                                    color={"secondary"}
                                    sx={styles.sliderDescItemPrice}>
                                    {SEARCH_OFFER.FROM} {item.price} {item.currency}
                                </Typography>
                                <Typography
                                    variant={"body1"}
                                    color={"secondary"}>
                                    {item.desc}
                                </Typography>
                            </Grid>
                            <Grid item sx={styles.sliderIconGridItem}>
                                <FavoriteBorderIcon color={"primary"} sx={styles.sliderDescIcon}/>
                                <ShareOutlinedIcon color={"primary"} sx={styles.sliderDescIcon}/>
                                <EmailOutlinedIcon color={"primary"} sx={styles.sliderDescIcon}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            ))}
        </Slider>
    );
};

export default ContentCarousel;