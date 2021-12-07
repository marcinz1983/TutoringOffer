import {IOffer} from "../typescript/interfaces";
import React from "react";

//DynamicOfferSection
export function AddDetailedOfferSection(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>): void {
    const newOptions = currentState.sections;
    newOptions.push({title: "", inputValue: "", chipError: false, properities: []});

    currentStateSetMethod({...currentState, sections: newOptions});
}

export function RemoveDetailedOfferSection(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>, index: number): void {
    const newArray = currentState.sections
    newArray.splice(index, 1);

    currentStateSetMethod({...currentState, sections: newArray});
}

export function addDetailedOfferChip(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>, index: number, value: string): void {
    const upperCaseTrimmedValue = value.toUpperCase().trim()
    if (upperCaseTrimmedValue.length) {
        const indexFound = currentState.sections[index].properities.includes(upperCaseTrimmedValue);

        if (!indexFound) {
            currentState.sections![index].properities.push(upperCaseTrimmedValue);
            currentState.sections![index].inputValue = "";
            currentState.sections![index].chipError = false;

            currentStateSetMethod({...currentState});
        } else {
            currentState.sections![index].chipError = true;

            currentStateSetMethod({...currentState});
        }
    }
}

export function addDetailedOfferChipOnKeyPress(currentState: IOffer,
                                               currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                               index: number,
                                               value: string,
                                               e: React.KeyboardEvent<HTMLDivElement>): void {

    if (e.key === "Enter" && value.length) {
        addDetailedOfferChip(currentState, currentStateSetMethod, index, value);
        e.preventDefault();
    }
}

export function removeDetailedOfferChip(currentState: IOffer,
                                        setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                        index: number,
                                        properity: string): void {

    const findIndex = currentState.sections[index].properities.indexOf(properity);
    if (findIndex !== -1) {
        currentState.sections[index].properities.splice(findIndex, 1);

        currentState.sections[index].chipError = false;
        setCurrentStateMethod({...currentState});
    }
}

export function addDetailedOfferSectionTitle(currentState: IOffer,
                                             setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                             index: number,
                                             e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

    currentState.sections[index].title = e.target.value;
    setCurrentStateMethod({...currentState});
}

export function addDetailedOfferChipTitle(currentState: IOffer,
                                          setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                          index: number,
                                          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {

    currentState.sections[index].inputValue = e.target.value;
    setCurrentStateMethod({...currentState});
}

//DynamicPriceSection

export function AddDetailedPriceOfferSection(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>): void {
    const newPrices = currentState.prices;
    newPrices.push({currency: "", description: "", mainPrice: false, price: 0});

    currentStateSetMethod({...currentState, prices: newPrices});
}

export function addDetailedPriceOfferSectionPrice(currentState: IOffer,
                                             setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                             index: number,
                                             e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

    currentState.prices[index].price = parseInt(e.target.value);
    setCurrentStateMethod({...currentState});
}

export function addDetailedPriceOfferSectionCurrency(currentState: IOffer,
                                                  setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                                  index: number,
                                                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

    currentState.prices[index].currency = e.target.value;
    setCurrentStateMethod({...currentState});
}

export function addDetailedPriceOfferSectionTime(currentState: IOffer,
                                                     setCurrentStateMethod: React.Dispatch<React.SetStateAction<IOffer>>,
                                                     index: number,
                                                     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

    currentState.prices[index].description = e.target.value;
    setCurrentStateMethod({...currentState});
}

export function RemoveDetailedPriceOfferSection(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>, index: number): void {
    const newArray = currentState.prices
    newArray.splice(index, 1);

    currentStateSetMethod({...currentState, prices: newArray});
}

export function DetailedPriceOfferChangeMainPrice(currentState: IOffer, currentStateSetMethod: React.Dispatch<React.SetStateAction<IOffer>>, index: number): void {
    const newArray = currentState.prices

    newArray.forEach(price => {
        price.mainPrice = false
    })

    newArray[index].mainPrice = true

    currentStateSetMethod({...currentState, prices: newArray})
}