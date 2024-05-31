import Image from "next/image";
import Section from "@/components/section";
import Title from "@/components/title";
import Text from "@/components/text";
// import about1Img from "@/images/beach.webp";
// import about2Img from "@/images/fleet-foxes-2022.webp";
// import about3Img from "@/images/nature.webp";
import about4Img from "@/images/moreapp.png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip";
import Link from "@/components/link";

const About = (): JSX.Element => (
  <Section id="about">
    <Title>About me</Title>
    <hr className="mb-24 mt-2 transition-colors dark:border-zinc-800" />
    <div className="flex flex-col gap-y-24">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={about4Img}
                alt="QA Engineer at MoreApp"
                priority
                className="order-last h-80 w-full rounded-lg object-cover object-center md:order-none"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">QA Engineer at MoreApp</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div>
          <Title as="h3">QA Engineer</Title>
          <Text>
            As a Quality Assurance Engineer at{" "}
            <Link href="https://moreapp.com" color="blue" rel="noopener noreferrer" target="_blank">
              MoreApp
            </Link>
            , I am responsible for the quality of the software and the testing process.
            <br />
            <br />I work closely with developers, UX designers, and the Product Owner to ensure that the software meets
            the requirements and expectations of our users.
            <br />
            <br />
            Examples of tools I use are Jira, Playwright, and Notion.
          </Text>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <Title as="h3">Music</Title>
          <Text>
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis officia
            <br />
            <br />
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officiaDolor sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officia
          </Text>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={about2Img}
                alt="test"
                priority
                className="h-80 w-full rounded-lg object-cover object-center"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">Fleet Foxes concert</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={about3Img}
                alt="Games"
                priority
                className="order-last h-80 w-full rounded-lg object-cover object-center md:order-none"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">Games</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div>
          <Title as="h3">Games</Title>
          <Text>
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis officia
            <br />
            <br />
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officiaDolor sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officia
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <Title as="h3">Films</Title>
          <Text>
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis officia
            <br />
            <br />
            Dolor non sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officiaDolor sit ad quis eiusmod commodo est exercitation commodo sint ad. Exercitation et tempor quis
            officia
          </Text>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Image
                src={about1Img}
                alt="Films"
                priority
                className="h-80 w-full rounded-lg object-cover object-center"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">Films</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div> */}
    </div>
  </Section>
);

export default About;
