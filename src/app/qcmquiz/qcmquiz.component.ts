import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-qcmquiz',
  templateUrl: './qcmquiz.component.html',
  styleUrls: ['./qcmquiz.component.css']
})
export class QcmquizComponent implements OnInit {
  form:FormGroup;
  userConnected:any;

  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {
    this.userConnected=JSON.parse(localStorage.getItem('connectedUser'));
    this.form = new FormGroup({
      quiz: new FormArray([this.addQuestion()])
    });
  }
  addQuestion(): FormGroup {
    return new FormGroup({
      ask: new FormControl(""),
      rep1: new FormControl(""),
      rep2: new FormControl(""),
      rep3: new FormControl(""),
      rep4: new FormControl(""),
      bonneRep: new FormControl("")
    })
  }
  addAsk(){
    this.ServiceService.Add(this.form,this.addQuestion());
  }
  removeAsk(i){
    this.ServiceService.delet(this.form,i);
  }
  addtest(){
    this.ServiceService.addTest(this.form.get('quiz').value);
  }
  
}
