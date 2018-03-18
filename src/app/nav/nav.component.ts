import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() titleValue : string;
  title : string = "my title";
  @Output() message : string;

  constructor() { }

  ngOnInit() {
  }

  @Output() myFunctionOne(){
    this.message = "one";
  }

  @Output() myFunctionTwo(){
    this.message = "two";
  }

  @Output() myFunctionThree(){
    this.message = "three";
  }

  @Output() myFunctionFour(){
    this.message = "four";
  }
}
