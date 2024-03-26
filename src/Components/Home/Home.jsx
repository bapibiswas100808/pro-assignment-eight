import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";

const Home = () => {
  const allBooks = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Book allBooks={allBooks}></Book>
    </div>
  );
};

export default Home;
