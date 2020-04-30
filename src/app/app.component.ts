import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  Car1 :any;
  Car2 :any;
  Car3 :any;

  isOn :boolean=false;
  isOn1 :boolean=false;
  isOn2 :boolean=false;

  constructor() {
    this.Car1={
      name:'Aston Martin DB11',
      company:'Aston Martin',
      price:'₹ 4.05 Crore',
      specifications: [
        'Seating capacity: 4',
        'Fuel economy: 9 km/l combined',
        'Horsepower: 447 kW',
        'Transmission: 8-speed automatic',
        'Engine: 5.2 L V12',
        'Curb weight: 1,875 kg'
      ]
    }
    this.Car2={
      name: 'Mercedes-Benz Maybach',
      company:'Mercedes-Benz',
      price:'₹ 2.79 Crore',
      specification:[
        "Fuel economy: 9 km/l combined",
        "Dimensions: 5,462 mm L x 1,899 mm W x 1,498 mm H",
        "Fuel tank capacity: 80 L",
        "Curb weight: 2,245 to 2,360 kg",
        "Horsepower: 345 to 463 kW",
        "Engine: 4.0 L V8, 6.0 L V12"
      ]
    }
  
  this.Car3={
    name: 'BMW M5',
    company:'BMW',
    price:'₹ 1.55 Crores onwards	',
    specification:[
      "Engine CC: 4395 cc",
      "Transmission: Automatic",
      "Length/Width/Height:	4966/2126/1478 mm",
      "Kerb Weight:	1930/1930Kg",
      "Boot Space:	560 mm"
    ]
  }
  }
  ngOnInit() {

  }

  togglePrice(){
    this.isOn=!this.isOn;
  }

  togglePrice1(){
    this.isOn1=!this.isOn1;
  }

  togglePrice2(){
    this.isOn2=!this.isOn2;
  }
}
