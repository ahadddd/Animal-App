import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Animals',
  templateUrl: './Animals.component.html',
  styleUrls: ['./Animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    console.log('Animals Component loaded.');
    
  }
  loadAll() {
    this.router.navigateByUrl('all');
  }
  loadFive() {
    this.router.navigateByUrl('five');
  }

}
