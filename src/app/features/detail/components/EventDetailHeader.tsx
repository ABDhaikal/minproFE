// import { Badge } from "@/components/ui/badge";
// import { IEvent } from "@/types/events";
// import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";

// interface EventDetailHeaderProps {
//   event: IEvent;
// }

// const EventDetailHeader: FC<EventDetailHeaderProps> = ({ event }) => {
  

//   return (
//     <section className="min-h-screen bg-yellow-100">
//       {/* Back to Events link */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-4">
//           <Link
//             href="/explore"
//             className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center text-sm font-medium"
//           >
//             <ArrowLeft className="mr-1 h-4 w-4" />
//             Back to Explore Page
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//           <div className="lg:col-span-2">
//             <div className="mb-6 rounded-lg bg-white p-4">
//               <h1 className="text-3xl font-bold">{event.name}</h1>

//               {/* Main Image */}
//               <div className="overflow-hidden rounded-lg">
//                 {/* Event Thumbnail */}
//                 <Image
//                   src={event.image || "/placeholder.svg"}
//                   alt={event.name || "Event Thumbnail"}
//                   width={1000}
//                   height={500}
//                   className="w-full object-cover"
//                 />
//                 {/* Event Category and Seats */}
//                 <div className="mt-6 flex flex-wrap items-center gap-4">
//                   <Badge
//                     variant="outline"
//                     className="bg-blue-100 text-blue-600"
//                   >
//                     {event.category}
//                   </Badge>

//                   {/* Event Details */}
//                   <div className="text-muted-foreground mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
//                     <div className="flex items-center">
//                       <Calendar className="mr-2 h-5 w-5" />
//                       {/* <span>{event.eventStart ? format(new Date(event.eventStart), "dd MMMM yyyy") : "Date not available"}</span> */}
//                       </div>
//                     <div className="flex items-center">
//                       <Clock className="mr-2 h-5 w-5" />
//                       {/* <span>{event.eventStart ? format(new Date(event.eventStart), "dd MMMM yyyy") : "Date not available"}</span> */}
//                     </div>
//                     <div className="flex items-center">
//                       <MapPin className="mr-2 h-5 w-5" />
//                       <span>{event.location || "Location not available"}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:col-span-1">
//                 <div className="bg-blue sticky top-20 rounded-lg p-4"></div>

//                 <div className="mb-6 space-y-3">
//                   {event.tickets?.map((ticket) => (
//                     <div
//                       key={ticket.id}
//                       className={`flex items-center justify-between rounded-lg bg-blue-100 p-3 ${
//                         ticket.id === "9" ? "border-2 border-blue-500" : ""
//                       }`}
//                     >
//                       <span>{ticket.name}</span>
//                       <span>{ticket.price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Organizer Details */}
//           <div className="text-muted-foreground mt-4 flex items-center text-sm">
//           <span>Organized by: {event.organizer?.name || "Unknown"}</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetailHeader;
