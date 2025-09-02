"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

const Dates = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="px-10 pt-5 w-full h-full text-center">
        <h2 className="font-semibold text-2xl mt-5">Available Dates</h2>
        <p className="font-semibold text-sm mt-5">
          Highlighted dates are fully booked
        </p>
      </div>
      <div className="my-10 flex flex-row justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default Dates;
