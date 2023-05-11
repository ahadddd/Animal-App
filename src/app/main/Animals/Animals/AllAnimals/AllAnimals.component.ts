import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-AllAnimals',
  templateUrl: './AllAnimals.component.html',
  styleUrls: ['./AllAnimals.component.css']
})
export class AllAnimalsComponent implements OnInit {

  animalData: any;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.animalData = this.ds.getData();
    console.log(this.animalData)
  }

}
