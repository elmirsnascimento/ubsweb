import {GMapsService} from '../gmaps.service';
import {UnidadeBasicaSaudeResponse} from '../ubs';
import {UbsService} from '../ubs.service';
import {Component, OnInit, NgZone, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-ubs-search',
  templateUrl: './ubs-search.component.html',
  styleUrls: ['./ubs-search.component.css']
})
export class UbsSearchComponent implements OnInit {
  lat;
  lng;

  endereco = '';
  listaUbs: Array<any>;

  constructor(private ubsService: UbsService, private gmapsService: GMapsService, private zone: NgZone) {}

  ngOnInit() {

    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    } else {
      this.lat = -23.532787;
      this.lng = -46.6602066;
    }
  }

  buscarUbsProximas() {
    this.obterLocalizacaoAtual();
    if (this.lat == null || this.lng == null) {
      //TODO enviar mensagem sobre nao localizar o endereco digitado
    }
    this.ubsService.buscarUbsProximas(this.lng, this.lat)
      .subscribe(resultado => this.listaUbs = resultado);
    console.log(this.listaUbs);

    

  }


  obterLocalizacaoAtual() {

    this.gmapsService.getLatitudeLongitude(this.endereco != null ? this.endereco : 'RUA TUPI 103')
      .subscribe(
      resultado => {
        this.zone.run(() => {
          this.lat = resultado.lat();
          this.lng = resultado.lng();
        });
      },
      error => console.log(error),
      () => console.log('Geocoding completed!')
      );
  }





}
