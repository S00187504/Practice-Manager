"use client"

import React from 'react'
import { E164Number } from 'libphonenumber-js';
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
import { Control, Field } from 'react-hook-form'
import { FieldType } from './forms/PatientForm'
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface CustomProps{
  control: Control<any>,
  fieldtype: FieldType,
  name: string,
  label?: string,
  placeholder?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?: boolean,
  dateFormat?: string,
  showTimeSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: any) => React.ReactNode,

}

const FieldRenderer  = ({field, props} : {field: any; props: CustomProps}) => {
  const {fieldtype, iconAlt, iconSrc, placeholder } = props;

  switch (props.fieldtype) {
    case FieldType.INPUT:
      
      return(
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          
          {props.iconSrc && (
           <Image
           src={props.iconSrc}
           height={24}
           width={24}
           alt={props.iconAlt || "icon"}
           className="ml-2"
         />
          )}
          <FormControl>
            <Input
            placeholder= {placeholder}
            {...field}
            className='shad-input border-0'
            />
          </FormControl>
        </div>
        
      )

      case FieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              defaultCountry="IE"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="input-phone"
            />
          </FormControl>
        );
  
    default:
      break;
  }

}
const MyFormField = (props : CustomProps) => {
  const {control, fieldtype, name, label} = props;
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className='flex-1'>
        {fieldtype !== FieldType.CHECKBOX && label && (
          <FormLabel>{label}</FormLabel>
        )}

        <FieldRenderer field={field} props={props}/>
        <FormMessage className='shad-error'/>


      </FormItem>

    )}
  />
  )
}

export default MyFormField