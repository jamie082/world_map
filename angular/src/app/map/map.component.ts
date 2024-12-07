import { Component, Output } from '@angular/core';
import { ElementRef, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  constructor (
    private componentRef: ComponentRef,
    private GLOBALAPISERVICE: GlobalAPIService ) { }

  isInteropObservable() {
    const svgElement = this.elementRef.nativeElemet.querySelector("svg");
    const pathElements = svgElement.querySelectorAll.("path");

      pathElements.addEventListener("click", this.handleClick.bind(this));
    });
  }

@Output() fromIDChoose = new EventEmitter<string>();
@Output() fromCapitalChoose = new EventEmitter<string>();
@Output() fromRegionChoose = new EventEmitter<string>();
@Output() fromIncomeChoose = new EventEmitter<string>();
@Output() fromLatitudeChoose = new EventEmitter<string>();
@Output() fromLongitudeChoose = new EventEmitter<string>();

@ViewChild(CountryComponent)

private CountryComponent!: CountryComponent

handleClick(event: MouseEvent) { // handle and create a mouse event
  const dir = event.target as SVGPathElement;
  const nationId = dir.id;


  this.GlobalAPIService.getCountryData(nationId).subscribe((data: any) => {
    const name = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const latitude = data[1][0].latitude;
    const longitude = data[1][0].longitude;

    this.fromIDChoose.emit(name);
    this.fromCapitalChoose.emit(capitalCity);
    this.RegionChoose.emit(region);
    this.IncomeChoose.emit(income);
    this.LatitudeChoose.emit(latitude);
    this.fromLongitudeChoose.emit(longitude);
  });
}
}