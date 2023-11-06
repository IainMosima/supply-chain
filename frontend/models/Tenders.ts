export interface Tender{
    tenderId: string,
    countryName: string,
    tenderTitle: string,
    tenderDescription: string,
    organization: string,
    location: string,
    howToSubmit: string,
    applyLink: string,
    openingDate: number,
    closingDate: number,

}

export interface TenderResult {
    totalItems: number,
    tenders: Tender[],
    totalPages: number,
    currentPage: number
}