import Link from "./link";
import Text from "./text";

const Footer = (): JSX.Element => (
  <footer className="z-30 w-full border-t bg-white p-4 transition-colors dark:border-zinc-800 dark:bg-zinc-900 md:px-6 md:py-8">
    <div className="mx-auto flex flex-col items-center justify-between sm:flex-row">
      <Text size="sm" color="medium">{`© ${new Date().getFullYear()} Glenn Visser`}</Text>
      <ul className="my-4 flex items-center justify-center gap-x-4 sm:my-0">
        <li>
          <Link size="sm" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link size="sm" href="/#timeline">
            Timeline
          </Link>
        </li>
        <li>
          <Link size="sm" href="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
