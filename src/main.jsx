import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import BookDetails from "./Components/BookDetails/BookDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import BookRating from "./Components/BookRating/BookRating";
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/rating",
        element: <BookRating></BookRating>,
        loader: () => fetch("../books.json"),
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
