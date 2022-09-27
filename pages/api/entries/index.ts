import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../databases";
import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

export default function index(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getEntries(res);
    case "POST":
      return insertEntrie(req, res);

    default:
      return res.status(400).json({
        message: "No existe metodo",
      });
  }
}

export const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const entries = await Entry.find().sort({ createdAt: "ascending" });

  res.status(200).json(entries);

  await db.disconnect();
};

export const insertEntrie = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { description = "" } = req.body;

    const newEntry = new Entry({
      description,
      createdAt: Date.now(),
    });

    await db.connect();
    await newEntry.save();
    await db.disconnect();

    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();

    console.log("error", error);
    return res.status(500).json({
      message: "Alguio salio mal, revisar consola del servidor",
    });
  }
};
