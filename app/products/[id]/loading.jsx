import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center w-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
