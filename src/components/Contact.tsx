import classNames from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getAge } from "../utils/numberUtil";
import { Button } from "./Button";
import SocialIcons from "./SocialIcons";
import Text from "./Text";
import { Title } from "./Title";

export const Contact: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-y-20">
      <div className="flex flex-col items-center justify-evenly sm:flex-row">
        <img
          src="/images/GlennProfile1.webp"
          loading="lazy"
          className="h-60 w-60 rounded-full object-cover shadow-md shadow-current saturate-150 md:h-72 md:w-72"
          alt="Profile picture"
        />
        <div className="flex flex-col items-center">
          <Text size="xs" color="medium">
            {getAge(new Date(2000, 3, 21))} - {t("Netherlands")} - {t("PRONOUNS")}
          </Text>
          <Title as="h3" size="4xl">
            Glenn Visser
          </Title>
          <Text className="" color="medium">
            Software Engineer
          </Text>
          <Text
            className="mt-6"
            icon="EnvelopeIcon"
            iconType="solid"
            color="dark"
            iconPosition="left"
            href="mailto:gvisser.business@gmail.com"
          >
            {"gvisser.business@gmail.com"}
          </Text>
          <SocialIcons className="mt-6" />
        </div>
      </div>
      <Form />
    </div>
  );
};

const Form: FC = () => {
  const { t } = useTranslation();

  const inputClasses = classNames(
    "w-full rounded-md border p-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none",
    "focus:ring-1.5 focus:ring-blue-500 focus:border-blue-500",
    "dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500"
  );

  return (
    <form
      action={`https://getform.io/f/${import.meta.env.VITE_GETFORM_ENDPOINT}`}
      method="POST"
      className="flex w-full flex-col gap-y-12"
    >
      <fieldset className="space-y-6">
        <legend className="text-2xl font-semibold text-gray-700 underline underline-offset-4 dark:text-white">
          Contact Me!
        </legend>
        <div className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input id="name" type="text" name="name" placeholder="Name" className={inputClasses} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className={classNames("max-h-[12rem] min-h-[6rem]", inputClasses)}
          />
        </div>
        <Button block type="submit" label={t("SEND")} />
      </fieldset>
    </form>
  );
};
