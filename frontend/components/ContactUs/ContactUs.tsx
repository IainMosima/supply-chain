"use client";
import Image from "next/image";
import { Images } from "../../constants";
import "./ContactUs.scss";
import Form from "./form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Contact } from "@/models/Contact";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { sendMessage } from "@/network/Contact";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ContactUs = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    handleSubmit,
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = async (data: Contact) => {
    try {
      await sendMessage(data);
      window.scrollTo(0, 0);
    } catch (error) {
      alert('Message did not send please try again');
    }
  };
  return (
    <div>
      {isSubmitSuccessful ? (
        <div className="w-full h-5/6 flex justify-center place-items-center flex-col gap-1 mt-1 mb-[6rem]">
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            <Image src={Images.sentIcon} alt="sent" height={400} />
          </motion.div>
          <p className="text-center text-md italic font-semibold text-purple">
            Message sent Successfully.
          </p>
          <button
            onClick={() => router.push("/")}
            className="rounded-md w-[20rem] ease-in-out duration-150 hover:bg-white hover:text-purple border-2 border-purple text-white font-bold px-4 py-3"
          >
            Go To HomePage
          </button>

          <button
            onClick={() => location.reload()}
            className="rounded-md w-[20rem] ease-in-out duration-150 sm:hover:bg-white sm:hover:text-purple border-2 border-purple bg-purple text-white font-bold px-4 py-3"
          >
            Send New Message
          </button>
        </div>
      ) : (
        <div className="mt-1 mb-[2rem] flex flex-col">
          <h2 className="font-semibold text-xl text-center text-purple">
            Contact Us
          </h2>
          <div className="w-[1.1rem] h-[.2rem] bg-purple mx-auto" />

          <div className="flex lg:gap-1 justify-center place-items-center lg:flex-row md:flex-col flex-col mt-5">
            <div className="flex flex-col lg:gap-[2rem] gap-2 mb-2">
              <div className="lg:w-[20rem] md:w-[30rem]">
                <h3 className="font-extrabold text-center sm:text-left sm:text-4xl text-xl">
                  {`We'd`} like to hear{" "}
                  <span className="text-purple">from you</span>
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex place-items-center gap-1">
                  <Image src={Images.mail} height={30} alt="mailbox" />
                  <p>supplychainsolutionshub@gmail.com</p>
                </div>

                <div className="flex place-items-center gap-1">
                  <Image src={Images.phone2} height={30} alt="mailbox" />
                  <p>(+254)716 137 693</p>
                </div>
              </div>
            </div>

            <div>
              <Form
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
                isSubmitSuccessful={isSubmitSuccessful}
                isSubmitted={isSubmitted}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
