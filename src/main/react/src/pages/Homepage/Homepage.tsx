import { HomepageHeroSearch } from "./HomepageHeroSearch"
import { Grid } from "@mui/material"
import { HomepageStepsSection } from "./HomepageStepsSection"

export const Homepage = () => {
    return (
        <Grid xs ={12} md={12}>
            <HomepageHeroSearch/>
            <HomepageStepsSection/>
        </Grid>
    )
}
