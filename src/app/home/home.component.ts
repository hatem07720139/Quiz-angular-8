import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userConnected:any;
  connexion:FormGroup;
  constructor(private ServiceService: ServiceService, private router: Router) { }
  get role(){
   return this.userConnected.get("TypeUtulisateur").value
  }

  ngOnInit() {
    this.userConnected=JSON.parse(localStorage.getItem('connectedUser'));
    this.connexion = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  loggedUser(){
    this.userConnected=this.ServiceService.connexionUser(this.connexion.get('username').value,this.connexion.get('password').value);
  }
  deconnexionUser(){
    localStorage.removeItem('connectedUser');
    location.href='home.component.html'
  }

}
