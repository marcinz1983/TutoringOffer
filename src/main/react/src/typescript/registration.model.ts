export interface RegisterCredentials {
    email: string;
    password: string;
}

export interface RegistrationError {
    propName: string | null;
    message: string;
}