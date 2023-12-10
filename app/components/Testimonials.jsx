import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <>
      <div className="">
        <Card
          title="Jack F"
          subtitle="Ex Blackrock PM"
          description="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
        />
      </div>
      <div className="">
        <Card
          title="Yash P"
          subtitle="Research, 3poch Crypto Hedge Fund"
          description="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
        />
      </div>
      <div className="">
        <Card
          title="Shiv S"
          subtitle="Co-Founder Magik Labs"
          description="“Managing my own portfolio is helpful and well designed. What’s really interesting is.”"
        />
      </div>
    </>
  );
};

export default Testimonials;
