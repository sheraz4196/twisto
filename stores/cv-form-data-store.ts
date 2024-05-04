import { CVFormData } from '@/types/types';
import { create } from 'zustand';

const useCVFormStore = create<{
  cvFormData: CVFormData;
  setCvFormData: (data: CVFormData) => void;
}>((set) => ({
  cvFormData: {
    firstName: '',
    lastName: '',
    bio: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    goals: '',
    degree: '',
    graduationDate: '',
    institutionName: '',
    majorFieldOfStudy: '',
    jobTitle: '',
    companyName: '',
    yearOfEmployment: '',
    yearOfResign: '',
    responsibilitiesAndAchievements: '',
    companyLocation: '',
    technicalSkills: '',
    softSkills: '',
    certification: '',
    issuingOrganization: '',
    certificationEarnedDate: '',
    languages: '',
    proficiencyLevel: '',
    hobbies: '',
  },
  setCvFormData: (data) => set({ cvFormData: data }),
}));

export default useCVFormStore;
