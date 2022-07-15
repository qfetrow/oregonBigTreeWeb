export interface MeetingInitial {
    value: [Meeting]
}

export interface CommitteeAgendaItemInitial {
    value: [CommitteeAgendaItem]
}

export interface Meeting {
    SessionKey: string
    CommitteeCode: string
    MeetingDate: string
    MeetingStatusCode: string
    Location: string
    AgendaUrl?: string

}

export interface CommitteeAgendaItem {
    SessionKey: string
    CommitteeCode?: string
    MeasurePrefix?: string
    MeasureNumber?: number
    MeetingDate: string
    MeetingType?: string
    Action?: string
    Comments?: string

}

