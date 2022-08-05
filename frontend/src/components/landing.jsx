import React, { useState, useEffect } from "react";
import { wakeUpCaller } from "../api/caller";
import { DesktopNotification } from "../common/desktop_notification";
import LinkPlacing from "./link_placing";
import Loading from "./loading";
import PreviewCollection from "./preview_collection";
import TopSection from "./top_section";

const Landing = () => {
  const [linkUrl, setLinkUrl] = useState();
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  /// Please ignore thar useEffect Code. As backend in heroku and sometime it sleeps when no longer used, that used for waking up the server.
  useEffect(() => {
    if(linkUrl) return;

    wakeUpCaller();
  }, [linkUrl])
  

  return (
    <div className="dark">
      <TopSection />
      <LinkPlacing
        setLinkUrl={setLinkUrl}
        setIsLoading={setIsLoading}
        setMetaData={setMetaData}
      />
      {!isLoading && (
        <PreviewCollection linkUrl={linkUrl} metaData={metaData} />
      )}
      {isLoading && <Loading />}
      <DesktopNotification />
    </div>
  );
};

export default Landing;
