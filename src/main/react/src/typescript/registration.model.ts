export interface RegisterCredentials {
    email: string;
    password: string;
}

export interface RegistrationError {
    propName: string | null;
    message: string;
}

export interface IRegisterUserRequest {
    firebaseEmail: string;
    firebaseEmailVerified: boolean;
    firebaseIssuer: string;
    firebaseName: string;
    firebasePicture: string;
    firebaseUid: string;
}