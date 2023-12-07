"use client";
import { getPremiumRentalsTopText } from "@/api/listings";
import React, { useEffect, useState } from "react";

const PremiumRentalsTopText = () => {
  const [text, setText] = useState("");
  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");

  useEffect(() => {
    getPremiumRentalsTopText().then((res) => {
      body_text_div.innerHTML = res.body_text;
      setText(body_text_div.innerText);
    });
  }, []);
  return (
    <p className="text-center fz20 maxw1000 mx-auto color-black-grey-2 font-style-2">
      {text}
    </p>
  );
};

export default PremiumRentalsTopText;
