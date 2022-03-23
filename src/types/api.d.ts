/**
 * A representation of a response that we send from our own API.
 */
export type APIResponse<T> = {
  success: boolean;
  error?: CMCErrors | string;
  result?: T[];
};

/**
 * An individual instrument.
 */
export type Instrument = {
  id: number;
  name: string;
  symbol: string;
  value: string;
  amount: number;
};
