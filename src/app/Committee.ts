export interface Committee {
    "SessionKey": string;
    "CommitteeCode": string;
    "CommitteeName": string;
    "HouseOfAction": string;
    "CommitteeType": string;
}

export interface CommitteeInitial {
    "value": [Committee];
}