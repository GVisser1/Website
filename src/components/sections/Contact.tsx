import clsx from "clsx";
import { Button } from "../Button";
import Section from "../Section";
import Title from "../Title";

export const Contact = (): JSX.Element => {
  const inputClasses = (className?: string): string =>
    clsx(
      "w-full rounded-md border p-3.5 text-sm text-gray-700 shadow shadow-slate-300 placeholder:text-gray-400 focus-visible:outline",
      className,
    );

  return (
    <Section id="contact" size="sm">
      <form action={`https://getform.io/f/${process.env.NEXT_GETFORM_ENDPOINT}`} method="POST">
        <fieldset className="space-y-5">
          <legend>
            <Title as="h2">Contact Me!</Title>
          </legend>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input id="name" required type="text" name="name" placeholder="Name" className={inputClasses()} />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input id="email" required type="email" name="email" placeholder="Email" className={inputClasses()} />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              placeholder="Message"
              className={inputClasses("max-h-[12rem] min-h-[6rem]")}
            />
          </div>
          <Button block type="submit" label="Send" />
        </fieldset>
      </form>
    </Section>
  );
};
