export enum HAMBURGER {
    LIST_ITEM_1 = "Znajdź korepetycje",
    LIST_ITEM_2 = "Logowanie",
    LIST_ITEM_3 = "Rejestracja",
}

export enum HOMEPAGE {
    SEARCHBAR_PLACEHOLDER = "Czego chcesz się nauczyć?",
    HERO_TITLE = "Znajdź \nkorepetycje \nz programowania",
    HERO_SUBTITLE_1 = "Wyszukaj z pośród",
    HERO_SUBTITLE_HIGHLIGHT = "10 tys. ofert",
    HERO_SUBTITLE_2 = "od naszych\ntrenerów",
    INFOICON_CARD_STRING_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus massa in nunc faucibus, vel sollicitudin sapien egestas. Cras porttitor odio sed hendrerit mollis. Nullam ac orci pharetra, tristique lacus tempor",
    INFOICON_CARD_STRING_2 = "Gdy znajdziesz już swojego idealnego trenera, skontaktuj się z nim w najwygodniejszy dla Ciebie sposób: za pośrednictwem naszego komunikatora, mailowo lub telefonicznie.",
    STEPSECTION_TITLE_1 = "Znajdź",
    STEPSECTION_TITLE_2 = "Skontaktuj się",
    STEPSECTION_TITLE_3 = "Zaplanuj lekcję",
    CLIENTSSAY_TITLE = "Sprawdź co mówią o nas\nnasi uczniowie",
    OFFERSTILES_TITLE = "Znajdź interesujące Cię korepetycje!",
}

export enum FOOTER {
    LOGO_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies quam nec velit interdum, a cursus sem scelerisque. In tempus erat semper.",
    HEADING = "Heading",
    LINK_1_TEXT = "Link 1",
    LINK_2_TEXT = "Link 2",
    LINK_3_TEXT = "Link 3",
    LINK_4_TEXT = "Link 4",
    COPYRIGHT_TEXT = "© 2021 Logo. All rights Reserved.",
    WHITEBAR_PRIVACY = "Privacy Policy",
    WHITEBAR_TERMS_OF_SERVICE = "Terms of service",
}

export enum FORM_REGISTER {
    TITLE_REGISTER = "Rejestracja",
    BUTTON_REGISTER = "Rejestruj się",
    BUTTON_BACK = "Powrót",
    EMAIL_ERROR = "Podaj Prawidłowy Email",
    PASSWORD_ERROR = "Hasło wymaga: Min 6 znaków",
    REPASSWORD_ERROR = "Podaj te same hasło",
    INPUT_NAME = "Imie",
    INPUT_SURNAME = "Nazwisko",
    INPUT_USERNAME = "Nazwa użytkownika",
    INPUT_EMAIL = "Email",
    INPUT_PASSWORD = "Hasło",
    INPUT_REPASSWORD = "Powtórz haslo",
}

export enum SEARCH_OFFER {
    RATE_BUTTON = 'Stawka',
    SORT_BUTTON = 'Sortowanie',
    HIGHEST_RATED_LABEL = "Najwyżej oceniany",
    LOWEST_RATED_LABEL = "Najniżej oceniany",
    PRICE_GROWING = "Cena rosnąco",
    PRICE_DESCENDING = "Cena malejąco",
    SAVE_BUTTON = "Zapisz",
    CURRENCY = "zł",
    LOAD_MORE_BUTTON = "Załaduj więcej",
    FROM = "od",
    CURRENCY_PER_HOUR = "zł/h",
    HEADING_FIND_TRAINER = "Znajdź idealnego trenera dla siebie",
    MIN_RATESLIDER_VALUE = 0,
    MAX_RATESLIDER_VALUE = 200,
    HEADING_NO_RESULTS_BIG= "Nie znaleźliśmy ofert spełniających podane kryteria.",
    HEADING_NO_RESULTS_SMALL="Użyj innych słów kluczowych i spróbuj ponownie.",

    //for offer api search call
    HOW_MANY_RESULTS=9,
    HOW_MANY_PAGES=0
}

export enum OFFER {
    SIDE_MENU_STRING_1 = "Moje ogłoszenia",
    SIDE_MENU_STRING_2 = "Dodaj ogłoszenie",
    SIDE_MENU_STRING_3 = "Wiadomości",
    EDIT_OFFER = "Edytuj ogłoszenie",
    DELETE_OFFER = "Usuń ogłoszenie",
    SUCESS_MESSAGE_SHORT = "Udało się!",
    SUCESS_MESSAGE_LONG = "Udało się!",
    DELETE_OFFER_SUCCESS_MESSAGE = "Usunęliśmy Twoje ogłoszenie.",
    EDIT_OFFER_SUCCESS_MESSAGE = "Twoje ogłoszenie zostało pomyślnie edytowane.",
    EDIT_TITLE = "Edycja",
    EDIT_TIME = "Czas",
    EDIT_LEVEL = "Poziom",
    EDIT_SUBMIT = "Aktualizuj",
    EDIT_CANCEL = "Anuluj",
    EDIT_YOUR_PRICING = "Edytuj swoje cenniki",
    EDIT_DETAILED_OFFERS = "Edytuj szczegółowe informacje"
}

export enum CREATE_OFFER_FORM {
    FORM_TITLE = "Stwórz swoją ofertę",
    FORM_INPUT_NAME = "Imię",
    FORM_INPUT_SURNAME = "Nazwisko",
    FORM_INPUT_SHORTHAND_DESC = "Krótki opis oferty",
    FORM_INPUT_LONG_DESC = "Szczegółowy opis oferty",
    FORM_INPUT_PRICE = "Cena",
    FORM_INPUT_CURRENCY = "PLN",
    FORM_INPUT_RATE_DESC = "Czas za podaną stawkę",
    FORM_INPUT_RATE_ADDITIONAL_DESC = "Opis dodatkowy",
    BUTTON_ADD_OFFER = "Dodaj szczegółową ofertę",
    BUTTON_ADD_ANOTHER_OFFER = "Dodaj kolejną szczegółową ofertę",
    BUTTON_SUBMIT = "Wyślij",
    BUTTON_RETURN = "Powrót",
    BUTTON_ADD_ANOTHER_PRICE = "Dodaj kolejną cenę",
    HEADING_ADD_DETAILED_INFO = "Dodaj szczegółowe informacje",
    HEADING_ADD_YOUR_PRICING = "Dodaj swoje cenniki",

}

export enum OFFER_DYNAMIC_SECTION {
    INPUT_SECTION_TITLE= "Wpisz tytuł sekcji",
    INPUT_SECTION_EL = "Wpisz element sekcji",
    BUTTON_ADD_SECTOIN_EL = "Dodaj element sekcji",
    ALERT_CHIP_ERROR = "Taka wartość już istnieje"
}

export enum LOGIN_FORM_CONSTS {
    FORM_HEADER = "Zaloguj się",
    LOGIN_INPUT_LABEL = "Adres e-mail",
    PASSWORD_INPUT_LABEL = "Hasło",
    RECOVER_PASSWORD = "Odzyskaj hasło",
    LOGIN_BUTTON = "Zaloguj się",
    REMEMBER_ME_CHECKBOX_LABEL = "Zapamiętaj mnie",
    FORM_BOTTOM_TEXT = "Nie masz jeszcze konta?",
    FORM_REGISTER_LINK = "Zarejestruj się!",
    LOGIN_ERROR_MESSAGE = "Email lub hasło są nieprawidłowe",
    EMPTY_INPUT_ERROR = "Podaj login i hasło aby się zalogować."
}

export const AUTOCOMPLETE_INPUT_OPTIONS = [
    {label: 'Javascript', id: '1'},
    {label: 'Python', id: '2'},
    {label: 'C++', id: '3'},
    {label: 'C#', id: '4'},
    {label: 'Ruby', id: '5'},
    {label: 'JAVA', id: '6'},
    {label: 'Typescript', id: '7'},
    {label: 'CoffeScript', id: '8'},
    {label: 'Visual Basic', id: '9'},
    {label: 'SQL', id: '10'},
]

export enum PAGE_NOT_FOUND {
    HEADING_PAGE_NOT_FOUND= "Coś się zepsuło, strony nie znaleziono",
    BUTTON_RETURN_TO_HOMEPAGE = "Wróć do strony głównej"
}