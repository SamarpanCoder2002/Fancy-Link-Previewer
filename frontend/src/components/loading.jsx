import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <div className="h-80 flex justify-center items-center flex-col">
            <ReactLoading type="bubbles" color="#fff" />
        </div>
    );
}

export default Loading;