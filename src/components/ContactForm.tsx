import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Formik } from "formik";
import Input from "./Input";
import { Button } from "./Button";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../constants";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = () =>
    yup.object({
      from_name: yup.string().required(),
      from_email: yup.string().required(),
      message: yup.string().required(),
    });

  const initialValues = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const sendEmail = async () => {
    if (!form.current) {
      return;
    }
    await emailjs
      .sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        form.current,
        EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert(result.text);
          setIsLoading(false);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const classes = classNames("w-full", className);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        // setIsLoading(true); // TODO: Add spinner to button when form is submitted
        sendEmail();
        actions.resetForm();
      }}
    >
      {(formik) => (
        <form className={classes} ref={form}>
          <Input
            className="py-2"
            name="from_name"
            value={formik.values?.from_name}
            label={t("NAME")}
            errorMessage={
              formik.touched.from_name && formik.errors.from_name
                ? t("REQUIRED_MESSAGE")
                : ""
            }
            disabled={isLoading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <Input
            className="py-2"
            name="from_email"
            value={formik.values?.from_email}
            label={t("EMAIL")}
            disabled={isLoading}
            errorMessage={
              formik.touched.from_email && formik.errors.from_email
                ? t("REQUIRED_MESSAGE")
                : ""
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <Input
            className="pt-2 pb-4"
            type="textarea"
            name="message"
            value={formik.values?.message}
            label={t("MESSAGE")}
            disabled={isLoading}
            errorMessage={
              formik.touched.message && formik.errors.message
                ? t("REQUIRED_MESSAGE")
                : ""
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <Button
            className="pt-6"
            block
            label={t("SEND")}
            disabled={isLoading}
            onClick={formik.submitForm}
          />
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
