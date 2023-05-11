import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-FiveAnimals',
  templateUrl: './FiveAnimals.component.html',
  styleUrls: ['./FiveAnimals.component.css']
})
export class FiveAnimalsComponent implements OnInit {
  
  animalData: any = []; 
  constructor(private ds: DataService) { }

  ngOnInit() {
    let holder = this.ds.getData();
    for(let i = 0; i < 5; i++) {
      this.animalData.push(holder[i])
    }
  }

}
