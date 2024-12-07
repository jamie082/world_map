import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';


  setId:string = "";
  setCapital:string = "";
  setRegion: string = "";
  setIncomelevel: string = "";
  setLatitude: string = "";
  setLongitude: string = "";

fromIDChoose(id: string) {
  this.setId = id;
}
fromCapitalChoose(capital: string) {
  this.setCapital = capital;
}
fromRegionChoose(region: string) {
  this.setRegion = region;
}
fromIncomeChoose(income: string) {
  this.setIncomelevel = income;
}
fromLatitudeChoose(latitude: string) {
  this.setLatitude = latitude;
}
fromLongitudeChoose(longitude: string) {
  this.setLongitude = longitude;
}
}