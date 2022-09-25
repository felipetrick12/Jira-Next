import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from "../../databases";
import { EntryModel } from "../../models/EntryModel";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(400)
      .json({ message: "No tiene credenciales permitidas" });
  }

  await db.connect();
  await EntryModel.deleteMany();
  await EntryModel.insertMany(seedData.entries);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
