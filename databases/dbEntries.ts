import { isValidObjectId } from "mongoose";
import { db } from ".";
import { Entry, IEntry } from "../models";

export const getEntriesById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = Entry.findById(id).lean();

  await db.disconnect();

  return {
    _id: "123",
    createdAt: 213,
    description: "312321",
    status: "finished",
  };
};
