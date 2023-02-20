import React from "react";
import DealList from "../Components/Search/DealList";
import Header from "../Components/Search/Header";
import SearchBox from "../Components/Search/SearchBox";

function Search() {
  return (
    <div className="flex-col  flex  item-center justify-center">
      <Header />
      <SearchBox />
      <div className="mt-20 w-full">
        <DealList />
      </div>
    </div>
  );
}

export default Search;
