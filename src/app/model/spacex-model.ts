export class SpacexModel {
    flightNumber: number;
    missionName: string;
    launchLanding: boolean;
    launchYear: string;
    launchSuccess: boolean;
    landSuccess: boolean;
    missionId: Array<string>;
    links: LinkClassification;
    rocket: FirstStage;
    constructor() {
        this.landSuccess = false;
        this.flightNumber = null;
        this.missionName = '';
        this.launchLanding = false;
        this.launchYear = null;
        this.launchSuccess = false;
        this.missionId = [];
        this.links = { mission_patch: '', missionPatchSmall: '' };
    }
}
export interface LinkClassification {
    mission_patch: string;
    missionPatchSmall: string;
}
export interface FirstStage {
    first_stage: Cores;
}
export interface Cores {
    cores: Array<CoresData>;
}

export interface CoresData {
    land_success: boolean;
}

