"use client";

import React from "react";
import ExploreCard from "./ExploreCard";
import useGetEvents from "@/hooks/api/events/useGetEvents";

const ExploreList = () => {
  const { data: events, isPending } = useGetEvents();

  return (
    <>
      {isPending && (
        <div className="h-[30vh flex items-center justify-center">
          <h2>Loading...</h2>
        </div>
      )}

      {!!events && !!events.events.length && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {events.events.map((event) => (
            <ExploreCard key={event.id} event={event} />
          ))}
        </section>
      )}
    </>
  );
};

export default ExploreList;
