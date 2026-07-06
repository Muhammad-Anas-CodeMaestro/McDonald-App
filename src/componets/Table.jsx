export default function Table({ headers = [], data = [], onAction = null }) {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-yellow-200">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-1 py-2 text-left font-semibold text-sm border-b-2 border-yellow-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-2 py-2 text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-8 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}