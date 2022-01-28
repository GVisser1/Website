interface ProjectContent {
  id: string;
  description?: string;
  src?: string;
}

interface ProjectOption {
  id: string;
  logo?: string;
  title?: string;
  content: ProjectContent[];
  href?: string;
}

const useProjectData = (projectType: string) => {
  switch (projectType) {
    case "SCHOOL": {
      return schoolProjects;
    }
    case "PERSONAL": {
      return personalProjects;
    }
  }
};

const schoolProjects: ProjectOption[] = [
  {
    id: "Bitfilm",
    logo: "assets/projects/Bitfilm.png",
    title: "Bitfilm",
    content: [
      {
        id: "Menu",
        description:
          "During the second half of my first year of study, I made a ticket reservation system with my project group and was part of Project B. The system is built with the GUI WinForms and is programmed in C#. With Bitfilm it is possible to order tickets for a movie.",
        src: "assets/projects/Bitfilm_Menu.png",
      },
      {
        id: "Movie1",
        description:
          "A ticket can be ordered by selecting seats and entering some personal data. Admins of the system can also add and remove movies. Every movie has its own page, with a description, trailer and more. All the data is stored in a local database using SQLite.",
        src: "assets/projects/Bitfilm_Movie.png",
      },
      {
        id: "Movie2",
        src: "assets/projects/Bitfilm_Movie2.png",
      },
    ],
    href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
  },
  {
    id: "Bitmail",
    logo: "assets/projects/Bitmail.png",
    title: "Bitmail",
    content: [
      {
        id: "Organisation",
        description:
          "During the first half of my second year of study, I made a mail system with my project group. This was part of Project C and was commissioned by Ranshuijsen B.V. The system is built with the Blazor web framework and is programmed in C#, HTML and CSS.",
        src: "assets/projects/Bitmail_Organisation.png",
      },
      {
        id: "Email",
        description:
          "With Bitmail it is possible to send emails to a group of people based on labels. Mailing is done using Mailchimp.",
        src: "assets/projects/Bitmail_Email.png",
      },
      {
        id: "Statistics",
        src: "assets/projects/Bitmail_Statistics.png",
        description:
          "In Bitmail it is possible to create contacts. A contact has an email address and can be linked with an organisation. In order to send an email, a label must have contacts. A label can be created and with that contacts can be added to it. All the data is stored in a server based database using MySQL.",
      },
    ],
  },
  {
    id: "Bitfit",
    logo: "assets/projects/Bitfit.png",
    title: "Bitfit",
    content: [
      {
        id: "Menu",
        description:
          "During the second half of my second year of study, I made an application which helps a user with checking their endurance and creating training schedules. This was part of Project D and was commissioned by BLIS Digital. The application is built with the Blazor web framework and is programmed in C#, HTML and CSS.",
        src: "assets/projects/Bitfit_Menu.png",
      },
      {
        id: "Schedule",
        description:
          "With Bitfit it is possible to check the status of your endurance. The state of a user’s endurance level is calculated using the resting heart rate and their VO₂max. The resting heart rate can be retrieved from a Fitbit account In Bitfit, the user can a training schedule. This schedule consists of three types of exercises: HIIT (High-Intensity Interval Training), Endurance and a Strength training. The difficulty is based on the user’s endurance.",
        src: "assets/projects/Bitfit_Schedule.png",
      },
      {
        id: "Challenge",
        description:
          "A user can also take part in a challenge, for example a marathon. All the data is stored in a local database using SQLite.",
        src: "assets/projects/Bitfit_Challenge.png",
      },
    ],
    href: "https://github.com/GVisser1/Project-D-Groep5",
  },
];

const personalProjects: ProjectOption[] = [
  {
    id: "Glennvisser.com",
    logo: "assets/projects/Website_Logo.png",
    title: "Glennvisser.com",
    content: [
      {
        id: "Home",
        description:
          "This website was made with React, TypeScript, TailwindCSS and more! This website was made with React, TypeScript, TailwindCSS and more! This website was made with React, TypeScript, TailwindCSS and more! This website was made with React, TypeScript, TailwindCSS and more!",
        src: "assets/projects/Website_Home.png",
      },
    ],
  },
  {
    id: "Clicker Game",
    logo: "assets/projects/ClickGame.png",
    title: "Clicker Game",
    content: [
      {
        id: "Startup",
        description:
          "This clicker game is a side project of mine. In June 2020 I started experimenting with Unity and this game is what came out of it. The app is far from finished. I plan to return to this project in the near future.",
        src: "assets/projects/ClickGame_Startup.png",
      },
      {
        id: "Playing",
        description:
          "The game is made using Unity and is programmed in C#. The point of the game is to click the wheat icon so you can harvest it.",
        src: "assets/projects/ClickGame_Playing.png",
      },
      {
        id: "Upgrades",
        description:
          "Harvested wheat can be sold, which yields the player money. With money, players can buy upgrades.",
        src: "assets/projects/ClickGame_Upgrades.png",
      },
    ],
  },
];

export default useProjectData;
