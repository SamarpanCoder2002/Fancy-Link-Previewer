import React, { useState } from "react";
import { getUrlData } from "../api/caller";
import { errorMessage, infoMessage } from "../common/desktop_notification";
import LinkPic from "../images/link.png";

const LinkPlacing = ({ setLinkUrl, setIsLoading, setMetaData }) => {
  const [link, setlink] = useState("");

  const handleLink = async () => {
    if (link.length === 0) {
      infoMessage("Please write a valid link", 2000);
      return;
    }
    if (!link.startsWith("http") || !link.startsWith("https")) {
      infoMessage("Valid link starts with http or https", 3000);
      return;
    }

    setLinkUrl(link);
    setIsLoading(true);

    const response = await getUrlData(link);
    setIsLoading(false);

    if (!response.status) {
      errorMessage('Data Not Found', 2000);
      return;
    }
    setMetaData(response.data ?? {});
  };

  return (
    <div className="mt-5 mx-5 md:mx-40 xl:mx-96">
      <div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <img src={LinkPic} alt="Link Pic" width={20} color="#f3f3f3" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Place your link here"
            required=""
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleLink}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkPlacing;
