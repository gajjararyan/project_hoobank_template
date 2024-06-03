import React from "react";
import HighlightText from "./HighlightText";
import HighlightText2 from "./HighlightText2";
import HighlightText3 from "./HighlightText3";

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      We are devoted to delivering excellence in the ever-evolving digital
      landscape by providing
      <HighlightText text={"IT consulting "} />
      &
      <HighlightText2 text={"Services"} />
      {", "}
      that bridge the gap between
      <HighlightText3 text={"business and technology."} />
    </div>
  );
};

export default Quote;
