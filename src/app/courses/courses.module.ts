import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../pipe/safe.pipe';
import { IonicModule } from '@ionic/angular';
import { CoursesPageRoutingModule } from './courses-routing.module';
import { CoursesPage } from './courses.page';
import { CardTemplateComponent } from './card-template/card-template.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule
  ],
  declarations: [CoursesPage,CardTemplateComponent,SafePipe]
})
export class CoursesPageModule {}
