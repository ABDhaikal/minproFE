import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IEvent } from "@/types/events";
import { format } from "date-fns";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// Interface for event properties passed from backend
interface EventCardProps {
  event: IEvent;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
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
  const formattedEventStart = format(new Date(eventStart), "PPP");
  const formattedEventEnd = format(new Date(eventEnd), "PPP");

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-purple-600 hover:bg-purple-700">
              {category}
            </Badge>
          </div>
          {/* {isFree && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-white">
                Free
              </Badge>
            </div>
          )} */}
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="line-clamp-1 font-bold">{name}</h3>
        <p className="text-muted-foreground mb-2 line-clamp-2 text-sm">
          {description}
        </p>
        <div className="text-muted-foreground mb-2 flex items-center text-sm">
          <CalendarDays className="mr-1 h-4 w-4" />
          <span>
            {formattedEventStart} - {formattedEventEnd}
          </span>
        </div>
        <div className="text-muted-foreground mb-2 flex items-center text-sm">
          <Clock className="mr-1 h-4 w-4" />
          <span>{formattedEventStart}</span>
        </div>
        <div className="text-muted-foreground flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="truncate">{location}</span>
        </div>
      </CardContent>

      <Link href={`/explore/${slug}`} className="absolute inset-0">
        <span className="sr-only">View {name}</span>
      </Link>
    </Card>
  );
};

export default EventCard;
