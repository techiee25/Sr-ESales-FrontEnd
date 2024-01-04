import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Mobileplan.css";
import Cards from "../Cards/Cards";
import { PieChart } from '@mui/x-charts/PieChart';
import Table from "../Table/Tables";
// import jsondata from "../data.json"

const MobileA = [83, 322, 945, 110, 68, 298];
const MobileB = [277, 540, 44, 801, 45, 555];
const MobileC = [57, 891, 476, 66, 412, 247];
const MobileD = [405, 564, 720, 155, 612, 490];

const NewMobileA = [110, 68, 298];
const NewMobileB = [801, 45, 555];
const NewMobileC = [66, 412, 247];
const NewMobileD = [155, 612, 490];

const x1Labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const x2Labels = ["Jan", "Feb", "Mar"];

const data = [
  { id: 0, value: 17, label: 'Year 2021' },
  { id: 1, value: 11, label: 'Year 2022' },
  { id: 2, value: 9, label: 'Year 2023' },
];


export default function Mobileplan() {
  // const [planData, setPlanData] = React.useState([]);

  // React.useEffect(() => {

  //   // Grouping Plans_Sold values by Plan_Type
  //   const groupedData = jsondata.reduce((acc, item) => {
  //     if (!acc[item.Plan_Type]) {
  //       acc[item.Plan_Type] = [];
  //     }
  //     acc[item.Plan_Type].push(Number(item.Plans_Sold));
  //     return acc;
  //   }, {});

  //   setPlanData(groupedData);
  // }, []);

  return (
    <div className="mobileplanparent">
      <Cards />{" "}
      <div className="mbbplan">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sm={7}>
            <div className="mbplancontainer">
              <LineChart
                height={300}
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
                series={[
                  { data: MobileA, label: "MobileA" },
                  { data: MobileB, label: "MobileB" },
                  { data: MobileC, label: "MobileC" },
                  { data: MobileD, label: "MobileD" },
                ]}
                xAxis={[{ scaleType: "point", data: x1Labels }]}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={5} sm={5}>
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
                // width={300}
                height={300}
                series={[
                  { data: NewMobileA, label: "MobileA" },
                  { data: NewMobileB, label: "MobileB" },
                  { data: NewMobileC, label: "MobileC" },
                  { data: NewMobileD, label: "MobileD" },
                ]}
                xAxis={[{ scaleType: "point", data: x2Labels }]}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="mbbplan">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sm={7}>
            <div className="mbplancontainer">
              <Table />
            </div>
          </Grid>
          <Grid item xs={12} md={5} sm={5}>
            <div className="mbplancontainer">
              <PieChart
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
                series={[
                  {
                    data,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 7,
                      additionalRadius: -7,
                      color: "gray",
                    },
                    
                  },
                ]}
                height={200}
              />
              <h5>Yearly Sales Differentiate</h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
