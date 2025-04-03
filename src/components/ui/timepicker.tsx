"use client";

import { useState } from "react";

export function TimePicker() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");

  return (
    <form className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none" />
          <input
            type="time"
            id="start-time"
            className="leading-none border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="09:00"
            max="18:00"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none" />
          <input
            type="time"
            id="end-time"
            className="leading-none border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-bbr focus:border-blue-500 block w-full 
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="09:00"
            max="18:00"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
}
