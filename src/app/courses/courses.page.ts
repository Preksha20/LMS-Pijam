import { Component, OnInit } from '@angular/core';
import Learningdata from '../../assets/learing.json';

interface Learnings {  
  type: string;  
  url: string;  
  title: string;  
  order: Number;  
}  

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  learn: Learnings[] = Learningdata; 

  
  constructor() {
   
   }

  ngOnInit() {
  }

}
