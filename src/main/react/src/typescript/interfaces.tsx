import auth from "firebase/auth"

export interface User extends auth.User {
}

export interface IRegisterForm {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  repassword: string,
}

export interface IErrorsForm {
  email: string,
  password: string,
  repassword: string,
  valid: boolean,
}

export interface ITeacherProfile {
  avatarAlt: string;
  avatarUrl: string;
  username: string;
  accountType: string;
}

export interface IOffer {
  uuid?: string;
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
    uuid?: string;
    backgroundDescription: string;
    firstName: string;
    lastName: string;
    longDescription: string;
    price: number;
    rateDescription: string;
    shortDescription: string;
  };
}

export interface ILocationDefaultObject {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: {
    displayMessage?: string;
  };
}

export interface IMainTheme {
  breakpoints: {
    values: {
      xs?: number,
      sm?: number,
      md?: number,
      lg?: number,
      xl?: number,
    }
  }
  palette: {
    primary: {
      main?: string,
      light?: string,
      dark?: string,
    }
    secondary: {
      main?: string,
      light?: string,
      dark?: string,
    },
    background: {
      default: string,
    }
  },

  overrides?: {}
}
