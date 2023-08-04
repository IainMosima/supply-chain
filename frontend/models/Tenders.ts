export interface Tender{
    tenderId: string,
    countryName: string,
    tenderTitle: string,
    TenderDescription: string,
    organization: string,
    location: string,
    howToSubmit: string,
    applyLink: string,
    openingDate: string,
    closingDate: string,

}

export interface TenderResult {
    totalItems: number,
    tenders: Tender[],
    totalPages: number,
    currentPage: number
}