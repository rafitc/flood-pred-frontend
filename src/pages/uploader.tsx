import React from "react";

export default function Uploader() {
  return (
    <div className="mx-auto w-1/2 pt-10">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="user_avatar"
      >
        Upload JSON file
      </label>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        Use only JSON file of rain fall data
      </div>
    </div>
  );
}
