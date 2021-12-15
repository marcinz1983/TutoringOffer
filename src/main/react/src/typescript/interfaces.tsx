import auth from "firebase/auth"
import React from "react";
import {IPublicOffer} from './offer.model';

export interface User extends auth.User {
}

export interface IRegisterForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repassword: string,
}

export interface IOfferItem {
    offer: {
        description: string,
        price: number,
    };
    trainer: {
        image: string,
        name: string,
        rating: number,
    }
}

export interface IDialogProps {
    onClose?: any,
    open: boolean,
    radioValue?: string,
    onRadioChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    rateValue?: any,
    handleRateChange?: (event: Event, newValue: number | number[]) => void,
    setRateValue?: any,
}

export interface ILoginForm {
    email: string,
    password: string,
}

export interface ILoginErrorForm {
    firebaseErrorCode: string,
    firebaseErrorMessage: string,
    inputEmptyError?: boolean,
    displayError: boolean
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
    prices: {
        currency: string,
        description: string,
        mainPrice: boolean,
        price: number
    }[];
    rateDescription: string;
    shortDescription: string;
    sections: {
        title: string;
        inputValue?: string;
        chipError?: boolean;
        properities: string[];
    }[];
}

export interface IOfferDynamicSection {
    options?: {
        title: string;
        inputValue?: string;
        chipError?: boolean;
        properities: string[];
    }[];
    removeSection: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number) => void,
    addSectionTitle: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    keyPressAddChip: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>, index: number, value: string, e: React.KeyboardEvent<HTMLDivElement>) => void,
    addChip: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>, index: number, value: string) => void,
    addChipTitle: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    removeChip: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>, index: number, properity: string) => void,
    offerDetails: IOffer,
    setOfferDetails: React.Dispatch<React.SetStateAction<IOffer>>
}

export interface IOfferDynamicPriceSection {
    prices: {
        currency: string,
        description: string,
        mainPrice: boolean,
        price: number
    }[],
    addDetailedPriceOfferSectionPrice: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  void,
    addDetailedPriceOfferSectionCurrency: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  void,
    addDetailedPriceOfferSectionTime: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  void,
    RemoveDetailedPriceOfferSection: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number) =>  void,
    DetailedPriceOfferChangeMainPrice: (currentState: IOffer, setCurrentState: React.Dispatch<React.SetStateAction<IOffer>>,index: number) =>  void,
    offerDetails: IOffer,
    setOfferDetails: React.Dispatch<React.SetStateAction<IOffer>>
}

export interface ISearchTopProps {
    rateValue: number[],
    setRateValue: React.Dispatch<React.SetStateAction<number[]>>,
    searchInputValue: string,
    setSearchInputValue:  React.Dispatch<React.SetStateAction<string>>,
    radioValue: string,
    setRadioValue: React.Dispatch<React.SetStateAction<string>>,
    searchButtonClickAction: () => void
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

export interface IGetAllPublicOfferPayload {
    maxPrice: number,
    minPrice: number,
    page: number,
    searchingString: string,
    size: number
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
