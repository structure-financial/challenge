/**
 * @component
 */

import { Instrument } from "@/types/api.d";

interface Props {
  coin: Instrument;
}

const Coin = ({ coin: { name, symbol, value, amount } }: Props) => {
  return (
    <div className="flex w-[330px] h-[47px]]">
      <p className="flex relative top-[4px] left-0 w-[40px] h-[40px] !rounded-full border border-gray-6" />
      <p className="flex relative top-0 left-[48px] w-[181px] h-[24px] justify-center items-start text-body-2 text-gray-1">
        {name}
      </p>
      <p className="flex relative top-0 right-0 w-[81px] h-[24px] justify-center items-end text-body-2 text-gray-1">
        {value}
      </p>
      <p className="flex relative bottom-0 left-[48px] w-[70px] h-[20px] justify-center items-start text-body-3 text-gray-4">
        {symbol}
      </p>
      <p className="flex relative bottom-0 right-0 w-[141px] h-[20px] justify-center items-end text-body-2 text-gray-4">
        {amount}
      </p>
    </div>
  );
};

export default Coin;
