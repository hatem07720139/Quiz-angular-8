import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  tableTest=[]
  userConnected:any
  constructor() { }
  registre(form) {
    let tableMembre = JSON.parse(localStorage.getItem('listMembre'));
    if (tableMembre === null) {
      tableMembre = []
    };
    tableMembre.push(form);
    localStorage.setItem("listMembre", JSON.stringify(tableMembre));
  }
  connexionUser(connectUser, connectpass) {
    let tableMembre = JSON.parse(localStorage.getItem('listMembre'));
    let username = connectUser;
    let password = connectpass;
    for (let i = 0; i < tableMembre.length; i++) {
      if (username === tableMembre[i].username && password === tableMembre[i].password) {
        localStorage.setItem("connectedUser", JSON.stringify(tableMembre[i]));
        break;
      }
    }
    this.userConnected=JSON.parse(localStorage.getItem('connectedUser'));
    return this.userConnected;
  }
  Add(form,fonction) {
    const quizz = form.get('quiz') as FormArray;
    quizz.push(fonction);
  }
  delet(form,i) {
    const quizz = form.get('quiz') as FormArray;
    quizz.removeAt(i);
  }
  addTest(tab){
return this.tableTest.push(tab)
  }
}
