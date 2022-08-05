import React, { useState } from "react";
import LinkPlacing from "./link_placing";
import PreviewCollection from "./preview_collection";
import TopSection from "./top_section";

const Landing = () => {
  const [linkUrl, setLinkUrl] = useState("https://samarpandasgupta.com/");

  return (
    <div className="dark">
      <TopSection />
      <LinkPlacing setLinkUrl={setLinkUrl} />
      <PreviewCollection linkUrl={linkUrl} />
    </div>
  );
};

export default Landing;
