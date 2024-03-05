import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginTestService {

  constructor(private http: HttpClient) {
  }

  connectTokenResponse(): any {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('client_id', 'ro.client');
    body.append('scope', 'openid profile roles offline_access default');
    body.append('UserName', 'Jucampos');
    body.append('Password', 'Abc.123');

    let req = new HttpRequest<any>(
      'POST',
      `https://172.24.32.33:9001/connect/token`,
      body,
      {
        headers,
        responseType: 'json',
      },
    );

    this.http.request<any>(req).subscribe((response: any) => {
      console.log('response', response);
    });
  }


}
