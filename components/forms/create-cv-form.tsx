'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
export default function CreateCVForm() {
  const form = useForm();
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
                  <Input {...field} placeholder="First Name" />
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
                  <Input {...field} placeholder="Last Name" />
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
                <FormControl {...field}>
                  <Input {...field} placeholder="Phone Number" type="number" />
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
                  <Input {...field} placeholder="Email Address" type="email" />
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
                  <Input {...field} placeholder="Address" />
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
                  <Input placeholder="City" {...field} />
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
                  <Input {...field} placeholder="Postal Code" type="number" />
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
                  <Textarea {...field} placeholder="Brief summary of career goals or objectives" />
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
                  <Input {...field} placeholder="Degree" />
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
                  <Input {...field} placeholder="Graduation Date" />
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
                  <Input {...field} placeholder="Institution Name" />
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
                  <Input {...field} placeholder="Major Field Of Study" />
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
                  <Input {...field} placeholder="Job Title" />
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
                  <Input {...field} placeholder="Company Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfEmployment"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input {...field} placeholder="Employment Date" />
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
                  <Textarea {...field} placeholder="Responsibilities & Achievements" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input {...field} placeholder="Company Location" />
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
                  <Input {...field} placeholder="Technical Skills" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="technicalSkills"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Technical Skills" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Certifications & Licenses:</h3>
          <FormField
            control={form.control}
            name="Certification"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Certifications or Licenses" />
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
                  <Input {...field} placeholder="Issuing Organization" />
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
                  <Input {...field} placeholder="Date Earned" />
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
                  <Input {...field} placeholder="Languages" />
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
                <FormControl>
                  <Input {...field} placeholder="Proficiency Level" />
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
                  <Textarea {...field} placeholder="Interests / Hobbies" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hobbies"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Textarea {...field} placeholder="Interests / Hobbies" />
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
