import { createUserWithEmailAndPassword, getAuth, User, UserCredential } from "firebase/auth";
import { RegisterCredentials, RegistrationError } from "../typescript/registration.model";

export enum FirebaseRegisterError {
    EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
    WEAK_PASSWORD = 'auth/weak-password',
}

export abstract class RegistrationService {
    public static registerUserToFirebase({ email, password }: RegisterCredentials): Promise<User> {
        const auth = getAuth();

        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials: UserCredential) => {
                return userCredentials.user;
            })
            .catch((error) => {
                return new Promise((resolve, reject) => {
                    reject(this.mapErrorCode(error.code))
                })
            });
    }

    public static async registerUser(userInfo: any): Promise<any> {
        const URL = '/api/ADD PROPER PATH'

        // TODO: it will be uncomment after EL-59
        // axios(URL, {
        //     method: 'post',
        //     data: JSON.stringify(userInfo),
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
    }

    private static mapErrorCode(code: FirebaseRegisterError): RegistrationError {
        switch (code) {
            case FirebaseRegisterError.EMAIL_ALREADY_IN_USE:
                return {
                    propName: 'email',
                    message: 'Email zajęty'
                }
            case FirebaseRegisterError.WEAK_PASSWORD:
                return {
                    propName: 'password',
                    message: 'Hasło musi zawierać min 6 znaków'
                }
            default:
                return {
                    propName: null,
                    message: 'Nienany błąd'
                }
        }
    }
}
