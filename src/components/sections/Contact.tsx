import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { Section } from "../Section";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact" size="sm" title={{ text: t("MESSAGE_ME") }} altBackground>
      <Form />
    </Section>
  );
};

const Form = () => {
  const { t } = useTranslation();

  const inputClasses = (className?: string) =>
    clsx(
      "transition w-full rounded-md border p-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none",
      "focus:ring-1.5 focus:ring-blue-400 focus:border-blue-400",
      "dark:text-gray-700 dark:bg-gray-100 dark:border-gray-600 dark:focus:border-blue-400",
      "shadow shadow-slate-300 dark:shadow-slate-900",
      className
    );

  return (
    <form action={`https://getform.io/f/${import.meta.env.VITE_GETFORM_ENDPOINT}`} method="POST">
      <fieldset className="space-y-5">
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
    </form>
  );
};
