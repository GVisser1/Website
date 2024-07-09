import { Divider } from "./divider";

type HeaderProps = { title: string; description: string };
const Header = ({ title, description }: HeaderProps): JSX.Element => (
  <header>
    <h1 className="mb-1 text-xl font-semibold text-zinc-700 dark:text-white">{title}</h1>
    <p className="text-zinc-500 dark:text-zinc-400">{description}</p>

    <Divider className="mb-10 mt-6" />
  </header>
);

export default Header;