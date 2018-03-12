import {Injectable} from '@angular/core';
import {UnidadeBasicaSaudeResponse} from './ubs';
import {UbsRequest} from './ubsrequest';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {HttpParams, HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {HttpHeaders} from '@angular/common/http';






@Injectable()
export class UbsService {

  constructor(public http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }


  buscarUbsProximas(lng: number, lat: number): Observable<any> {


    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const ubsRequest = <UbsRequest>{};
    ubsRequest.latitude = lat;
    ubsRequest.longitude = lng;

    let resultado: Observable<Object>;

    resultado = this.http.post('http://localhost:8080/buscarUbsDentroDeRaio', ubsRequest, {
      headers: headers
    });


    return resultado;



  }

}