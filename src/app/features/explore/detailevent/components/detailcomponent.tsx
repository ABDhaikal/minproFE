import { IEvent } from "@/types/events";
import { IOrganizer } from "@/types/organizer";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface DetailComponentProps {
  event: IEvent;
}
const DetailComponent: FC<DetailComponentProps> = ({ event }) => {
  const {
    name,
    description,
    image,
    category,
    eventStart,
    eventEnd,
    location,
    slug,
  } = event;
  console.log(event);

  return (
    <section className="min-h-screen bg-amber-500">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Events link */}
        <div className="mb-4">
          <Link
            href="/explore"
            className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center text-sm font-medium"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Explore Page
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Main */}
            <div className="mb-6 rounded-lg bg-white p-4">
              <div className="relative aspect-[16/9]">
                {/* Event Image */}
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name || "Event Image"}
                  width={1000}
                  height={500}
                  className="w-full object-cover"
                />

                {/* Event Category*/}
                <div>
                  <Badge className="bg-blue-100 text-blue-600">
                    {event.category}
                  </Badge>
                </div>

                {/* Event Details */}
                <div className="text-muted-foreground mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    {/* <span>{event.eventStart ? format(new Date(event.eventStart), "dd MMMM yyyy") : "Date not available"}</span> */}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    {/* <span>{event.eventStart ? format(new Date(event.eventStart), "dd MMMM yyyy") : "Date not available"}</span> */}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>{event.location || "Location not available"}</span>
                  </div>
                </div>

                {/* Event Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">Event Description</h2>
                  <p>{event.description || "Description not available"}</p>
                </div>

                {/* Organizer Details */}
                <div className="text-muted-foreground mt-4 flex items-center text-sm">
                  <span>
                    Organized by: {event.organizer?.name || "Unknown"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-lg bg-white p-4">
              <h2 className="mb-4 text-2xl font-bold">Ticket Information</h2>

              {/* Ticket Price */}

              {/* Ticket Sections */}
              <div className="mb-6 space-y-3">
                {event.tickets?.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`flex items-center justify-between rounded-lg bg-blue-100 p-3 ${
                      ticket.id === "9" ? "border-2 border-blue-500" : ""
                    }`}
                  >
                    <div className="rounded-lg bg-blue-300 px-3 py-1 text-white">
                      <span className="font-bold">Section {ticket.id}</span>
                    </div>
                    <div className="text-sm font-bold">
                      {ticket.amount
                        ? `Rp. ${ticket.price.toLocaleString()}`
                        : "Sold Out"}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Price */}
              <div className="mb-6 rounded-lg bg-blue-100 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Total Price:</span>
                  <span className="font-bold">
                    Rp.{" "}
                    {event.tickets
                      ?.reduce((acc, ticket) => acc + ticket.price, 0)
                      .toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Buy Button */}
              <Button className="w-full bg-green-400 py-3 font-bold text-white hover:bg-green-500">
                BUY TICKETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailComponent;
