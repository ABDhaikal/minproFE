export interface IOrganizer {
  id: string;
  userId: string;
  name: string;
  slug: string;
  organizerPicture: string | null;
  description: string;
  bankTarget: string;
  paymentTarget: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}
