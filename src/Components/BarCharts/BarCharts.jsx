import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import PropTypes from "prop-types";

const BarCharts = ({ mappedData, chartKey, chartName }) => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "blue",
    "orange",
    "green",
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center items-center w-full">
      <BarChart
        width={1000}
        height={400}
        data={mappedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={chartName} />
        <YAxis />
        <Bar
          dataKey={chartKey}
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {mappedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
BarCharts.propTypes = {
  mappedData: PropTypes.array.isRequired,
  chartKey: PropTypes.string.isRequired,
  chartName: PropTypes.string.isRequired,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default BarCharts;
