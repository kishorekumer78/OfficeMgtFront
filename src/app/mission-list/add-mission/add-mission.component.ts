import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Mission } from 'src/app/models/mission.model';
import { MissionListService } from 'src/app/services/mission-list.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  constructor(private service: MissionListService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  //*create forms with form builder
  missionForm = this.fb.group({
    missionId: 0,
    missionName: ['', [Validators.required]],
    missionAircraft: ['PT-6'], //TODO have to change the value
    missionDuration: [''],
    syllabus: ['Basic Conversion'] //TODO have to change the value
  });
  onFormSubmit(missionForm: FormGroup) {

    let msn: Mission = missionForm.value;


    console.log(msn);
    this.service.postNewMission(msn).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });


  }


}
