import React from "react";
import Layout from "../../Components/Layout/Layout";
import DonutChart from "react-donut-chart";
import { ResponsiveBar } from "@nivo/bar";
import { icon } from "../../Assets/index";
import "./index.scss";

const index = () => {
  const reactDonutChartdata = [
    {
      label: "Chapter B",
      value: 20,
      color: "#FEB019",
    },
    {
      label: "Haven't Started yet",
      value: 7,
      color: "#FF4560",
    },
    {
      label: "Chapter A",
      value: 22,
      color: "#775DD0",
    },
    {
      label: "Chapter C",
      value: 34,
      color: "#775DD0",
    },
    {
      label: "Finished Training",
      value: 22,
      color: "#00E396",
    },
  ];

  let reactDonutChartBackgroundColor = [
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#B4CEFF",
  ];
  const reactDonutChartInnerRadius = 0.5;
  const reactDonutChartSelectedOffset = 0.02;

  const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
      console.log(item);
      let color = reactDonutChartdata.find((q) => q.label === item.label).color;
      reactDonutChartStrokeColor = color;
    }
  };

  let reactDonutChartStrokeColor = "grey";

  const reactDonutChartOnMouseEnter = (item) => {
    let color = reactDonutChartdata.find((q) => q.label === item.label).color;
    reactDonutChartStrokeColor = color;
  };

  const data = [
    {
      ranking: "3 Jun",
      value: 100,
    },
    {
      ranking: "4 Jun",
      value: 110,
    },
    {
      ranking: "5 Jun",
      value: 110,
    },
    {
      ranking: "6 Jun",
      value: 220,
    },
    {
      ranking: "7 Jun",
      value: 260,
    },
    {
      ranking: "8 Jun",
      value: 200,
    },
    {
      ranking: "9 Jun",
      value: 220,
    },
    {
      ranking: "10 Jun",
      value: 100,
    },
    {
      ranking: "11 Jun",
      value: 250,
    },
    {
      ranking: "12 Jun",
      value: 300,
    },
    {
      ranking: "13 Jun",
      value: 380,
    },
    {
      ranking: "14 Jun",
      value: 400,
    },
  ];

  const status = [
    {
      title: "In training workers",
      data_no: "3,354",
      percentage: "20%",
      percentage_icon: icon.trend_up,
      numbers: 234,
      chart_icon: icon.green_chart,
    },
    {
      title: "Video watch-time (hrs)",
      data_no: "2,433",
      percentage: "20%",
      percentage_icon: icon.trend_up1,
      numbers: 435,
      chart_icon: icon.red_chart,
    },
    {
      title: "% Workers passing quiz",
      data_no: "95%",
      percentage: "24%",
      percentage_icon: icon.trend_up,
      numbers: "20%",
      chart_icon: icon.green_chart,
    },
    {
      title: "Avg. days taken",
      data_no: "6",
      percentage: "20%",
      percentage_icon: icon.trend_up,
      numbers: 3,
      chart_icon: icon.green_chart,
    },
  ];

  return (
    <>
      <Layout>
        <div className="dashboard__container">
          <div className="status-wrapper">
            {status.map((item, key) => {
              return (
                <div className="status-container">
                  <h6>{item.title}</h6>
                  <div className="data-img-chart-wrapper">
                    <div>
                      <h1>{item.data_no}</h1>
                      <div className="percentage-icon-wrapper">
                        <div
                          className={
                            item.numbers == 435
                              ? "percentage percentage-red"
                              : "percentage"
                          }
                        >
                          <img src={item.percentage_icon} /> {item.percentage}
                        </div>

                        <div> {item.numbers} </div>
                      </div>
                    </div>
                    <div>
                      <img src={item.chart_icon} height="120px" width="120px" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="chapter-wise-status-wrapper">
            <div className="chapter-wise-chart-wrapper">
              Chapter wise status
              <div className="donut-chart-wrapper">
                <DonutChart
                  width={185}
                  onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                  strokeColor={reactDonutChartStrokeColor}
                  data={reactDonutChartdata}
                  colors={reactDonutChartBackgroundColor}
                  innerRadius={reactDonutChartInnerRadius}
                  selectedOffset={reactDonutChartSelectedOffset}
                  onClick={(item, toggled) =>
                    reactDonutChartHandleClick(item, toggled)
                  }
                  height={200}
                  legend={false}
                />
              </div>
              <div className="labels-wrapper">
                <ul>
                  <li>Finished Training</li>
                  <li className="chapter-b">Chapter B</li>
                  <li className="have-not">Haven't Started yet</li>
                </ul>

                <ul>
                  <li className="chapter-a">Chapter A</li>
                  <li className="chapter-c">Chapter C</li>
                </ul>
              </div>
            </div>
            <div className="last-active-trainings">
              <div className="heading-wrapper">
                <div>Last 14 days active workers in training</div>{" "}
                <div>last 14 days</div>
              </div>

              <div className="bar-chart-wrapper">
                <ResponsiveBar
                  data={data}
                  keys={["value"]}
                  indexBy="ranking"
                  margin={{
                    top: 20,
                    right: 0,
                    bottom: 40,
                    left: 100,
                  }}
                  padding={0.6}
                  groupMode="grouped"
                  colors="#2a7ef0"
                  axisTop={null}
                  axisRight={null}
                  enableGridX={false}
                  enableGridY={false}
                  enableLabel={false}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: 0,
                  }}
                  borderRadius={10}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const onChartRef = (chart) => {
  if (!chart) {
    return;
  }

  this.chart = chart;
  if (this.legend) {
    this.chart.actualSeries[0].legend = this.legend;
  }

  if (this.chart.actualSeries && this.chart.actualSeries.length > 0) {
    let series = this.chart.actualSeries[0];
    series.selectedSlices.add(0);
  }
};

const onLegendRef = (legend) => {
  if (!legend) {
    return;
  }

  this.legend = legend;
  if (this.chart) {
    this.chart.actualSeries[0].legend = this.legend;
  }
};

const onSliceClick = (s, e) => {
  if (e.isSelected) {
    this.setState({
      selectedSliceLabel: this.data[e.index].Category,
      selectedSliceValue: this.data[e.index].MarketShare + "%",
    });
  } else {
    this.setState({
      selectedSliceLabel: "No Selection",
      selectedSliceValue: "0%",
    });
  }
};

export default index;
