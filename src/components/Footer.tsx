import { Link } from "./Link";
import { Text } from "./Text";

export const Footer = () => (
  <footer className="z-30 w-full border-t bg-white p-4 md:px-6 md:py-8">
    <div className="mx-auto flex flex-col items-center justify-between sm:flex-row">
      <Text size="sm" color="medium">{`© ${new Date().getFullYear()} Glenn Visser`}</Text>
      <ul className="my-4 flex items-center justify-center gap-x-4 sm:my-0">
        <li>
          <Link size="sm" color="gray" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link size="sm" color="gray" href="/#timeline">
            Timeline
          </Link>
        </li>
        <li>
          <Link size="sm" color="gray" href="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);
