'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '../ui/calendar';
export default function CreateCVForm() {
  const form = useForm();
  const [date, setDate] = useState<Date>();
  return (
    <Form {...form}>
      <form className="flex flex-col gap-2 px-4 py-2 lg:gap-4 lg:px-6 lg:py-4">
        <div className="grid grid-cols-2 gap-2 lg:gap-4">
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Personal Information:</h3>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl {...field}>
                  <Input placeholder="First Name" />
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
                <FormControl {...field}>
                  <Input placeholder="Last Name" />
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
                  <Input placeholder="Phone Number" type="number" />
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
                <FormControl {...field}>
                  <Input placeholder="Email Address" type="email" />
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
                <FormControl {...field}>
                  <Input placeholder="Address" />
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
                <FormControl {...field}>
                  <Input placeholder="City" />
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
                <FormControl {...field}>
                  <Input placeholder="Postal Code" type="number" />
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
                <FormControl {...field}>
                  <Textarea placeholder="Brief summary of career goals or objectives" />
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
                <FormControl {...field}>
                  <Input placeholder="Degree" />
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
                <FormControl {...field}>
                  <Input placeholder="Graduation Date" />
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
                <FormControl {...field}>
                  <Input placeholder="Institution Name" />
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
                <FormControl {...field}>
                  <Input placeholder="Major Field Of Study" />
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
                <FormControl {...field}>
                  <Input placeholder="Job Title" />
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
                <FormControl {...field}>
                  <Input placeholder="Company Name" />
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
                <FormControl {...field}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="responsibilitiesAndAcheivements"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl {...field}>
                  <Textarea placeholder="Responsibilities & Achievements" />
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
                <FormControl {...field}>
                  <Input placeholder="Company Location" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="col-span-2 text-base font-bold lg:text-lg">Skills::</h3>
          {/* TODO: Replace both of them later so, on enter pushes th value in an array */}
          <FormField
            control={form.control}
            name="technicalSkills"
            render={({ field }) => (
              <FormItem>
                <FormControl {...field}>
                  <Input placeholder="Technical Skills" />
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
                <FormControl {...field}>
                  <Input placeholder="Technical Skills" />
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
