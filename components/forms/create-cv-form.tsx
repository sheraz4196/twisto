'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import useCVFormStore from '@/stores/cv-form-data-store';
export default function CreateCVForm() {
  const form = useForm();
  const { cvFormData, setCvFormData } = useCVFormStore();
  function handleChange(e) {
    const { name, value } = e.target;
    setCvFormData({ ...cvFormData, [name]: value });
  }
  return (
    <Form {...form}>
      <form className="flex flex-col gap-2 border-r bg-gray-50 p-2 md:p-4 lg:gap-4 lg:p-6">
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
      </form>
    </Form>
  );
}
