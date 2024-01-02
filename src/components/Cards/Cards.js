// @mui material components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PollIcon from "@mui/icons-material/Poll";
import { IconButton } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ width: "90%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                UpMobileS
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <PollIcon style={{ color: "orangered", fontSize: "55px" }} />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "right" }}
                >
                  80%
                </Typography>
              </div>
              <hr style={{ opacity: "0.2" }}></hr>
              <Typography variant="body2">
                <span style={{ color: "green", fontWeight: "800" }}>+35%</span>{" "}
                than last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ width: "90%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                UpMobileS
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <PollIcon style={{ color: "orangered", fontSize: "55px" }} />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "right" }}
                >
                  -6%
                </Typography>
              </div>

              <hr style={{ opacity: "0.2" }}></hr>
              <Typography variant="body2">
                <span style={{ color: "red", fontWeight: "800" }}>+12%</span>{" "}
                than last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ width: "90%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                UpMobileS
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <PollIcon style={{ color: "orangered", fontSize: "55px" }} />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "right" }}
                >
                  47%
                </Typography>
              </div>
              <hr style={{ opacity: "0.2" }}></hr>
              <Typography variant="body2">
                <span style={{ color: "green", fontWeight: "800" }}>+33%</span>{" "}
                than last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ Width: "90%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                UpMobileS
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <PollIcon style={{ color: "orangered", fontSize: "55px" }} />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "right" }}
                >
                  10%
                </Typography>
              </div>
              <hr style={{ opacity: "0.2" }}></hr>
              <Typography variant="body2">
                <span style={{ color: "green", fontWeight: "800" }}>+3%</span>{" "}
                than last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
