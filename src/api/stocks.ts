import type { NextApiRequest, NextApiResponse } from "next";
import { Instrument, APIResponse } from "@/types/api.d";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<Instrument>>
) => {
  /** Finally, send a response back to our app */
  return res
    .status(200)
    .setHeader("Cache-Control", "max-age=0, s-maxage=600")
    .json({
      success: true,
      result: [
        {
          id: 5,
          name: "Apple",
          symbol: "APPL",
          value: "$183.34",
          amount: -2.52,
        },
        {
          id: 6,
          name: "Microsoft",
          symbol: "MSFT",
          value: "$183.34",
          amount: 1.08,
        },
      ],
    });
};
