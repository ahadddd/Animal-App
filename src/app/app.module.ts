import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppComponent } from './main/app.component';
import { AnimalsComponent } from './main/Animals/Animals/Animals.component';
import { AnimalsModule } from '../app/main/Animals/Animals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
