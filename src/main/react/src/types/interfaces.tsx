export interface IOffersInterface {
  offers: {
    offerId: number;
    avatarUrl: string;
    avatarAlt: string;
    title: string;
    subtitle: string;
    languageChip: string;
    cityChip: string;
    onlineChip: string;
    price: number;
    time: number;
    rating: number;
  }[];
}
