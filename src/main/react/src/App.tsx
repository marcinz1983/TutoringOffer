import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline, Grid } from "@mui/material";
import { AppTopBar } from "./components/AppTopBar";
import { OffersList } from "./components/OffersList";
import { TeacherProfile } from "./components/TeacherProfile";

function App() {
  return (
    <div className="App">
      <Container>
        <CssBaseline />
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={12} md={12}>
            <AppTopBar />
          </Grid>
          <Grid item xs={12} md={9}>
            <OffersList />
          </Grid>
          <Grid item xs={12} md={3}>
            <TeacherProfile avatarUrl={'userAvatar.jpg'} avatarAlt={'Gary Oldman'} username="Josh" accountType="Teacher"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
