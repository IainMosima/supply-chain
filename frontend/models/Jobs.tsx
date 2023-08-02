export interface Job {
    jobId: string,
    countryName: string,
    jobTitle: string,
    jobType: string,
    jobDescription: string,
    careerType: string,
    location: string,
    organizationDescription: string,
    applyLink: string,
    openingDate: string,
    closingDate: string,
    dutiesAndResponsibilities: string[],
    minimumRequirements: string[]
}

export interface JobResult {
    totalItems: number,
    jobs: Job[],
    totalPages: number,
    currentPage: number
}

export interface CareerType {
    careerId: string,
    careerType: string
}