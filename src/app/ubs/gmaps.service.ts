import {UnidadeBasicaSaudeResponse} from './ubs';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
declare var google: any;

@Injectable()
export class GMapsService extends GoogleMapsAPIWrapper {
  constructor(private loader: MapsAPILoader, private zone: NgZone) {
    super(loader, zone);
  }

  adicionarMarcadoresDeUbs(listaDeUbs: UnidadeBasicaSaudeResponse[], mapa : any) {
    let marker = {};

    listaDeUbs.forEach(ubs => {

      marker = new google.maps.Marker({
        position: {lat: ubs.latitude, lng: ubs.longitude},
        map: mapa,
        title: ubs.nome
      });

    });

  }

  getLatitudeLongitude(address: string) {
    console.log('Getting Address - ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          console.log('Error - ', results, ' & Status - ', status);
          observer.next({});
          observer.complete();
        }
      });
    })
  }
}