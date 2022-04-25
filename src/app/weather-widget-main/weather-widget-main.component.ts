import { Component,OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servizio01Service } from '../servizio01.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit, OnDestroy {

  datiAria : any;
  subscription:Subscription;
  apiEndpoint=environment.apiEndpoint
  constructor( private servizio01 : Servizio01Service) { }


  ngOnInit(): void {
    this.datiAria = {
      main : {}
    }
    this.getDatiAria()
  }
  getDatiAria(){
    let observable=this.servizio01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setDatiAria(httpResponse) })
  }
  setDatiAria(dati : any) {
    this.datiAria = dati;

    let data = this.datiAria[0].data
    this.datiAria.data = data;

    let descri = this.datiAria[0].descri
    this.datiAria.descri = descri;

    let previ = this.datiAria[0].previ
    this.datiAria.previ = previ;

    let tende = this.datiAria[0].tende
    this.datiAria.tende = tende;
  }
  ngOnDestroy(): void{
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto ")
    }
  }
}
