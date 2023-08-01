import { JobsHubPagination, UnderConstruction } from "@/components";
import JobsHub from "@/components/JobsHub/JobsHub";
import JobsHubSelector from "@/components/JobsHub/JobsHubSelector";
import { CareerType } from "@/models/Jobs";
import { getCareerTypes } from "@/network/Jobs";
import { type } from "os";

const exampleJobs = [
  {
    JobTitle: "Human Resource Officer at Zizi(On-site)",
    openning: "03 November 2023",
    closing: "03 December 2023",
    OrganisationDescribtion:
      "Zizi Afrique Foundation is hiring an experienced HR Officer (HRO) based in Nairobi. We're an organization focused on driving impact in Kenya's education sector through research, advocacy, and innovation. As a mid-sized organization with 30 staff members, we offer a friendly environment centered around Ubuntu, Respect, and Curiosity.",
    JobType: "Full Time",
    JobDescribtion:
      "Reporting to the Director of Operations, the HRO will support HR processes and organizational development. The ideal candidates for this position should have 8-10 years of HR experience and thrive in a fast-paced environment, and where the staff are closely-knit in human contact.",
    DutiesAndResponsiblities: [
      "Keeps apace with developments in the regulatory environment and advice the Executive Director on necessary policy reviews",
      "Leads occasional review of the HR policies and procedures",
      "Is a custodian of the Organization HR Policies and procedures, including enforcement of the staff code of conduct and the diversity, equity and inclusion policies",
      "Oversees, trains, and supports the management team in applying the HR policies, including disciplinary procedures",
      "Drafts board papers regarding HR aspects",
      "Support in personnel planning and budgeting",
    ],
    MinimumRequirements: [
      "Bachelor’s degree in human resource management or equivalent",
      "8-10 years’ experience in a similar HR role",
      "Registered (and up to date) member of the Institute of HR",
    ],
    ApplyLink: "https://www.google.com/",
  },
  {
    JobTitle: "Human Resource Officer at Zizi(On-site)",
    openning: "03 November 2023",
    closing: "03 December 2023",
    OrganisationDescribtion:
      "Zizi Afrique Foundation is hiring an experienced HR Officer (HRO) based in Nairobi. We're an organization focused on driving impact in Kenya's education sector through research, advocacy, and innovation. As a mid-sized organization with 30 staff members, we offer a friendly environment centered around Ubuntu, Respect, and Curiosity.",
    JobType: "Full Time",
    JobDescribtion:
      "Reporting to the Director of Operations, the HRO will support HR processes and organizational development. The ideal candidates for this position should have 8-10 years of HR experience and thrive in a fast-paced environment, and where the staff are closely-knit in human contact.",
    DutiesAndResponsiblities: [
      "Keeps apace with developments in the regulatory environment and advice the Executive Director on necessary policy reviews",
      "Leads occasional review of the HR policies and procedures",
      "Is a custodian of the Organization HR Policies and procedures, including enforcement of the staff code of conduct and the diversity, equity and inclusion policies",
      "Oversees, trains, and supports the management team in applying the HR policies, including disciplinary procedures",
      "Drafts board papers regarding HR aspects",
      "Support in personnel planning and budgeting",
    ],
    MinimumRequirements: [
      "Bachelor’s degree in human resource management or equivalent",
      "8-10 years’ experience in a similar HR role",
      "Registered (and up to date) member of the Institute of HR",
    ],
    ApplyLink: "https://www.google.com/",
  },
];

const fetchJobs = async (): Promise<string[]> => {
  const carreerTypes = await getCareerTypes();
  return ['All',...carreerTypes.map(type => type.careerType)];
}

const page = async ({ params }: { params: string[] }) => {
  const careerTypes = await fetchJobs();
  return (
    <div className="w-full p-1">
      <JobsHubSelector selectedCareerType={"All"} careerTypes={careerTypes} />
      <JobsHub jobs={exampleJobs} />
      {/* <UnderConstruction /> */}
      <JobsHubPagination />
    </div>
  );
};

export default page;
