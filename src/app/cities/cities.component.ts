import {Component, OnInit} from '@angular/core';
import City from "../../shared/model/city";
import {checkForPrivateExports} from "@angular/compiler-cli/src/ngtsc/entry_point";
//import {CityService} from "../../shared/service/city.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit{

  title: string = 'Cities App';
  cities!: City[]

  constructor(
    //private cityService: CityService
  ) {
    //this.cities = cityService.cities
  }

  ngOnInit(): void {
  }

}
