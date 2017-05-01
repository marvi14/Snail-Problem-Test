import { BaseRequestOptions } from '@angular/http';

export class AngularReduxRequestOptions extends BaseRequestOptions {

    //In case we use token-based security with the BE, with this interceptor, we can append the token to the Headers in each request
    public token: string;

    constructor(angularReduxOptions?: any) {

        super();
        this.headers.append('Accept', 'text/html');
        if (angularReduxOptions != null) {
            for (let option in angularReduxOptions) {
                let optionValue = angularReduxOptions[option];
                this[option] = optionValue;
            }
        }
    }

}