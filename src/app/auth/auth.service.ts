import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refershToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) {

    }
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://securetoken.googleapis.com/v1/token?key=AIzaSyCQkBybFFx2xKJbqQOavEzl-uS5ttmswE8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
    }
}