export interface MeasureInitial {
    value: [Measure];
}

export interface Measure {
    SessionKey: string;
    MeasurePrefix: string;
    MeasureNumber: number;
    CatchLine: string;
    MeasureSummary: string;
    CurrentVersion?: string;
    RelatingTo: string;
    CurrentLocation: string;
    CurrentCommitteeCode?: string;
    FiscalImpact?: string;
    RevenueImpact?: string;
    FiscalAnalyst?: string;
    RevenueEconomist?: string;
    CreatedDate: string;
    ModifiedDate: string;
    PrefixMeaning: string;
}

export interface DocumentInitial {
    value: [DocumentData]
}

export interface DocumentData {
    SessionKey: string
    MeasureNumber: Number
    DocumentUrl: string
}