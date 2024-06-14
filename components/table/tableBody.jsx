import _ from "lodash";

const TableBody = ({ columns, data, id }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.key === "date") return new Date(_.get(item, column.key)).toDateString();
    return _.get(item, column.key);
  };
  const keyGenerate = () => {
    return Math.floor(Math.random() * 10000 + 1);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={keyGenerate()} className="">
          {columns.map((column) => (
            <td scope="row" key={keyGenerate()} className="align-content-center ps-3">
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
