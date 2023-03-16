import {Component, OnInit} from '@angular/core';
import City from "../../shared/model/city";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit{

  cityForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cityForm = this.formBuilder.group({
      name:[
        '',
        [Validators.required, Validators.minLength(2)]
      ]
    })
  }

  ngOnInit(): void{

  }

  invalidCityName() {
    return this.cityForm.get('name')?.invalid &&
      (this.cityForm.get('name')?.dirty || this.cityForm.get('name')?.touched)
  }


  addCity() {
   console.log(this.cityForm.value)
  }

  invalidCityForm() {
    return this.cityForm.pristine || this.cityForm.invalid
  }
}
