export interface ITeacherProfile {
  avatarAlt: string;
  avatarUrl: string;
  username: string;
  accountType: string;
}

export interface IOffer {
  uuid?: number;
  backgroundDescription: string;
  firstName: string;
  lastName: string;
  longDescription: string;
  price: number;
  rateDescription: string;
  shortDescription: string;
}

export type IOfferLocationState = {
  from: {
    path: string;
  };
  props: {
    backgroundDescription: string;
    firstName: string;
    lastName: string;
    longDescription: string;
    price: number;
    rateDescription: string;
    shortDescription: string;
  };
};
