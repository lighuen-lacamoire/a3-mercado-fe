type InstrumentRowDto = {
  id: number;
  code: string;
  lastPrice: number;
  accumulatedVolume: number;
  variation: number;
};

type InstrumentPriceDto = {
  code: string;
  price: number;
  variation: number;
  accumulatedVolume: number;
};
