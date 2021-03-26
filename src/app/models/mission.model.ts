import { Duration } from "./duration.model";

export class Mission {
    missionId: number = 0;
    missionName: string = "";
    missionDuration: Duration = new Duration();
    missionAircraft: string = "";
    syllabus: string = "";
}
