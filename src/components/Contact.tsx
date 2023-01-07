import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Link } from "./Link";
import { SocialIcons } from "./SocialIcons";
import { Text } from "./Text";
import { Title } from "./Title";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      id="contact"
      className="mx-auto max-w-2xl space-y-8 px-5 pb-20 pt-4 md:px-8"
    >
      <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
        {t("CONTACT")}
      </Title>
      <div className="flex flex-col gap-y-20">
        <div className="flex flex-col items-center justify-evenly sm:flex-row">
          <img
            src="/images/GlennProfile1.webp"
            loading="lazy"
            className="h-60 w-60 rounded-full object-cover shadow-md shadow-current"
            alt="Profile"
          />
          <div className="mt-4 flex flex-col items-center">
            <Title as="h3" size="4xl">
              Glenn Visser
            </Title>
            <Text size="sm" color="medium">
              Software Engineer
            </Text>
            <Link
              size="sm"
              color="gray-blue"
              href="mailto:gvisser.business@gmail.com"
              className="mt-6 flex items-center gap-x-2"
            >
              <Icon name="EnvelopeIcon" className="mt-0.5 h-3.5 w-3.5" />
              gvisser.business@gmail.com
            </Link>
            <SocialIcons className="mt-4" />
          </div>
        </div>
        <Form />
      </div>
    </motion.section>
  );
};

const Form = () => {
  const { t } = useTranslation();

  const inputClasses = classNames(
    "w-full rounded-md border p-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none",
    "focus:ring-1.5 focus:ring-blue-400 focus:border-blue-400",
    "dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400",
    "shadow shadow-slate-300 dark:shadow-slate-900"
  );

  return (
    <form
      action={`https://getform.io/f/${import.meta.env.VITE_GETFORM_ENDPOINT}`}
      method="POST"
      className="flex w-full flex-col gap-y-12"
    >
      <fieldset className="space-y-6">
        <legend className="text-2xl font-semibold text-gray-700 underline decoration-blue-400 underline-offset-4 dark:text-white">
          {t("MESSAGE_ME")}
        </legend>
        <div className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            {t("NAME")}
          </label>
          <input
            id="name"
            required
            type="text"
            name="name"
            placeholder={t("NAME")}
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            name="email"
            placeholder="Email"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">
            {t("MESSAGE")}
          </label>
          <textarea
            id="message"
            required
            name="message"
            placeholder={t("MESSAGE")}
            className={classNames("max-h-[12rem] min-h-[6rem]", inputClasses)}
          />
        </div>
        <Button block type="submit" variant="primary" label={t("SEND")} />
      </fieldset>
    </form>
  );
};
