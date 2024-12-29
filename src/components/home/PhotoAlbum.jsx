import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid2,
  Container,
  CardContent,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const PhotoAlbum = () => {
  return (
    <>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album <PhotoCamera />
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Photo Album Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Sequi dolorem quo rerum, reprehenderit corporis ipsa magnam
              inventore enim tenetur beatae.
            </Typography>
          </Container>
        </div>
      </main>
      <section>
        <Grid2 container spacing={2} justify="center" alignItems="center">
          <Grid2 item>
            <Button variant="contained">See My Photos</Button>
          </Grid2>
          <Grid2 item>
            <Button variant="outlined" href="#outlined-buttons">
              Explore More
            </Button>
          </Grid2>
        </Grid2>
      </section>
      {/* <section>
        <Container className={ClassNames.cardGrid} maxWidth="md">
          <Grid2 container spacing={4}>
            <Grid2 item>
              <Card className={Classes.card}>
                <CardContent className={Classes.cardContent}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Title
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary">
                    Photo Album Lorem ipsum
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </section> */}
    </>
  );
};

export default PhotoAlbum;
