import axios from "axios";
import { IOffer } from "../typescript/interfaces";

export const getAllOffers = async () => {
    const data = axios.get("/api/offer/get")
      .then((response) => response.data)
      .catch((error) => console.log(error));
      return data
}

//TODO: Refactor rest of offers to use dedicated methonds delivered by axios (.get, .post e.g.)

export const addOffer = (payload: IOffer) => {
  const URL = "/api/offer/save";
  axios(URL, {
    method: "post",
    data: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const editOffer = (payload: IOffer, callback: () => void) => {
  const URL = "/api/offer/edit";
  axios(URL, {
    method: "put",
    data: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
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
