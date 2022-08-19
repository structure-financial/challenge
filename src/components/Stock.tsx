/**
 * @component
 */

import { Instrument } from "@/types/api.d";

interface Props {
  stock: Instrument;
}

const Stock = ({ stock: { name, symbol, value, amount } }: Props) => {
  var isNegative: boolean;
  amount >= 0 ? !isNegative : isNegative;
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
      <p
        className={`flex relative bottom-0 right-0 w-[41px] h-[20px] justify-center items-end text-body-2 ${
          isNegative ? "text-red-4" : "text-green-6"
        }`}
      >
        {amount}
      </p>
    </div>
  );
};

export default Stock;
