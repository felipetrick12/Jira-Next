import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../databases";
import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry[];

export default function index(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

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
