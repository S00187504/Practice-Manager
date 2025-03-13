"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import MyFormField from "../MyFormField"

export enum FieldType {
  INPUT = 'input',
  
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

//Zod used for validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  
  return (
    <div className="bg-black p-6 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
          <section className="mb-12 space-y-4">
            <h1 className="header">
              Welcome 
            </h1>
            <p className="text-dark-700">Practice Managemant application all in one </p>

          </section>
          <MyFormField
          fieldtype={FieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          //Need to update placeholder photo
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
          />
          <MyFormField
          fieldtype={FieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="KianWaters@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
          />

          <MyFormField
          fieldtype={FieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(094) 123-4567"
          />
          {/* <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Username" 
                    className="text-white bg-gray-800 border-gray-700 placeholder-gray-500" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-gray-400">
                  This is your public display name.
                </FormDescription>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          /> */}
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default PatientForm