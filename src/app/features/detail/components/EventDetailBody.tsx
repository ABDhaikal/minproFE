import Image from "next/image";

interface EventDetailBodyProps {
  event: any;
}

const EventDetailBody: React.FC<EventDetailBodyProps> = ({ event }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Event Description</h2>
        <p>{event.description || "Description not available"}</p>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={event.thumbnail || "/placeholder.svg"}
          alt={event.title || "Event Thumbnail"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default EventDetailBody;
