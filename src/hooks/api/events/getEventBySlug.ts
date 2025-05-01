import { notFound } from "next/navigation";
import { cache } from "react";
import { axiosInstance } from "@/lib/axios";
import { IEvent } from "@/types/events";

export const getEventBySlug = cache(async (slug: string) => {
  try {
    const response = await axiosInstance.get<IEvent>(`/events/${slug}`);
    
    // If no data is returned, trigger the Next.js notFound functionality
    if (!response.data) {
      return notFound();
    }
    
    return response.data;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return notFound();
  }
});