/**
 * @component
 */

import Stock from "./Stock";
import Coin from "./Coin";

import { Instrument } from "@/types/api.d";

interface InstrumentSelectProps {
  coins: Instrument[];
  stocks: Instrument[];
}

const InstrumentSelect = ({ coins, stocks }: InstrumentSelectProps) => {
  return (
    <div className="flex w-[330px] h-[456px]">
      <div className="flex flex-col relative top-0 justify-between w-[330px] h-[263px]">
        {Coins.map(props => <Coin {...props} />}
      </div>
      <p className="flex relative bottom-[167px] w-[330px] h-[1px] fill-gray-6" />
      <div className="flex flex-col relative bottom-[21px] justify-between w-[330px] h-[121px]">
        {Stocks.map(props => <Stock {...props} />}
      </div>
    </div>
  );
};

export default InstrumentSelect;
