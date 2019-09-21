import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../model/common';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient) { }

    post(url, obj): Observable<Object> {
        return this.http.post(`${this.config.apiEndpoint}` + url, obj);
    }

    get(url): Observable<Object> {
        return this.http.get(`${this.config.apiEndpoint}` + url);
    }
}
