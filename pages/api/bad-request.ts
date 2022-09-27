import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: false;
  message: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message = "Bad request" } = req.body;
  res.status(400).json({ ok: false, message });
}
