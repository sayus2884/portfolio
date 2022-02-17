const works = [
  {
    title: "The Bug Tracker",
    imageUrl: "/images/bug_tracker.png",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    description: [
      "Currently undergoing research and wireframing, the bug tracker is for reporting and managing bugs, features, and tasks which help manage a project's life cycle from beginning to end. The project is open-source, so feel free to use it for your own use.",
    ],
    problems: ["First time using Typescript.", "Cookie size is too small."],
    solutions: [],
    github: "https://github.com/sayus2884/bug-tracker",
    link: "https://bug-tracker-delta.vercel.app/",
    ytVideoId: "XgNH-x7xsO8",
  },
  {
    title: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    description: [
      "My online portfolio to showcase what I can do and what I have made. The design is inspired by the business card layout in a single page application setting to allow for interesting interactivity. The web app is built with NextJS, TailwindCSS, and Swipe; and is prototyped using Framer. The code is available on github for viewing.",
    ],
    problems: [
      "Presenting information in a way that is pleasing and easy for viewers to digest.",
      "Not mobile friendly.",
    ],
    solutions: [],
    github: "https://github.com/sayus2884/portfolio",
    link: null,
    ytVideoId: "DvjbBWGC4c0",
  },
  {
    title: "MyOshis.ch",
    imageUrl: "/images/myoshis.png",
    technologies: ["NextJs", "TailwindCSS", "Express", "Youtube Data API"],
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A very convenient way to watch multiple point-of-views when Vtubers do collaboration streams. Currently, the list of Vtubers consist of members from Hololive but in the future will be updated with Nijisanji members and other independent Vtubers.",

      "The frontend is created using NextJs and TailwindCSS; accompanied by other third party libraries such as axios, react-query, and swiper among others, to speed up the development process. The web app is deployed and managed in the Vercel cloud.",

      "The backend is made using Express where its primary function is to fetch and cache the relevant data from the Youtube Data API for the frontend to use. With the Youtube Data API having a cap of 10,000 quotas, the cache functionality greatly reduced the number of times the app has to call the Youtube Data API which enables thousands of users to use the web app without having to worry about data not being transmitted due to the quota reaching its cap. The backend is deployed and managed in Heroku. It faces a cold start when not used after 30 minutes but once fired up, the app will run smoothly.",
    ],
    problems: [
      "Displaying multiple videos in different layouts.",
      "Exceeding Youtube Data API's 10,000 quotas too fast.",
    ],
    solutions: [],
    github: null,
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
];

export default works;
