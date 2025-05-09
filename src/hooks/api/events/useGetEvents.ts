"use client";

import { axiosInstance } from "@/lib/axios";
import type { IEvent } from "@/types/events";
import type { PageableResponse } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const response =
          await axiosInstance.get<PageableResponse<IEvent>>("/events");
        return {
          events: response.data.data || [],
        };
      } catch (error) {
        console.error("Error fetching events:", error);
        throw new Error("Failed to fetch events");
      }
    },
  });
};

export default useGetEvents;
