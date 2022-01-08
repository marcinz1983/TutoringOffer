import {Avatar, Grid, Paper, Rating, Typography} from "@mui/material";
import {opinionStyles as styles} from "./opinion-styles";
import manPhotoPlaceholder from '../../assets/photo-placeholder-man.png'
import {IOpinion} from "../../typescript/interfaces";

const Opinion = (props: IOpinion) => {

    const {name, image, rate, desc} = props.opinionData

    return (
        <Paper elevation={3} sx={styles.opinionPaper}>
            <Grid container sx={styles.opinionGridContainer}>
                <Grid item xs={10} sx={styles.opinionGridItem}>
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={styles.avatarGridItem}>
                            <Avatar src={image ? image : manPhotoPlaceholder}/>
                            <Typography variant={"h5"}>{name}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={styles.ratingGridItem}>
                            <Rating readOnly value={rate} precision={0.5}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} sx={styles.opinionDescGridItem}>
                    <Typography variant={"body1"}>{desc}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Opinion;