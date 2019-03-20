import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'second',
  template: '<div>asd</div>'
})
export class SecondComponent {
  title = 'my-app';
  constructor(){
    console.log('asdsasdddfsdssasdasddfsdasdasdfdfsdfsdasd');
    this.test();
  }
  test(){
      this.test2();
  }
  test2(){
      
  }
}
