import { Formik } from "formik";
import { useRef } from "react";
import { Button } from "./Button";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import classNames from "classnames";
interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { t } = useTranslation();

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

  const sendEmail = () => {
    // TODO:
    alert("succes");
  };

  const classes = classNames("w-full", className);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        sendEmail();
        actions.resetForm();
      }}
    >
      {(formik) => (
        <form name="contact" method="post" className={classes}>
          <input type="hidden" name="form-name" value="contact" />
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
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            required
          />
          <Input
            className="py-2"
            name="from_email"
            value={formik.values?.from_email}
            label={t("EMAIL")}
            errorMessage={
              formik.touched.from_email && formik.errors.from_email
                ? t("REQUIRED_MESSAGE")
                : ""
            }
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            required
          />
          <Input
            className="pt-2 pb-4"
            type="textarea"
            name="message"
            value={formik.values?.message}
            label={t("MESSAGE")}
            errorMessage={
              formik.touched.message && formik.errors.message
                ? t("REQUIRED_MESSAGE")
                : ""
            }
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            required
          />
          <Button
            className="pt-6"
            block
            submit
            label={t("SEND")}
            onClick={formik.submitForm}
          />
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
