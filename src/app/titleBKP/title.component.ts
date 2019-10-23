import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  animationOptions: AnimationOptions = {
    path: 'assets/animations/code.json'
  };


  constructor() { }

  ngOnInit() {
  }

}
