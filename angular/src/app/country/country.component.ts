import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  @Input() nationId!: string;
  @Input() nationCapital!: string;
  @Input() nationRegion!: string;
  @Input() nationIncome!: string;
  @Input() nationLatitude!: string;
  @Input() nationLongitude!: string;

  constructor() { }

  ngOnInit(): void { }
}