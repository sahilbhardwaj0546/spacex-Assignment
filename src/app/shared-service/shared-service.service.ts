import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }
  launch_success='';
  land_success='';
  launch_year='';
  getSpacexRawData()
  {
    console.log(environment.getSpacexData+this.launch_success+this.launch_year+this.land_success);
  return this.http.get(environment.getSpacexData+this.launch_success+this.launch_year+this.land_success);
  }
}
