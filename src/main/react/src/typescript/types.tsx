import {Location} from "history";

export type TLocationState = {
    from: {
      path: string;
    };
    offerProps: {
      uuid?: string;
      backgroundDescription: string;
      firstName: string;
      lastName: string;
      longDescription: string;
      price: number;
      rateDescription: string;
      shortDescription: string;
    };
  };

export type TLocationStateAsString = {
    from: Location
    state: string
}