const works = [
  {
    title: "The Bug Tracker",
    imageUrl: "/images/bug_tracker.png",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    description: [
      "The bug tracker is a task management and bug tracking web app. Featuring a kanban-based style of project management, it increases productivity by letting the team work on assigned, small, and digestable tasks to avoid work overlaps.",
    ],
    problems: ["First time using Typescript.", "Cookie size is too small."],
    solutions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    github: "https://github.com/sayus2884/bug-tracker",
    link: "https://bug-tracker-delta.vercel.app/",
    ytVideoId: "XgNH-x7xsO8",
  },
  {
    title: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    description: [
      "My online portfolio which showcase the projects I made. The design is inspired by the business card layout in a single page application setting to allow for interesting interactivity. The web app is built with NextJS, TailwindCSS, and Swiper; and is prototyped using Framer. The code is available on github for viewing.",
    ],
    problems: ["The context was not easily understood.", "Not mobile friendly."],
    solutions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    github: "https://github.com/sayus2884/portfolio",
    link: null,
    ytVideoId: "DvjbBWGC4c0",
  },
  {
    title: "MyOshis.ch",
    imageUrl: "/images/myoshis.png",
    technologies: ["NextJs", "TailwindCSS", "Express", "Youtube Data API"],
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A convenient way to watch multiple point-of-views when Vtubers do collaboration streams.",
    ],
    problems: [
      "Displaying multiple videos in different layouts.",
      "Exceeding Youtube Data API's quotas in after 10,000 requests.",
      "Code maintanance has become unmanageable.",
    ],
    solutions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "The backend is made using Express where its primary function is to fetch and cache the relevant data from the Youtube Data API for the frontend to use. With the Youtube Data API having a cap of 10,000 quotas, the cache functionality greatly reduced the number of times the app has to call the Youtube Data API which enables thousands of users to use the web app without having to worry about data not being transmitted due to the quota reaching its cap. The backend is deployed and managed in Heroku. It faces a cold start when not used after 30 minutes but once fired up, the app will run smoothly.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    github: null,
    link: "https://myoshis.ch",
    ytVideoId: "UGEsZHTuJsE",
  },
];

export default works;
