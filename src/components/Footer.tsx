import Text from "./Text";

const Footer: React.FC = () => {
  return (
    <footer className="z-30 w-full border-t border-gray-200 bg-white p-4 transition duration-300 dark:border-gray-700 dark:bg-gray-900 md:px-6 md:py-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between md:flex-row">
        <Text color="medium">{`© ${new Date().getFullYear()} Glenn Visser. All Rights Reserved.`}</Text>
        <ul className="my-4 flex items-center justify-center sm:my-0">
          <li>
            <Text color="medium" href="/projects" className="mr-4 md:mr-6 ">
              Projects
            </Text>
          </li>
          <li>
            <Text color="medium" href="/contact">
              Contact
            </Text>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
