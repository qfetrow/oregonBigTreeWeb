
export interface MeasureActionInitial {
    'value': [MeasureAction]
}

export interface MeasureAction {
    SessionKey: String
    MeasureNumber: Number
    Chamber: String
    ActionDate: String
    ActionText: String
    VoteText?: String
}