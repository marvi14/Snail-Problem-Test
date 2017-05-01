import { BaseRequestOptions } from '@angular/http';

export class AngularReduxRequestOptions extends BaseRequestOptions {

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