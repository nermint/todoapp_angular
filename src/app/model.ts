
export class Model{
    user;
    items;

    constructor (){
        this.user='Nermin',
        this.items=[
           new toDoItem('Sport',true),
           new toDoItem('Shopping',true),
           new toDoItem('Film',false),
           new toDoItem('Coding',false),
          ];
    }
    
}

export class toDoItem{
    description;
    action;

    constructor (description, action){
        this.description=description;
        this.action=action;
    }
}