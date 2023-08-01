export interface Job {
    JobTitle: string,
    openning: string,
    closing: string,
    OrganisationDescribtion: string,
    JobType: string,
    JobDescribtion: string,
    DutiesAndResponsiblities: string[],
    MinimumRequirements: string[],
    ApplyLink: string,
}

export interface CareerType {
    careerId: string,
    careerType: string
}