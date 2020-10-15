import React from "react";
import { BuahProvider } from "./BuahContext";
import BookList from "./BookList";
import BookFrom from "./BookFrom";

const Tugas14 = () => {
  return (
    <BuahProvider>
      <BookList />
      <BookFrom />
    </BuahProvider>
  );
};

export default Tugas14;
