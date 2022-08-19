/**
 * @component
 */

import Stock from "./Stock";
import Coin from "./Coin";
import { Instrument } from "@/types/api.d";

interface Props {
  coins: Instrument[];
  stocks: Instrument[];
}

const InstrumentSelect = ({ coins, stocks }: Props) => {
  return (
    <div className="flex w-[330px] h-[456px]">
      <div className="flex flex-col relative top-0 justify-between w-[330px] h-[263px]">
        <Coin coin={coins[0]} />
        <Coin coin={coins[1]} />
        <Coin coin={coins[2]} />
        <Coin coin={coins[3]} />
      </div>
      <p className="flex relative bottom-[167px] w-[330px] h-[1px] fill-gray-6" />
      <div className="flex flex-col relative bottom-[21px] justify-between w-[330px] h-[121px]">
        <Stock stock={stocks[0]} />
        <Stock stock={stocks[1]} />
      </div>
    </div>
  );
};

export default InstrumentSelect;
