import { Contact } from "@/models/Contact";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

interface FormProps {
  register: UseFormRegister<Contact>;
  errors: FieldErrors<Contact>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isSubmitted: boolean;
  handleSubmit: UseFormHandleSubmit<Contact, undefined>;
  onSubmit: SubmitHandler<Contact>;
}

const Form = ({
  register,
  errors,
  isSubmitting,
  isSubmitSuccessful,
  isSubmitted,
  handleSubmit,
  onSubmit,
}: FormProps) => {
  return (
    <form
      className="border-2 p-5 rounded-lg border-gray-200"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Full Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Full Name"
        className={`text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] ${
          errors.name === undefined ? "" : "warning"
        }`}
        {...register("name", { required: true })}
      />
      <p>{errors.name && "Your full Name is required"}</p>
      <br />
      <label>Email</label>
      <br />
      <input
        type="email"
        placeholder="Enter your Email"
        className={`text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] ${
          errors.email === undefined ? "" : "warning"
        }`}
        {...register("email", { required: true })}
      />
      <br />
      <p>{errors.email && "Your email address is required"}</p>
      <br />
      <label>
        Organisation <span className="text-xs italic">(Optional)</span>
      </label>
      <br />
      <input
        type="text"
        placeholder="Enter your Organisation"
        className={`text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] ${
          errors.email === undefined ? "" : "warning"
        }`}
        {...register("organisation")}
      />
      <br />
      <br />
      <label>Phone Number</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Phone Number"
        className={`text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] ${
          errors.email === undefined ? "" : "warning"
        }`}
        {...register("phoneNumber", { required: true })}
      />
      <br />
      <p>{errors.phoneNumber && "Your phone number is required"}</p>
      <br />
      <label>Subject</label>
      <br />
      <input
        type="text"
        placeholder={`Enter the message's subject`}
        className={`text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] ${
          errors.subject === undefined ? "" : "warning"
        }`}
        {...register("subject", { required: true })}
      />
      <br />
      <p>{errors.subject && "Subject is required"}</p>
      <br />
      <label>Message</label>
      <br />
      <textarea
        placeholder="Enter your Message...."
        className="text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem] h-[9rem]"
        {...register("message", { required: true })}
      ></textarea>
      <br />
      <p>{errors.message && "Message is required"}</p>
      <br />

      <button
        className="bg-purple w-[9rem] h-[2.5rem] py-1 rounded-md font-bold text-white"
        type="submit"
      > 
        {isSubmitting ? (
          <CircularProgress  color='inherit' size={30}/>
        ) : ('Send Message')

        }
      </button>
    </form>
  );
};

export default Form;
