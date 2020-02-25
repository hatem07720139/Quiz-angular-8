import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.css']
})
export class FormulairComponent implements OnInit {
  form:FormGroup;
  tableMembre=[];
  connexion:FormGroup;
  userConnected:any;

  constructor(private ServiceService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.connexion = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fName: new FormControl(''),
      sName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmePassword: new FormControl('', [Validators.required]),
      TypeUtulisateur: new FormControl('')
    });
  }
  loggedUser(){
    this.userConnected=this.ServiceService.connexionUser(this.connexion.get('username').value,this.connexion.get('password').value);
    location.href='home.component.html';
  }

  registreMembre(){
    this.ServiceService.registre(this.form.value);
  }

}
