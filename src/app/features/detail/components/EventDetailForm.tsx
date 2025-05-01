import useGetEventSlug from "@/hooks/api/events/useGetEventSlug";
import { FC } from "react";
import EventDetailHeader from "./EventDetailHeader";

interface EventDetailFormProps {
  slug: string;
}

const EventDetailForm: FC<EventDetailFormProps> = ({ slug }) => {
  
  const { data: event, isPending } = useGetEventSlug(slug);

  if (isPending) return <div>Loading...</div>;

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <main>
      {/* Event Header */}
      <EventDetailHeader event={event} />
      {/* Event Body (Tabs for Details, Location, Reviews) */}
      {/* <EventDetailBody event={event} /> */}
    </main>
  );
};

export default EventDetailForm;
