import React from "react";
import DealList from "../Components/Search/DealList";
import Header from "../Components/Search/Header";
import SearchBox from "../Components/Search/SearchBox";

function Search() {
  return (
    <div className="flex-col w-full  flex  item-center justify-center">
      <Header />
      <SearchBox />
      <div className="mt-20 flex justify-center items-center w-[100%]">
        <DealList />
      </div>
    </div>
  );
}

export default Search;
