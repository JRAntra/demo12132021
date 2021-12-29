import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { of } from 'rxjs';

interface carModel {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  edit: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo12132021';
  public dataSource: carModel[] = [];

  public carData = [
    {
      id: 0,
      brand: 'Ford',
      model: 'F350',
      year: 2022,
      price: 57000,
      edit: true,
    },
    {
      id: 1,
      brand: 'Porsche',
      model: 'Cayenne',
      year: 2022,
      price: 85000,
      edit: true,
    },
    {
      id: 2,
      brand: 'Ferrari',
      model: 'F430',
      year: 2005,
      price: 250000,
      edit: true,
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'M4',
      year: 2022,
      price: 72000,
      edit: true,
    },
  ];
  ngOnInit(): void {
    of(this.carData).subscribe((res) => {
      this.dataSource = res;
    });
  }

  public changeEditable(i: number) {
    // console.log(this.dataSource.filter(car => car.id === i)[0].edit);

    this.dataSource.filter((car) => car.id === i)[0].edit =
      !this.dataSource.filter((car) => car.id === i)[0].edit;
  }

  public deleteRow(i: number) {
    this.dataSource = this.dataSource.filter((item) => item.id !== i);
  }

  // public onSave(brand:string, model: string, year: number, price:number, rowId: number) {
    public onSave(row:carModel) {

    this.changeEditable(row.id);
    // this.dataSource.filter(car => car.id === row.id)[0].brand = row.brand;
    // this.dataSource.filter(car => car.id === row.id)[0].model = row.model;
    // this.dataSource.filter(car => car.id === row.id)[0].year = row.year;
    // this.dataSource.filter(car => car.id === row.id)[0].price = row.price;
    this.dataSource = this.dataSource.map((car) => {
      if (car.id === row.id) {
        console.log(car.id);

        return {
          // id: row.id,
          ...car,
          brand: row.brand,
          model: row.model,
          year: row.year,
          price: row.price,
        } as carModel;
      } else {
        return car;
      }
    });
    console.log(this.dataSource);
  }
}
