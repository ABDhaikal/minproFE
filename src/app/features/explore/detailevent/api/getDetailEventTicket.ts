import { axiosInstance } from "@/lib/axios";
import { IEvent } from "@/types/events";
import { redirect } from "next/navigation";
import { cache } from "react";

interface responsegetDetailEvent {
  data: IEvent;
  message: string;
}

export const getDetailPageEvent = cache(async (slug: string) => {
  try {
    const { data } = await axiosInstance.get<responsegetDetailEvent>(
      `/events/${slug}`,
    );
    return data;
  } catch (error) {
    return redirect("/explore");
  }
});
