import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppComponent } from './main/app.component';
import { AnimalsComponent } from './main/Animals/Animals/Animals.component';
import { AnimalsModule } from '../app/main/Animals/Animals.module';
import { DataService } from './main/Animals/Animals/Data.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AnimalsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'animals',
        loadChildren: () => import('../app/main/Animals/Animals.module').then(mod => mod.AnimalsModule),
        component: AnimalsComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
