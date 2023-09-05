// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/utils/connectDb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectDb();
}
