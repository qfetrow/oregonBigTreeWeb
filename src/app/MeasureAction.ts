
export interface MeasureActionInitial {
    'value': [MeasureAction]
}

export interface MeasureAction {
    SessionKey: string
    MeasureNumber: Number
    Chamber: string
    ActionDate: string
    ActionText: string
    VoteText?: string
}