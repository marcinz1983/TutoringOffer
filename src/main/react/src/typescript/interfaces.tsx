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
export interface IOfferLocationState {
  from: {
    path: string;
  };
  props: {
    uuid?: number;
    backgroundDescription: string;
    firstName: string;
    lastName: string;
    longDescription: string;
    price: number;
    rateDescription: string;
    shortDescription: string;
  };
};

export interface ILocationDefaultObject {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state: {
    editSucess?: boolean
  }
}
