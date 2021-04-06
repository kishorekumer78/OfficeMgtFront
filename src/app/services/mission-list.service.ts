import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Mission } from '../models/mission.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionListService {

  readonly baseUrl: string = "https://localhost:44343/api/Mission";

  constructor(private http: HttpClient) { }

  postNewMission(msn: Mission) {
    //Sending post request to API
    return this.http.post<Mission>(this.baseUrl, msn);
  }
}
