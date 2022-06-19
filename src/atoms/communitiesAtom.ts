import { Timestamp } from "@google-cloud/firestore";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: string;
  privacyType: "public" | "restrict" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}
