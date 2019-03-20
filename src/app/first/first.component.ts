import { Component } from '@angular/core';

@Component({
  selector: 'first',
  template: '<div>asd</div>'
})
export class FirstComponent {
  title = 'my-apasdaasdasdsdp';
  constructor(){
    console.log('asdasdasd');
    this.test();
    this.test1();
    this.test23();
  }
  test(){
      
  }
  test1 (){

  }
  test23(){
 console.log('test');
  }
  
}
