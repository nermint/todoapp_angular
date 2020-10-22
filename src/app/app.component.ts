import { Component } from '@angular/core';
import { Model, toDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   model=new Model();
   // for all display items
   isDisplay=false;

   getName (){
     return this.model.user;
   }

   getItems(){
    if(this.isDisplay)
      return this.model.items;
    else{
     // filterleyerek action u false olanlari return edirik
     return this.model.items.filter(item => !item.action);
    }
    
   }

   addItem(value){

      if(value !=""){
        this.model.items.push(new toDoItem(value,false));
      }
   }
  
}
