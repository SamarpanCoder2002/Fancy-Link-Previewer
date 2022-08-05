import React from "react";

const PreviewCollection = ({ linkUrl, metaData }) => {
  return (
    <div className="mt-5 mx-5 md:mx-40 xl:mx-96 flex justify-center">
      <ExpandedCard
        linkUrl={linkUrl ?? "https://samarpandasgupta.com"}
        metaData={metaData}
      />
    </div>
  );
};

const ExpandedCard = ({ linkUrl, metaData }) => {
  const isEmpty = Object.keys(metaData).length === 0;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="mx-h-60 overflow-hidden">
        <a href={linkUrl}>
          <img
            className="rounded-t-lg hover:scale-125 transition-all duration-500 cursor-pointer w-full"
            src={
              isEmpty
                ? "https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                : metaData?.ogImage?.url ??
                  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
            }
            alt=""
          />
        </a>
      </div>
      <div className="p-5">
        <a href={linkUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isEmpty ? "Welcome buddy" : metaData?.ogTitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {isEmpty ? "Enjoy metadata extractor" : metaData?.ogDescription}
        </p>
        <a
          href={linkUrl}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Preview
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PreviewCollection;
