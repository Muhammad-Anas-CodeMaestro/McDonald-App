import { Column } from "@ant-design/charts";

export default function TotalTicketsChart() {

  const data = [
    { month: "Jan", tickets: 1200 },
    { month: "Feb", tickets: 1800 },
    { month: "Mar", tickets: 900 },
    { month: "Apr", tickets: 1500 },
    { month: "May", tickets: 2100 },
    { month: "Jun", tickets: 1600 },
    { month: "Jul", tickets: 2500 },
    { month: "Aug", tickets: 1900 },
    { month: "Sep" },
    { month: "Oct" },
    { month: "Nov" },
    { month: "Dec" },
  ];

  const config = {
    data,
    xField: "month",
    yField: "tickets",
    height: 300,
  };

  return <Column {...config} />;
}