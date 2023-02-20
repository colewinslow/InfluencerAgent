import React from "react";
import Header from "../Components/Search/Header";
import SearchBox from "../Components/Search/SearchBox";

function Search() {
  return (
    <div className="flex-col  flex  item-center justify-center">
      <Header />
      <SearchBox />
    </div>
  );
}

export default Search;
