import React from "react";

function Loading() {
  function PencilLineIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        <path d="m15 5 3 3" />
      </svg>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center">
      <PencilLineIcon className="h-12 w-12 animate-spin text-primary" />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Please wait a moment while we process your request.
        </p>
      </div>
    </div>
  );
}

export default Loading;
