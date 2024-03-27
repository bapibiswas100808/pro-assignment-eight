import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import BarCharts from "../BarCharts/BarCharts";

const PagesToRead = () => {
  const [chartData, setChartData] = useState([]);
  const [displayChart, setDisplayChart] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const readData = getFromLocalStorage();
    setChartData(readData);
  }, []);
  useEffect(() => {
    const chartBooks = [];
    for (const data of chartData) {
      const targetBook = allBooks.find(
        (book) => parseInt(book.bookId) === parseInt(data)
      );
      chartBooks.push(targetBook);
    }
    setDisplayChart(chartBooks);
  }, [allBooks, chartData]);
  const mappedData = displayChart.map((item) => ({
    name: item.bookName,
    pages: item.totalPages,
  }));
  return (
    <div className="mt-14">
      <BarCharts
        mappedData={mappedData}
        chartKey="pages"
        chartName="name"
      ></BarCharts>
    </div>
  );
};

export default PagesToRead;
