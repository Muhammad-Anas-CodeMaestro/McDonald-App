import { Card } from "antd";

export default function AnalyticsCard({
  title,
  children
}){
  return(
    <Card title={title}>
      {children}
    </Card>
  )
}