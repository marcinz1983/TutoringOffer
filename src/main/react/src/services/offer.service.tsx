import axios from "axios";
import {IOffer} from "../typescript/interfaces";
import {IPublicOffer} from "../typescript/offer.model";
import {SEARCH_OFFER} from "../utility/constants";
import {Location} from "history";

export const getAllOffers = async () => {
    return axios.get("/api/offer/get")
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

type LocationState = {
    from: Location
    state: string
}

export const getAllPublicOffers = async (maxRateValue: number, minRateValue: number, searchInputValue: string | LocationState): Promise<IPublicOffer[]> => {
    const findOffersNumberOfPages = SEARCH_OFFER.HOW_MANY_PAGES;
    const findOffersNumberOfResults = SEARCH_OFFER.HOW_MANY_RESULTS;

    const publicOfferRequest = {
        maxPrice: maxRateValue,
        minPrice: minRateValue,
        page: findOffersNumberOfPages,
        searchingString: searchInputValue,
        size: findOffersNumberOfResults,
    }
    //@ts-ignore
    return axios.post("/public/api/searchOffers", publicOfferRequest)
        .then(response => response.data)
        .catch(error => console.log(error))
}

export const addOffer = (payload: IOffer) => {
    axios.post("/api/offer/save", payload)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};

export const editOffer = (payload: IOffer, callback: () => void) => {
    axios.put("/api/offer/edit", payload)
        .then((response) => {
            console.log(response);
            callback();
        })
        .catch((error) => console.log(error));
};

export const deleteOffer = (uuid: string | undefined, callback: () => void) => {
    const URL = `/api/offer/${uuid}`;
    axios.delete(URL);
    callback();
};
