export interface IPublicOffer {
    uuid: string,
    firstName: string,
    lastName: string,
    shortDescription: string,
    longDescription: string,
    rateDescription: string,
    backgroundDescription: string,
    price: {
        description: string,
        price: number,
        currency: string,
        mainPrice: boolean,
    }[],
    trainer: {
        name: string,
        image: null | string,
        rating: null | number,
        phone: string
    },
    sections: {
        title: string,
        properties: string[],
    }[],
}