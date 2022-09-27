import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../databases";
import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El ID no es válido" + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return findEntry(req, res);

    default:
      return res.status(400).json({ message: "El ID no es válido" });
  }
}

const findEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const existEntry = await Entry.findById(id);
  await db.disconnect();

  if (!existEntry) {
    return res.status(400).json({
      message: "No existe entrada con ese ID",
    });
  }
  try {
    return res.status(200).json(existEntry!);
  } catch (error: any) {
    res.status(400).json({ message: error.errors.status.message });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const existEntry = await Entry.findById(id);

  if (!existEntry) {
    await db.disconnect();
    return res.status(400).json({
      message: "No existe entrada con ese ID",
    });
  }

  const { description = existEntry.description, status = existEntry.status } =
    req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};
