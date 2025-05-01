import { IOrganizer } from "./organizer";


export interface IEvent {
  id: string;
  organizerId: string;
  category: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  location: string;
  status: "DRAFT" | "PUBLISHED";
  eventStart: string;
  eventEnd: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  organizer?: IOrganizer;
  tickets?: ITicket[];
}
