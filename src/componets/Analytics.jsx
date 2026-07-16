import { Card, Col, DatePicker, Row } from "antd"
import AnalyticsCard from "./AnalyticsCard"
import TotalTicketsChart from "../charts/TotalTicketsChart"
import PriorityChart from "../charts/PriorityChart"
import TicketTypeChart from "../charts/TicketTypeChart"
import TicketSourceChart from "../charts/TicketSourceChart"

export default function Analytics ()
{
  const { RangePicker } = DatePicker
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <RangePicker />
      </div>
      <Row gutter={ [16, 16] }>
        <Col span={ 16 }>
          <AnalyticsCard
            title="Total Number of Tickets"
            loading={false}
          >
            <TotalTicketsChart/>
          </AnalyticsCard>
        </Col>
        <Col span={ 8 }>
          <AnalyticsCard title="Priority Wise Ticket Comparison">
            <PriorityChart/>
          </AnalyticsCard>
        </Col>
        <Col span={ 12 }>
          <AnalyticsCard title="Type Wise Ticket Comparison Ratio">
            <TicketTypeChart/>
          </AnalyticsCard>
        </Col>
        <Col span={ 12 }>
          <AnalyticsCard title="Ticket Creation Source Wise Comparison Ratio">
            <TicketSourceChart />
          </AnalyticsCard>
        </Col>
      </Row>
    </div>
  )
}