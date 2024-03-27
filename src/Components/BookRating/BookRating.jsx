import { useLoaderData } from "react-router-dom";
import BarCharts from "../BarCharts/BarCharts";

const BookRating = () => {
  const allBooks = useLoaderData();
  const mappedData = allBooks.map((item) => ({
    category: item.category,
    rating: item.rating,
  }));

  return (
    <div className="mt-5 lg:mt-14">
      <BarCharts
        mappedData={mappedData}
        chartKey="rating"
        chartName="category"
      ></BarCharts>
    </div>
  );
};

export default BookRating;
