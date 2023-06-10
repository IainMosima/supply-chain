"use client";
import { Contact } from "@/models/Contact";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    handleSubmit,
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = (data) => {

  }
  return (
    <form className="border-2 p-5 rounded-lg border-gray-200" onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Full Name"
        className="text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]"
        {...register('name', { required: true})}
      />
      <p>{errors.name && 'Your full Name is required'}</p>
      <br />
      <label>Email</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]"
        {...register('email', { required: true})}
      />
      <br/>
      <p>{errors.email && 'Your full Name is required'}</p>
      <br />
      <label>
        Organisation <span className="text-xs italic">(Optional)</span>
      </label>
      <br />
      <input
        type="text"
        placeholder="Enter your Organisation"
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]"
        {...register('organisation', { required: true})}
      />
      <br />
      <br />
      <label>Phone Number</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Phone Number"
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]"
        {...register('phoneNumber', { required: true})}
      />
      <br />
      <p>{errors.phoneNumber && 'Your phone number is required'}</p>
      <br/>
      <label>Subject</label>
      <br />
      <input
        type="text"
        placeholder={`Enter the message's subject`}
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]"
        {...register('subject', { required: true})}
      />
      <br/>
      <p>{errors.subject && 'Your full Name is required'}</p>
      <br />
      <label>Message</label>
      <br />
      <textarea
        placeholder="Enter your Message...."
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] h-[9rem]"
        {...register('message', { required: true})}
      ></textarea>
      <br/>
      <p>{errors.message && 'Your full Name is required'}</p>
      <br />

      <button className="bg-purple w-[9rem] h-[2.5rem] rounded-md font-bold text-white">
        Send Message
      </button>
    </form>
  );
};

export default Form;
