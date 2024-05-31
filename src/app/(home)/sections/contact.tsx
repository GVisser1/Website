import Button from "@/components/button";
import Section from "@/components/section";
import Title from "@/components/title";
import Input from "@/components/input";

const Contact = (): JSX.Element => (
  <Section id="contact" size="sm">
    <form action={`https://getform.io/f/${process.env.NEXT_GETFORM_ENDPOINT}`} method="POST">
      <fieldset className="space-y-5">
        <legend>
          <Title as="h2">Contact Me!</Title>
        </legend>
        <Input id="name" label="Name" required type="text" name="name" placeholder="Name" />
        <Input id="email" label="Email" required type="email" name="email" placeholder="Email" />
        <Input id="message" label="Message" required type="textarea" name="message" placeholder="Message" />
        <Button block type="submit" label="Send" />
      </fieldset>
    </form>
  </Section>
);

export default Contact;
