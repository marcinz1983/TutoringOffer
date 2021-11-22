import axios from "axios";
import { IOffer } from "../typescript/interfaces";

export const getAllOffers = async () => {
    const data = axios.get("/api/offer/get")
      .then((response) => response.data)
      .catch((error) => console.log(error));
      return data
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
