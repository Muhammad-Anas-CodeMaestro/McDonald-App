import { Line } from "@ant-design/charts";

export default function TicketTypeChart() {

  const data = [
    { month: "Jan", tickets: 1200 },
    { month: "Feb", tickets: 1800 },
    { month: "Mar", tickets: 900 },
    { month: "Apr", tickets: 1400 },
    { month: "May", tickets: 1700 },
    { month: "Jun", tickets: 2100 },
    { month: "Jul", tickets: 1900 },
    { month: "Aug", tickets: 2400 },
  ];

  const config = {
    data,
    xField: "month",
    yField: "tickets",
    height: 300,
    smooth: true,
    point: {
      size: 5,
    },
  };

  return <Line {...config} />;
}