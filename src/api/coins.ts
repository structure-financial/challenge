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
          id: 1,
          name: "Ethereum",
          symbol: "ETH",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 2,
          name: "Tron",
          symbol: "TRX",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 3,
          name: "Bitcoin",
          symbol: "BTC",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 4,
          name: "Ethereum",
          symbol: "ETH",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 5,
          name: "Tron",
          symbol: "TRX",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 6,
          name: "Bitcoin",
          symbol: "BTC",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 7,
          name: "Ethereum",
          symbol: "ETH",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 8,
          name: "Tron",
          symbol: "TRX",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 9,
          name: "Bitcoin",
          symbol: "BTC",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 10,
          name: "Ethereum",
          symbol: "ETH",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 11,
          name: "Tron",
          symbol: "TRX",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 12,
          name: "Bitcoin",
          symbol: "BTC",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 13,
          name: "Ethereum",
          symbol: "ETH",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 14,
          name: "Tron",
          symbol: "TRX",
          value: "$183.34K",
          amount: 70.4205153,
        },
        {
          id: 15,
          name: "Bitcoin",
          symbol: "BTC",
          value: "$183.34K",
          amount: 70.4205153,
        },
      ],
    });
};
