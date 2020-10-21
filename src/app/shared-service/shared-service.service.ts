import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }
  launchSuccess = '';
  landSuccess = '';
  launchYear = '';
  getSpacexRawData() {
    console.log(environment.getSpacexData + this.launchSuccess + this.launchYear + this.landSuccess);
    return this.http.get(environment.getSpacexData + this.launchSuccess + this.launchYear + this.landSuccess);
  }
}
