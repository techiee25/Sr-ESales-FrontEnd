import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Mobileplan.css";

const UpMobileXL = [83, 322, 945, 110, 68, 298];
const UpMobileL = [277, 540, 44, 801, 45, 555];
const UpMobileM = [57, 891, 476, 66, 412, 247];
const UpMobileS = [405, 564, 720, 155, 612, 490];

const NewUpMobileXL = [110, 68, 298];
const NewUpMobileL = [801, 45, 555];
const NewUpMobileM = [66, 412, 247];
const NewUpMobileS = [155, 612, 490];

const x1Labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const x2Labels = ["Jan", "Feb", "Mar"];

export default function Mobileplan() {
  return (
    <div>
      {" "}
      <div className="mbbplan">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="mbplancontainer">
              <LineChart
                height={300}
                series={[
                  { data: UpMobileXL, label: "UpMobileXL" },
                  { data: UpMobileL, label: "UpMobileL" },
                  { data: UpMobileM, label: "UpMobileM" },
                  { data: UpMobileS, label: "UpMobileS" },
                ]}
                xAxis={[{ scaleType: "point", data: x1Labels }]}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mbplancontainer">
              <LineChart
                margin={{
                  left: 40,
                  right: 90,
                  top: 40,
                  bottom: 30,
                }}
                slotProps={{
                  legend: {
                    direction: "column",
                    position: {
                      vertical: "top",
                      horizontal: "right",
                    },
                    itemMarkWidth: 10,
                    itemMarkHeight: 10,
                    markGap: 5,
                    itemGap: 10,
                    labelStyle: {
                      fontSize: 13,
                      // fill: 'blue',
                    },
                  },
                }}
                width={300}
                height={300}
                series={[
                  { data: NewUpMobileXL, label: "NewUpMbXL" },
                  { data: NewUpMobileL, label: "NewUpMbL" },
                  { data: NewUpMobileM, label: "NewUpMbM" },
                  { data: NewUpMobileS, label: "NewUpMbS" },
                ]}
                xAxis={[{ scaleType: "point", data: x2Labels }]}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="mbbplan">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="mbplancontainer">
              <BarChart
                xAxis={[
                  { scaleType: "band", data: ["Up Mobile XL", "Up Mobile L"] },
                ]}
                series={[{ data: [110, 68] }, { data: [62, 98] }]}
                height={300}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mbplancontainer">
              <BarChart
                xAxis={[
                  { scaleType: "band", data: ["Up Mobile XL", "Up Mobile L"] },
                ]}
                series={[{ data: [77, 154] }, { data: [123, 104] }]}
                width={300}
                height={300}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
