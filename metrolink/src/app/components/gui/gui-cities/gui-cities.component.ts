import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { CityService } from './../../../services/cities/city.service';

import { City } from '../../../services/cities/city'

@Component({
  selector: 'app-cities',
  templateUrl: './gui-cities.component.html',
  styleUrls: ['./gui-cities.component.scss']
})

export class GuiCitiesComponent implements OnInit {

  //fields for city list
  CityData: any = [];
  dataSource: MatTableDataSource<City>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['name','action'];

  //fields for add city
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('resetCityForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  cityForm: FormGroup;

  ngOnInit() {
    this.submitReactiveCityForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private cityApi: CityService
  ) {
    this.getAllCities();
  }

  getAllCities() {
    this.cityApi.GetCities().subscribe(data => {
      this.CityData = data;
      this.dataSource = new MatTableDataSource<City>(this.CityData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  /* Reactive city form */
  submitReactiveCityForm() {
    this.cityForm = this.fb.group({
      name: ['', [Validators.required]],
      deleted: [0],
      created_date: [new Date()]
    })
  }

  deleteCity(index: number, e){
    if(window.confirm('Are you sure')) {
      // const data = this.dataSource.data;
      // data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      // this.dataSource.data = data;
      this.cityApi.DeleteCity(e._id).subscribe( res => {
        this.getAllCities()
      })
    }
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.cityForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitCityForm() {
    if (this.cityForm.valid) {
      this.cityApi.AddCity(this.cityForm.value).subscribe(res => {
          this.getAllCities()
      });
    }
  }

}