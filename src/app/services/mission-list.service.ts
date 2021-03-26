import { Injectable } from '@angular/core';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionListService {

  constructor() { }

  formData: Mission = new Mission();
}
