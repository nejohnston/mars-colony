import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models'
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  title: string;
  registerForm: FormGroup;
  constructor() {
    //TODO: Call API, get jobs
      this.marsJobs = [
      {name: 'EMPEROR OF MARS',
      id: '8',
      description: 'I am all powerful, I am empire.',
      },
      {name: 'Lowly serf',
      id: '1',
      description: 'No responsibilities, no power.',
      },
      {name: 'Town Drunk',
      id: '420',
      description: 'Here we go liquor.',
      },
      {name: 'const Dracula',
      id: '81008',
      description: 'In exchange for our safety, we let him hunt vars and lets.'
      }
      ]
      this.newColonist = new NewColonist ('', '', '',);
      this.registerForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
        job_id: new FormControl('', [Validators.required]),
      });
  }

  acceptAge(min: number, max: number) {
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < min || control.value > max) {
        return { 'Sorry good luck!': { age: control.value }};
      }
    }
  }

  logColonist(){
    console.log(this.registerForm);
  }

  ngOnInit() {

  }

}
