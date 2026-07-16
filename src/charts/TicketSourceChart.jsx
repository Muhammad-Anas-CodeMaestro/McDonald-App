import { Column } from "@ant-design/charts";

export default function TicketSourceChart() {

  const data = [
    {
      month: "Jan",
      source: "Email",
      value: 120,
    },
    {
      month: "Jan",
      source: "Agent",
      value: 80,
    },
    {
      month: "Jan",
      source: "User",
      value: 60,
    },

    {
      month: "Feb",
      source: "Email",
      value: 150,
    },
    {
      month: "Feb",
      source: "Agent",
      value: 100,
    },
    {
      month: "Feb",
      source: "User",
      value: 90,
    },
  ];

  const config = {
    data,
    xField: "month",
    yField: "value",
    seriesField: "source",
    isGroup: true,
    height: 300,
  };

  return <Column {...config} />;
}