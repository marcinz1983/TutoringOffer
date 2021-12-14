import {FirebaseRegisterError, RegistrationService} from "./registration.service";

describe('mapErrorCode', () => {
    it("Email is already in use", () => {
        expect(RegistrationService.mapErrorCode(FirebaseRegisterError.EMAIL_ALREADY_IN_USE)).toStrictEqual({
            propName: 'email',
            message: 'Email zajęty'
        })
    });
    it("Password is too weak", () => {
        expect(RegistrationService.mapErrorCode(FirebaseRegisterError.WEAK_PASSWORD)).toStrictEqual({
            propName: 'password',
            message: 'Hasło musi zawierać min 6 znaków'
        })
    });
    it("Default return", () => {
        // @ts-ignore
        expect(RegistrationService.mapErrorCode(null)).toStrictEqual({
            propName: null,
            message: 'Nieznany błąd'
        })
    });
})
