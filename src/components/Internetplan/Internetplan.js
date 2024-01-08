import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Internetplan.css";
import Cards from "../Cards/Cards";
import internetdata from "../internet.json"


// const InternetA = [83, 322, 945, 110, 68, 298];
// const InternetB = [277, 540, 44, 801, 45, 555];
// const InternetC = [57, 891, 476, 66, 412, 247];
// const InternetD = [405, 564, 720, 155, 612, 490];

const NewInternetA = [110, 68, 298];
const NewInternetB = [801, 45, 555];
const NewInternetC = [66, 412, 247];
const NewInternetD = [155, 612, 490];

const x1Labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const x2Labels = ["Jan", "Feb", "Mar"];

export default function Internetplan() {

  const [filteredData, setFilteredData] = React.useState({});

  React.useEffect(() => {
    // Function to filter data
    const filterPlans = () => {
      const filteredValues = {};

      Array.isArray(internetdata) && internetdata.forEach(item => {
        // Check if the "Month" is between "Jul" to "Dec"
        if (
          item?.Month === 'Jul' ||
          item?.Month === 'Aug' ||
          item?.Month === 'Sep' ||
          item?.Month === 'Oct' ||
          item?.Month === 'Nov' ||
          item?.Month === 'Dec'
        ) {
          if (!filteredValues[item.Plan_Type]) {
            // If "Plan_Type" doesn't exist in the filteredValues object, create an empty array
            filteredValues[item.Plan_Type] = [];
          }
          // Push the "Plans_Sold" value for the specified months
          filteredValues[item.Plan_Type].push(Number(item.Plans_Sold))
        }
      });

      setFilteredData(filteredValues);
    };

    filterPlans();
  }, [internetdata]);

  console.log(filteredData?.InternetA,'data')

  const InternetA = filteredData?.InternetA !== undefined && filteredData?.InternetA;
  const InternetB = filteredData?.InternetB !== undefined && filteredData?.InternetB;
  const InternetC = filteredData?.InternetC !== undefined && filteredData?.InternetC;
  const InternetD = filteredData?.InternetD !== undefined && filteredData?.InternetD;

  return (
    <div className="mobileplanparent">
      <Cards/>
      {" "}
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
                  { data: InternetA, label: "Internet A" },
                  { data: InternetB, label: "InternetB" },
                  { data: InternetC, label: "InternetC" },
                  { data: InternetD, label: "InternetD" },
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
                  { data: NewInternetA, label: "NewInternetA" },
                  { data: NewInternetB, label: "NewInternetB" },
                  { data: NewInternetC, label: "NewInternetC" },
                  { data: NewInternetD, label: "NewInternetD" },
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
              <BarChart
                xAxis={[
                  { scaleType: "band", data: ["Internet A", "Internet B"] },
                ]}
                series={[{ data: [110, 68] }, { data: [62, 98] }]}
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
              />
            </div>
          </Grid>
          <Grid item xs={12} md={5} sm={5}>
            <div className="mbplancontainer">
              <BarChart
                xAxis={[
                  { scaleType: "band", data: ["Internet C", "Internet D"] },
                ]}
                series={[{ data: [77, 154] }, { data: [123, 104] }]}
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
