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
import "./Cards.css";

const cardsData = [
  {
    id: 1,
    title: "Item One",
    Percentage: "80%",
    negative: false,
    lastmonth: "86%",
  },
  {
    id: 2,
    title: "Item Three",
    Percentage: "-45%",
    negative: true,
    lastmonth: "5%",
  },
  {
    id: 3,
    title: "Item four",
    Percentage: "68%",
    negative: false,
    lastmonth: "45%",
  },
  {
    id: 4,
    title: "Item four",
    Percentage: "94%",
    negative: false,
    lastmonth: "39%",
  },
];

export default function BasicCard() {
  return (
    <div className="cardscontainer">
      <Grid container spacing={3}>
        {cardsData.map((item) => (
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ width: "90%" }}>
              <CardContent key={item.id}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <PollIcon style={{ color: "orangered", fontSize: "55px" }} />
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ textAlign: "right",color: !item.negative ? "green" : "red", }}
                  >
                    {item.Percentage}
                  </Typography>
                </div>
                <hr style={{ opacity: "0.2" }}></hr>
                <Typography variant="body2">
                  <span
                    style={{
                      color: !item.negative ? "green" : "red",
                      fontWeight: "800",
                    }}
                  >
                    {!item.negative ? "+" : "-"}
                    {item.lastmonth}
                  </span>{" "}
                  than last month
                </Typography>
              </CardContent>
            </Card>

            {/* /// old card design */}
            {/* <Card sx={{ width: "90%" }}>
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
          </Card> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
