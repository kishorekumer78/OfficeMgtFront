import { Component, OnInit } from '@angular/core';
import { MissionListService } from 'src/app/services/mission-list.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  constructor(public service: MissionListService) { }

  ngOnInit(): void {
  }

}
