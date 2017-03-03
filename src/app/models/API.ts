import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Job, Colonist, NewColonist } from '../models';

export const ALIENS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
export const COLONISTS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
export const ENCOUNTERS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
export const JOBS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';


