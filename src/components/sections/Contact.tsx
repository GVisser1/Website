import clsx from "clsx";
import { Button } from "../Button";
import { Section } from "../Section";

export const Contact = () => {
  const inputClasses = (className?: string) =>
    clsx(
      "w-full rounded-md border p-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400",
      "focus:border-blue-400 focus:ring-1.5 focus:ring-blue-400",
      "shadow shadow-slate-300",
      className,
    );

  return (
    <Section id="contact" title={{ text: "Send me a message" }} size="sm">
      <form action={`https://getform.io/f/${process.env.NEXT_GETFORM_ENDPOINT}`} method="POST">
        <fieldset className="space-y-5">
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
          <Button block type="submit" variant="primary" label="Send" />
        </fieldset>
      </form>
    </Section>
  );
};
