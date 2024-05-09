'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useReactToPrint } from 'react-to-print';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/textarea';
import useCVFormStore from '@/stores/cv/cv-form-data-store';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { z } from 'zod';
import { useRef } from 'react';
import ClassicOne from '../cv-designes/classic-one';
const formDataSchema = z.object({
  firstName: z.string().min(2, { message: 'First Name Must be at least two characters long' }),
  lastName: z.string().min(2, { message: 'Last Name Must be at least two characters long' }),
  bio: z.string({ message: 'Please Enter a valid bio' }),
  phoneNumber: z.number().min(6, { message: 'Please Enter a valid Phone Number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  city: z.string({ message: 'Enter a City Name Please!' }),
  postalCode: z.number().min(7, { message: 'Please Enter Valid postal code' }),
  goals: z.string().min(19, { message: 'This field should at least 10 characters long.' }),
  degree: z.string().min(4, { message: 'Please Enter a valid degree name' }),
  graduationDate: z.string().min(11, { message: 'Please write date like, 04 May,2024' }),
  institutionName: z.string().min(4, { message: 'Enter a valid institute name' }),
  jobTitle: z.string().min(4, { message: 'Please Enter a valid job title.' }),
  companyName: z.string().min(4, { message: 'Please enter a valid company name' }),
  yearOfEmployment: z.number().min(4).max(4, { message: 'Please Enter a valid year' }),
  yearOfResign: z.number().min(4).max(4, { message: 'Please Enter a valid year' }),
  responsibilitiesAndAchievements: z
    .string()
    .min(10, { message: 'This field must at least 10 characters long' }),
  companyLocation: z.string().min(2, { message: 'Please enter a valid location' }),
  technicalSkills: z.string(),
  softSkills: z.string(),
  certification: z.string(),
  issuingOrganization: z.string(),
  certificationEarnedDate: z.string().min(11, { message: 'Please write date like, 04 May,2024' }),
  languages: z.string(),
  proficiencyLevel: z.string(),
  hobbies: z.string(),
});
export default function CreateCVForm() {
  const classicOneRef = useRef<HTMLDivElement>(null);
  let Html2Pdf: any;
  if (typeof window !== 'undefined') {
    Html2Pdf = require('js-html2pdf');
  }
  const form = useForm();
  const { cvFormData, setCvFormData } = useCVFormStore();
  function handleChange(e) {
    const { name, value } = e.target;
    setCvFormData({ ...cvFormData, [name]: value });
  }
  const handlePrint = useReactToPrint({
    onPrintError: (error) => console.log(error),
    content: () => classicOneRef.current,
    removeAfterPrint: true,
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const html = document.getElementById('classic-one');
        if (html) {
          html.style.fontFamily = 'Arial, sans-serif';
          html.style.margin = '0px !important';
          html.style.width = '100%';
          html.style.height = '100%';
          const textElements = html.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');
          textElements.forEach((element) => {
            (element as HTMLElement).style.fontWeight = 'normal';
            (element as HTMLElement).style.fontStyle = 'normal';
          });
        }
        const exporter = new Html2Pdf(html, {
          filename: `New CV`,
          image: { type: 'jpeg', quality: 0.1 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', compression: true },
        });
        await exporter.getPdf(true);
      }
    },
  });
  function onSubmit() {
    console.log(classicOneRef.current);
    handlePrint();
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2 border-r bg-gray-50 p-2 md:p-4 lg:gap-4 lg:p-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="hidden">
          <ClassicOne ref={classicOneRef} />
        </div>
        <div className="grid grid-cols-2 gap-2 lg:gap-4">
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Personal Information:</h3>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    name="firstName"
                    placeholder="First Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    name="bio"
                    placeholder="Bio, Software Engineer E.t.c"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input {...field} name="address" onChange={handleChange} placeholder="Address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="City" name="city" onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    name="postalCode"
                    placeholder="Postal Code"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">
            Professional Summary / Objectives:
          </h3>
          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Textarea
                    {...field}
                    onChange={handleChange}
                    name="goals"
                    placeholder="Brief summary of career goals or objectives"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Education:</h3>
          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} onChange={handleChange} name="degree" placeholder="Degree" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="graduationDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Graduation Date"
                    name="graduationDate"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="institutionName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Institution Name"
                    name="institutionName"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="majorFieldOfStudy"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Major Field Of Study"
                    name="majorFieldOfStudy"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Work Experiences:</h3>
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Job Title"
                    name="jobTitle"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Company Name"
                    name="companyName"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearOfEmployment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Employment Year"
                    name="yearOfEmployment"
                    type="number"
                    min={4}
                    max={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearOfResign"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Job Ended(Year)"
                    name="yearOfResign"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="responsibilitiesAndAchievements"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Textarea
                    {...field}
                    onChange={handleChange}
                    name="responsibilitiesAndAchievements"
                    placeholder="Responsibilities & Achievements"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyLocation"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Company Location"
                    name="companyLocation"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Skills::</h3>
          {/* TODO: Replace both of them later so, on enter pushes the value in an array */}
          <FormField
            control={form.control}
            name="technicalSkills"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Technical Skills"
                    name="technicalSkills"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="softSkills"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="softSkills"
                    onChange={handleChange}
                    placeholder="Soft Skills"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Certifications & Licenses:</h3>
          <FormField
            control={form.control}
            name="certification"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="certification"
                    onChange={handleChange}
                    placeholder="Certifications or Licenses"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issuingOrganization"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleChange}
                    placeholder="Issuing Organization"
                    name="issuingOrganization"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certificationEarnedDate"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input
                    {...field}
                    name="certificationEarnedDate"
                    onChange={handleChange}
                    placeholder="Date Earned"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Languages:</h3>
          <FormField
            control={form.control}
            name="languages"
            render={({ field }) => (
              <FormItem className="col-span-2 lg:col-span-1">
                <FormControl>
                  <Input
                    {...field}
                    name="languages"
                    onChange={handleChange}
                    placeholder="Languages"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proficiencyLevel"
            render={({ field }) => (
              <FormItem className="col-span-2 lg:col-span-1">
                {/* TODO: Add a radio group here instead */}
                <FormControl>
                  <Input
                    {...field}
                    name="proficiencyLevel"
                    onChange={handleChange}
                    placeholder="Proficiency Level"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Additional Information:</h3>
          <FormField
            control={form.control}
            name="hobbies"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Textarea
                    {...field}
                    name="hobbies"
                    onChange={handleChange}
                    placeholder="Interests / Hobbies"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="flex items-center gap-4" type="submit">
          <span>Download</span>
          <Download size={16} />
        </Button>
      </form>
    </Form>
  );
}
