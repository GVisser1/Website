interface ListOption {
  src?: string;
  title?: string;
  subTitle?: string;
  href?: string;
}

const useListData = (listType: string) => {
  switch (listType) {
    case "MUSIC": {
      return musicList;
    }
    case "GAMES": {
      return gameList;
    }
    case "MOVIES": {
      return movieList;
    }
    case "LANGUAGES": {
      return languageList;
    }
    case "MISC": {
      return miscList;
    }
  }
};

const musicList: ListOption[] = [
  {
    src: "https://i.scdn.co/image/ab67616d00001e02045fc920ecf4f8094888ec26",
    title: "Illmatic",
    subTitle: "Nas",
    href: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1?si=-QgWeQbkSx2CLbchSGkqWg",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02d7f5afe93dd997671be4fa25",
    title: "22, A Million",
    subTitle: "Bon Iver",
    href: "https://open.spotify.com/album/4bJCKmpKgti10f3ltz6LLl?si=LcXnnBXkTbClUI5-Six8BQ",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02b298538481c52f7e217ed000",
    title: "Trilogy",
    subTitle: "The Weeknd",
    href: "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U?si=zWFCXCdDSjWFneFOEhHKyQ",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
    title: "To Pimp A Butterfly",
    subTitle: "Kendrick Lamar",
    href: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=EneO7rSASpCPBUfgTEXUAA",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
    title: "Norman Fucking Rockwell!",
    subTitle: "Lana Del Rey",
    href: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A?si=Da65EbUwTJm_zPX6AuQUrQ",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02ca8e1c365f8afe5e5499d795",
    title: "Pure Comedy",
    subTitle: "Father John Misty",
    href: "https://open.spotify.com/album/2d0FNHQ1fBVU3Tc2usRshF?si=T-jyAzW-RzGlOTWGd3MoIw",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02e08b1250db5f75643f1508c9",
    title: "The Miseducation of Lauryn Hill",
    subTitle: "Ms. Lauryn Hill",
    href: "https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD?si=9jh2dFh2QF6WpTlrfoRx4w",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02a91e8d79776c6f83fa22ce72",
    title: "Trouble Will Find Me",
    subTitle: "The National",
    href: "https://open.spotify.com/album/4OI9hKTm1QMRQunqHCfSSL?si=Z67hzgN1SZSVwNKumAcR1g",
  },
];

const gameList: ListOption[] = [
  {
    src: "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png?w=230",
    title: "God Of War",
    subTitle: "Sony Interactive Entertainment",
    href: "https://store.playstation.com/en-us/product/UP9000-CUSA07408_00-00000000GODOFWAR",
  },
  {
    src: "https://image.api.playstation.com/vulcan/img/cfn/113073qYZHyiDU5-4vu9krqfIPdGCvcGob0VpazrmfyUEbn4qZ64XBJfRKHvwa_tStB4nMD3UDv4Cb9V3iTH6cJymhQ1sJiU.png?w=440",
    title: "Persona 5 Royal",
    subTitle: "SEGA of America, Inc.",
    href: "https://store.playstation.com/en-us/product/UP0177-CUSA17416_00-PERSONA5R0000000",
    //
  },
  {
    src: "https://image.api.playstation.com/cdn/EP0082/CUSA04480_00/P4ZghxHW2EEiwxim3ZZIG28aJB8LgebN.png?w=230",
    title: "NieR: Automata",
    subTitle: "SQUARE ENIX CO. LTD.",
    href: "https://store.playstation.com/en-us/product/UP0082-CUSA04551_00-GOTYORHADIGITAL0",
  },
  {
    src: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0714/VBANminggz6xesnf7PokdsT4.png?w=230",
    title: "Overwatch",
    subTitle: "Blizzard Entertainment, Inc.Blizzard Entertainment, Inc.",
    href: "https://store.playstation.com/en-us/product/UP0002-CUSA01842_00-OWLEGENDARY00000",
  },
  {
    src: "https://image.api.playstation.com/vulcan/img/rnd/202011/0713/WSZqsrnejjt85wYmUqeBQvMQ.png?w=230",
    title: "Bloodborne",
    subTitle: "Sony Interactive Entertainment",
    href: "https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000",
  },
  {
    src: "https://image.api.playstation.com/vulcan/ap/rnd/202102/1214/gcMVHVG82HnDo0A6WHl6WR6H.png?w=440",
    title: "Discp Elysium",
    subTitle: "ZA/UM",
    href: "https://store.playstation.com/en-us/product/UP6758-PPSA03268_00-6401393671841114",
  },
  {
    src: "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png?w=230",
    title: "Hades",
    subTitle: "Supergiant Games, LLC",
    href: "https://store.playstation.com/en-us/product/UP2125-PPSA03355_00-3466019145463410",
  },
];

const movieList: ListOption[] = [
  {
    src: "https://a.ltrbxd.com/resized/sm/upload/ay/bp/kl/1y/uBfQ7IGpi0jXSP3GPCzp9Pzm10v-0-150-0-225-crop.jpg?k=c2dc68bd44",
    title: "Eternal Sunshine Of The Spotless Mind",
    subTitle: "Michel Gondry",
    href: "https://letterboxd.com/film/eternal-sunshine-of-the-spotless-mind/",
  },
  {
    src: "https://a.ltrbxd.com/resized/sm/upload/f3/ub/fq/f5/gGBu0hKw9BGddG8RkRAMX7B6NDB-0-150-0-225-crop.jpg?k=3ce456bf03",
    title: "Logan",
    subTitle: "James Mangold",
    href: "https://letterboxd.com/film/logan-2017/",
  },
  {
    src: "https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-300-0-450-crop.jpg?k=cb998b7a78 2x",
    title: "Blade Runner 2049",
    subTitle: "Denis Villeneuve",
    href: "https://letterboxd.com/film/blade-runner-2049/",
  },
  {
    src: "https://a.ltrbxd.com/resized/sm/upload/ij/ub/so/m3/zuXMvSQq9F7H29qzuUm0qyUqw6m-0-150-0-225-crop.jpg?k=87b1437f8b",
    title: "Paddington 2",
    subTitle: "Paul King",
    href: "https://letterboxd.com/film/paddington-2/",
  },
  {
    src: "https://a.ltrbxd.com/resized/sm/upload/7s/m2/bw/d0/caoYMcjUamGoBVy65i1AHJBvdzw-0-230-0-345-crop.jpg?k=2c7fe69d7f",
    title: "The Shining",
    subTitle: "Stanley Kubrick",
    href: "https://letterboxd.com/film/the-shining/",
  },
  {
    src: "https://a.ltrbxd.com/resized/film-poster/4/3/3/8/6/3/433863-the-lighthouse-0-230-0-345-crop.jpg?k=c87f4236bb",
    title: "The Lighthouse",
    subTitle: "Robert Eggers",
    href: "https://letterboxd.com/film/the-lighthouse-2019/",
  },
  {
    src: "https://a.ltrbxd.com/resized/sm/upload/7l/hn/46/uz/zGINvGjdlO6TJRu9wESQvWlOKVT-0-230-0-345-crop.jpg?k=ec92903bcc",
    title: "The Shawshank Redemption",
    subTitle: "Frank Darabont",
    href: "https://letterboxd.com/film/the-shawshank-redemption/",
  },
  {
    src: "https://a.ltrbxd.com/resized/film-poster/4/6/8/0/6/46806-the-incredibles-0-230-0-345-crop.jpg?k=a33437f6ef",
    title: "The Incredibles",
    subTitle: "Brad Bird",
    href: "https://letterboxd.com/film/the-incredibles/",
  },
  {
    src: "https://a.ltrbxd.com/resized/film-poster/3/4/8/9/1/4/348914-the-batman-0-230-0-345-crop.jpg?k=22653f43d9",
    title: "The Batman",
    subTitle: "Matt Reeves",
    href: "https://letterboxd.com/film/the-batman/",
  },
];

const languageList: ListOption[] = [
  {
    src: "/images/skills/HTML.svg",
    subTitle: "HTML",
  },
  {
    src: "/images/skills/CSharp.svg",
    subTitle: "C#",
  },
  {
    src: "/images/skills/Typescript.svg",
    subTitle: "TypeScript",
  },
  {
    src: "/images/skills/CSS.svg",
    subTitle: "CSS",
  },
  {
    src: "/images/skills/Python.svg",
    subTitle: "Python",
  },
  {
    src: "/images/skills/Javascript.svg",
    subTitle: "JavaScript",
  },
  {
    src: "/images/skills/SQL.svg",
    subTitle: "SQL",
  },
];

const miscList: ListOption[] = [
  {
    src: "/images/skills/Git.svg",
    subTitle: "Git",
  },
  {
    src: "/images/skills/React.svg",
    subTitle: "React",
  },
  {
    src: "/images/skills/Unity.svg",
    subTitle: "Unity",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
    subTitle: "Microsoft 365",
  },
  {
    src: "/images/skills/TailwindCSS.svg",
    subTitle: "TailwindCSS",
  },
  {
    src: "/images/skills/Cypress.svg",
    subTitle: "Cypress",
  },
  {
    src: "/images/skills/MongoDB.svg",
    subTitle: "MongoDB",
  },
  {
    src: "/images/skills/CapacitorJS.svg",
    subTitle: "Capacitor",
  },
];

export default useListData;
