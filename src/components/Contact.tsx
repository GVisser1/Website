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
    <section id="contact" className="mx-auto max-w-screen-sm space-y-16 px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold text-gray-700 underline decoration-blue-400 underline-offset-4 dark:text-white"
      >
        {t("CONTACT")}
      </motion.h2>
      <div className="flex flex-col gap-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-evenly sm:flex-row"
        >
          <img
            src="/images/profile-1.webp"
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
        </motion.div>
        <Form />
      </div>
    </section>
  );
};

const Form = () => {
  const { t } = useTranslation();

  const inputClasses = (className?: string) =>
    classNames(
      "w-full rounded-md border p-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none",
      "focus:ring-1.5 focus:ring-blue-400 focus:border-blue-400",
      "dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400",
      "shadow shadow-slate-300 dark:shadow-slate-900",
      className
    );

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      action={`https://getform.io/f/${import.meta.env.VITE_GETFORM_ENDPOINT}`}
      method="POST"
    >
      <fieldset className="space-y-5">
        <legend className="text-3xl font-semibold text-gray-700 dark:text-white">
          {t("MESSAGE_ME")}
        </legend>
        <div>
          <label htmlFor="name" className="sr-only">
            {t("NAME")}
          </label>
          <input
            id="name"
            required
            type="text"
            name="name"
            placeholder={t("NAME")}
            className={inputClasses()}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            name="email"
            placeholder="Email"
            className={inputClasses()}
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            {t("MESSAGE")}
          </label>
          <textarea
            id="message"
            required
            name="message"
            placeholder={t("MESSAGE")}
            className={inputClasses("max-h-[12rem] min-h-[6rem]")}
          />
        </div>
        <Button block type="submit" variant="primary" label={t("SEND")} />
      </fieldset>
    </motion.form>
  );
};
