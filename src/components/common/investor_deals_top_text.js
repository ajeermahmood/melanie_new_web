"use client";
import { getInvestorDealsTopText } from "@/api/listings";
import { useEffect, useState } from "react";

const InvestorDealsTopText = () => {
  const [text, setText] = useState("");
  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");

  useEffect(() => {
    getInvestorDealsTopText().then((res) => {
      body_text_div.innerHTML = res.header + res.body;
      setText(body_text_div.innerText);
    });
  }, []);
  return (
    <p className="text-center fz20 maxw1000 mx-auto color-black-grey-2 font-style-2">
      {text}
    </p>
  );
};

export default InvestorDealsTopText;
