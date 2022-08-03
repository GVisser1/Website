export interface ListOption {
  src?: string;
  title: string;
  description?: string;
  href?: string;
  labels?: string[];
}

const useData = () => {
  const getMusic: ListOption[] = [
    {
      src: "https://i.scdn.co/image/ab67616d00001e02045fc920ecf4f8094888ec26",
      title: "Illmatic",
      description: "Nas",
      href: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1?si=-QgWeQbkSx2CLbchSGkqWg",
      labels: ["Hardcore Hip Hop", "Jazz Rap", "Boom Bap"],
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02d7f5afe93dd997671be4fa25",
      title: "22, A Million",
      description: "Bon Iver",
      href: "https://open.spotify.com/album/4bJCKmpKgti10f3ltz6LLl?si=LcXnnBXkTbClUI5-Six8BQ",
      labels: ["Indie", "Folktronica", "Art Pop", "Glitch Pop"],
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02b298538481c52f7e217ed000",
      title: "Trilogy",
      description: "The Weeknd",
      href: "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U?si=zWFCXCdDSjWFneFOEhHKyQ",
      labels: ["Alternative R&B", "Trip Hop"],
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
      title: "To Pimp A Butterfly",
      description: "Kendrick Lamar",
      href: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=EneO7rSASpCPBUfgTEXUAA",
      labels: ["Conscious Hip Hop", "Jazz Rap"],
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
      title: "Norman Fucking Rockwell!",
      description: "Lana Del Rey",
      href: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A?si=Da65EbUwTJm_zPX6AuQUrQ",
      labels: ["Indie", "Art Pop", "Soft Rock", "Singer-Songwriter"],
    },
    {
      src: "https://i.scdn.co/image/ab67616d00001e02ca8e1c365f8afe5e5499d795",
      title: "Pure Comedy",
      description: "Father John Misty",
      href: "https://open.spotify.com/album/2d0FNHQ1fBVU3Tc2usRshF?si=T-jyAzW-RzGlOTWGd3MoIw",
      labels: ["Indie", "Piano Rock", "Singer-Songwriter", "Chamber Folk"],
    },
  ];

  const getGames: ListOption[] = [
    {
      src: "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png?w=230",
      title: "God Of War",
      description: "Sony Interactive Entertainment",
      href: "https://store.playstation.com/en-us/product/UP9000-CUSA07408_00-00000000GODOFWAR",
    },
    {
      src: "https://image.api.playstation.com/vulcan/img/cfn/113073qYZHyiDU5-4vu9krqfIPdGCvcGob0VpazrmfyUEbn4qZ64XBJfRKHvwa_tStB4nMD3UDv4Cb9V3iTH6cJymhQ1sJiU.png?w=440",
      title: "Persona 5 Royal",
      description: "SEGA of America, Inc.",
      href: "https://store.playstation.com/en-us/product/UP0177-CUSA17416_00-PERSONA5R0000000",
      //
    },
    {
      src: "https://image.api.playstation.com/cdn/EP0082/CUSA04480_00/P4ZghxHW2EEiwxim3ZZIG28aJB8LgebN.png?w=230",
      title: "NieR: Automata",
      description: "SQUARE ENIX CO. LTD.",
      href: "https://store.playstation.com/en-us/product/UP0082-CUSA04551_00-GOTYORHADIGITAL0",
    },
    {
      src: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0714/VBANminggz6xesnf7PokdsT4.png?w=230",
      title: "Overwatch",
      description: "Blizzard Entertainment, Inc.Blizzard Entertainment, Inc.",
      href: "https://store.playstation.com/en-us/product/UP0002-CUSA01842_00-OWLEGENDARY00000",
    },
    {
      src: "https://image.api.playstation.com/vulcan/img/rnd/202011/0713/WSZqsrnejjt85wYmUqeBQvMQ.png?w=230",
      title: "Bloodborne",
      description: "Sony Interactive Entertainment",
      href: "https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000",
    },
    {
      src: "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png?w=230",
      title: "Hades",
      description: "Supergiant Games, LLC",
      href: "https://store.playstation.com/en-us/product/UP2125-PPSA03355_00-3466019145463410",
    },
  ];

  const getMovies: ListOption[] = [
    {
      src: "https://a.ltrbxd.com/resized/sm/upload/ay/bp/kl/1y/uBfQ7IGpi0jXSP3GPCzp9Pzm10v-0-150-0-225-crop.jpg?k=c2dc68bd44",
      title: "Eternal Sunshine Of The Spotless Mind",
      description: "Michel Gondry",
      href: "https://letterboxd.com/film/eternal-sunshine-of-the-spotless-mind/",
    },
    {
      src: "https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-300-0-450-crop.jpg?k=cb998b7a78 2x",
      title: "Blade Runner 2049",
      description: "Denis Villeneuve",
      href: "https://letterboxd.com/film/blade-runner-2049/",
    },
    {
      src: "https://a.ltrbxd.com/resized/sm/upload/ij/ub/so/m3/zuXMvSQq9F7H29qzuUm0qyUqw6m-0-150-0-225-crop.jpg?k=87b1437f8b",
      title: "Paddington 2",
      description: "Paul King",
      href: "https://letterboxd.com/film/paddington-2/",
    },
    {
      src: "https://a.ltrbxd.com/resized/sm/upload/7s/m2/bw/d0/caoYMcjUamGoBVy65i1AHJBvdzw-0-230-0-345-crop.jpg?k=2c7fe69d7f",
      title: "The Shining",
      description: "Stanley Kubrick",
      href: "https://letterboxd.com/film/the-shining/",
    },
    {
      src: "https://a.ltrbxd.com/resized/film-poster/4/3/3/8/6/3/433863-the-lighthouse-0-230-0-345-crop.jpg?k=c87f4236bb",
      title: "The Lighthouse",
      description: "Robert Eggers",
      href: "https://letterboxd.com/film/the-lighthouse-2019/",
    },
    {
      src: "https://a.ltrbxd.com/resized/film-poster/4/6/8/0/6/46806-the-incredibles-0-230-0-345-crop.jpg?k=a33437f6ef",
      title: "The Incredibles",
      description: "Brad Bird",
      href: "https://letterboxd.com/film/the-incredibles/",
    },
  ];

  const getLanguages: ListOption[] = [
    {
      src: "/images/skills/HTML.svg",
      title: "HTML",
    },
    {
      src: "/images/skills/CSharp.svg",
      title: "C#",
    },
    {
      src: "/images/skills/Typescript.svg",
      title: "TypeScript",
    },
    {
      src: "/images/skills/CSS.svg",
      title: "CSS",
    },
    {
      src: "/images/skills/Python.svg",
      title: "Python",
    },
    {
      src: "/images/skills/Javascript.svg",
      title: "JavaScript",
    },
  ];

  const getTools: ListOption[] = [
    {
      src: "/images/skills/Git.svg",
      title: "Git",
    },
    {
      src: "/images/skills/React.svg",
      title: "React",
    },
    {
      src: "/images/skills/Unity.svg",
      title: "Unity",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
      title: "Microsoft 365",
    },
    {
      src: "/images/skills/TailwindCSS.svg",
      title: "TailwindCSS",
    },
    {
      src: "/images/skills/MongoDB.svg",
      title: "MongoDB",
    },
  ];

  return {
    getMusic,
    getGames,
    getMovies,
    getLanguages,
    getTools,
  };
};

export default useData;
