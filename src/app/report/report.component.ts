import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';

import { AlienAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienAPIService, EncountersAPIService]
})

export class ReportComponent implements OnInit {

  newEncounter: NewEncounter;
  marsAliens: Alien[];
  reportForm: FormGroup;
  theyClick: true;

  constructor(
    private router: Router,
    private alienAPIService: AlienAPIService,
    private encounterAPIService: EncountersAPIService
  )
  {
      this.reportForm = new FormGroup({
        atype: new FormControl('', [Validators.required]),
        action: new FormControl('', [Validators.required]),
      });

  this.getAliens();

  }

theyClicked(){
  this.theyClick;
}

  ngOnInit() {

  };

  getAliens(){
    this.alienAPIService.getAliens()
                        .subscribe((result) => {
                          this.marsAliens = (result);
                        })
  }

 postNewEncounter(event) {
    event.preventDefault();
    if(this.reportForm.invalid) {

 } else {
const atype = this.reportForm.get('atype').value
const action = this.reportForm.get('action').value
const colonist_id = 4
const date = "2017-12-08"
const newEncounter: NewEncounter = new NewEncounter(date, atype, action, colonist_id);

this.encounterAPIService.saveNewEncounter({ encounter: newEncounter })
                        .subscribe((result) => {
                        this.router.navigate(['encounters']);
                        })
};
}};
