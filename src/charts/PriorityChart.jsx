import { Pie } from "@ant-design/charts";

export default function PriorityChart() {

  const data = [
    {
      type: "High",
      value: 4861,
    },
    {
      type: "Medium",
      value: 2026,
    },
    {
      type: "Low",
      value: 962  ,
    },
  ];

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    height: 300,
    legend: {
      position: "right",
    },
    label: false,
  };

  return <Pie {...config} />;
}