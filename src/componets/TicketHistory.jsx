import { Collapse, Timeline } from "antd";

const { Panel } = Collapse;

export default function TicketHistory({ history = [] }) {
  const timelineItems = history.map((item) => ({
    children: (
      <div className="flex items-center justify-between w-full">
        <span className="text-[13px] text-gray-600 whitespace-nowrap min-w-[120px]">
          {item.date} &nbsp;|&nbsp; {item.time}
        </span>

        <span className="flex-1 ml-8 text-[13px] text-gray-700">
          <span className="font-medium">{item.event}</span>
          {item.user && (
            <span className="text-gray-500">
              {" "}
              ({item.user} - {item.status})
            </span>
          )}
        </span>
      </div>
    ),
  }));

  return (
    <Collapse
      defaultActiveKey={["0"]}
      bordered
      className="bg-white"
    >
      <Panel
        header={<span className="font-semibold">Ticket History:</span>}
        key="1"
      >
        <Timeline items={timelineItems} />
      </Panel>
    </Collapse>
  );
}