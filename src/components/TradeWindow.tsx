/**
 * @component
 */

import { useEffect, useState } from "react";
import InstrumentSelect from "./InstrumentSelect";

const TradeWindow = () => {
  const [stocks, setStocks] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("/api/coins")
      .then((result) => result.json())
      .then((resultCoins) => setCoins(resultCoins.result));
    fetch("/api/stocks")
      .then((result) => result.json())
      .then((resultStocks) => setStocks(resultStocks.result));
  }, []);

  console.log(coins);
  console.log(stocks);

  return (
    <div className="flex justify-center items-center mb-4 w-[380px] h-[718px] text-gray-4 bg-white rounded-xl border border-gray-6">
      <div className="flex flex-col justify-between items-center w-[330px] h-[668px]">
        <p className="flex items-start w-[330px] h-[26px] text-body-1 font-medium text-gray-9">
          Which Asset would you like to buy?
        </p>
        <div className="flex relative w-[330px] h-[54px] bg-gray-8 rounded-lg">
          <p className="flex absolute top-[15px] left-[39px] w-[1px] h-[24px] bg-gray-1 !rounded-full" />
          <div className="flex absolute top-[15px] left-[42px] w-[105px] h-[24px]">
            <p className="text-body-2 text-gray-4">Search assets</p>
          </div>
        </div>
        <InstrumentSelect coins={coins} stocks={stocks} />
        <div className="flex justify-center items-center w-[330px] h-[57px] rounded-lg border border-gray-6">
          <p className="flex w-[53px] h-[24px] text-body-2 text-center text-red-4">
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradeWindow;
