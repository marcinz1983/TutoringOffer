import axios from "axios";
import { IOffer } from "../typescript/interfaces";

export const getAllOffers = async () => {
    const URL = '/api/offer/get'
    const data = await axios(URL, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then (response => response.data)
    .catch(error => {
        throw error
    });
    return data;
}

export const addOffer = (payload:IOffer) => {
    const URL = '/api/offer/save'
    axios(URL, {
        method: 'post',
        data: JSON.stringify(payload),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}