import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { AnimalsComponent } from './Animals/Animals.component';
import { AllAnimalsComponent } from './Animals/AllAnimals/AllAnimals.component';
import { FiveAnimalsComponent } from './Animals/FiveAnimals/FiveAnimals.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'all',
        component: AllAnimalsComponent
      },
      {
        path: 'five',
        component: FiveAnimalsComponent
      }
    ])
  ],
  declarations: [AnimalsComponent]
})
export class AnimalsModule { }
