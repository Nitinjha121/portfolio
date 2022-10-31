import { PageProps } from "gatsby";
import React from "react";

//components
import Layout from "src/components/layout";

//types
import { IAllSanityProjects, IContactForm } from "src/types";

//react hook form
import { useForm } from "react-hook-form";

//yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//react toastify
import { toast } from "react-toastify";

const portalID = process.env.GATSBY_HUBSPOT_PORTAL_ID;
const formID = process.env.GATSBY_HUBSPOT_FORM_ID;
const url =
  "https://api.hsforms.com/submissions/v3/integration/submit/" +
  portalID +
  "/" +
  formID;

function ContactMe() {
  const [buttonLoader, setButtonLoader] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IContactForm>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: IContactForm) => {
    setButtonLoader(true);
    const fields = [
      {
        name: "name",
        value: data.name,
      },
      {
        name: "email",
        value: data.email,
      },
      {
        name: "subjects",
        value: data.subject,
      },
      {
        name: "message",
        value: data.message,
      },
    ];

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ fields }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      toast("Message Sent Successfully.", { type: "success" });
    } catch (err) {
      toast("Something went wrong.", { type: "error" });
    }

    setButtonLoader(false);
  };

  return (
    <Layout title="Contact Me">
      <h1 className="text-center text-3xl font-bold text-primary-color">
        Contact Me
      </h1>

      <form
        className="grid gap-6 sm:justify-center py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {contactFormOptions.map((option, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <label className=" font-semibold">{option.label}</label>
            <input
              {...register(option.name)}
              className="px-4 py-2 rounded border border-gray-400 w-full sm:w-96 outline-none"
              placeholder={option.label}
            />
            {errors[option.name]?.message && (
              <span className="text-red-500">
                {errors[option.name]?.message}
              </span>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-1">
          <label className=" font-semibold">Message</label>
          <textarea
            {...register("message")}
            className="px-4 py-2 rounded border border-gray-400 h-24 outline-none"
            placeholder="Message"
          />

          {errors.message?.message && (
            <span className="text-red-500">{errors.message?.message}</span>
          )}
        </div>

        <button
          className="rounded-lg block ml-auto overflow-hidden relative border border-primary-color [&:hover>:last-child]:-translate-y-full [&:hover>:first-child]:text-black"
          disabled={buttonLoader}
        >
          <span className="px-10 py-2 block z-30 relative font-semibold text-white transition-all duration-300">
            {buttonLoader ? "Sending..." : "Send"}
          </span>
          <span className="z-10 -translate-y-full block text-primary-color px-4 py-2 bg-white absolute"></span>
          <span className="block transition-all duration-300 pb-1 bg-primary-color text-white z-10 inset-0 absolute"></span>
        </button>
      </form>
    </Layout>
  );
}

export default ContactMe;

const contactFormSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name cannot be empty!")
    .max(100, "Name cannot be more than 100 characters!"),
  email: yup
    .string()
    .email("Enter a valid Email")
    .trim()
    .required("Email cannot be empty!")
    .max(150, "Email cannot be more than 150 characters!"),
  subject: yup
    .string()
    .trim()
    .required("Subject cannot be empty!")
    .max(150, "Subject cannot be more than 150 characters!"),
  message: yup
    .string()
    .trim()
    .max(1000, "Message cannot be more than 1000 characters!"),
});

const contactFormOptions: { name: keyof IContactForm; label: string }[] = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email" },
  { name: "subject", label: "Subject" },
  // { name: "message", label: "Message" },
];
