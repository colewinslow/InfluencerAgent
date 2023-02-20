import React, { useState } from "react";
import Loading from "./Loading";

function DealList() {
  const [LoadingDeals, setLoadingDeals] = useState(true);
  return (
    <div className="w-full">{LoadingDeals ? <Loading /> : <div></div>}</div>
  );
}

export default DealList;
