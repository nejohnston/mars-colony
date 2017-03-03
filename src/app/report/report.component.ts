import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';
import { AlienAPIService } from '../apiService/aliens';
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
  providers: [AlienAPIService]
})

export class ReportComponent implements OnInit {

  newEncounter: NewEncounter;
  marsAliens: Alien[];
  reportForm: FormGroup;
  constructor(
    private alienAPIService: AlienAPIService
  )
  {

      this.reportForm = new FormGroup({
        date: new FormControl('', [Validators.required]),
        atype: new FormControl('', [Validators.required]),
        action: new FormControl('', [Validators.required]),
        colonist_id: new FormControl('', [Validators.required]),
      });

  this.getAliens();

  }

  getAliens(){
    this.alienAPIService.getAliens()
                        .subscribe((result) => {
                          this.marsAliens = (result);
                        })
  }

  ngOnInit() {

  }

}
