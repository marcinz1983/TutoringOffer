import {
  Grid,
  Typography,
  Paper,
  Avatar,
  Rating,
  Pagination,
} from "@mui/material";
import { HomepageStyles as styles } from "./homepage-styles";
import { HOMEPAGE } from "../../utility/constants";

export const ClientsSaySection = () => {
  
  //remove fakeData when there will be data from DB
  const fakeData = [
    {
      name: "Kate",
      avatarURL: "#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies quam nec velit interdum, a cursus sem scelerisque. In tempus elit.",
      rating: 4,
    },
    {
      name: "Mike",
      avatarURL: "#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies.",
      rating: 5,
    },
    {
      name: "Tom",
      avatarURL: "#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies quam nec velit interdum, a cursus sem scelerisque.",
      rating: 4.5,
    },
    {
      name: "Jane",
      avatarURL: "#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies quam nec velit interdum, a cursus sem scelerisque.",
      rating: 5,
    },
  ];

  return (
    <Grid container sx={styles.clientsSayMainContainer}>
      <Grid item xs={11} sm={11} lg={8}>
      <Typography variant="h3" sx={styles.offerTilesTitle}>
        {HOMEPAGE.CLIENTSSAY_TITLE}
      </Typography>
      <Grid container spacing={2} sx={styles.clientsSayContainer}>
        {fakeData.map((item) => (
          <Grid item xs={12} sm={12} md={12} lg={5} key={item.name}>
            <Paper sx={styles.clientSayPaper}>
              <Grid container sx={styles.clientsSayPaperContainer}>
                <Grid item xs={4} sx={styles.clientsSayAvatarGridItem}>
                  <Avatar sx={styles.clientsSayAvatar}>{item.name[0]}</Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h5" sx={styles.clientsSayName}>
                    {item.name}
                  </Typography>
                  <Rating readOnly value={item.rating} precision={0.5} />
                  <Typography variant="body1">{item.description}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={styles.clientSayPaginationGridItem}>
        <Pagination count={3} color="secondary" />
      </Grid>
      </Grid>
    </Grid>
  );
};
