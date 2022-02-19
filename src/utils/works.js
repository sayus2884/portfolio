const works = [
  {
    title: "The Bug Tracker",
    imageUrl: "/images/bug_tracker.png",
    demoVideo: "",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    role: "Research, prototyping, programming",
    description: [
      "The bug tracker is a task management and bug tracking web application. Featuring a kanban-based style of project management, it increases productivity by letting individuals work on small, and digestable tasks, avoiding burn outs from working on bigger, breakable tasks.",
    ],
    challenge:
      "Managing work flow that prevent burn outs resulting in unfinished works and projects.",
    process: [
      "Before starting to code, researching other products in the market that deals with project management was necessary to find out the basic characteristics of what the app would need and look like. I decided to use Github's issue tracker and Trello's board system to base the app on as they were intuitive to use.",

      "The board feature helps to facilitate for a kanban-based project management style, an effective system for managing tasks and clear indicator for the development progress. While, the issue tracker would help in clarifying certain tasks and serve as a type of documentation during development.",

      "It was then decided that the app itself would be used in managing the tasks as it is being developed. So, a basic minimum viable product (MVP) was created based on a mockup created.",
    ],
    problems: ["The project itself is large.", "Javascript is unmaintanable in the long run."],
    solutions: [
      "Since the project is rather large, it needs to be broken down into more manageable chunks. That is why it will be divided into three development phases: kanban board development, storage management, and issue tracking development.",
      "The first phase will be focused on developing the task management board which will then be used to manage tasks for the remaining phases",
      "The second phase will be focusing more on solving the storage issue. Cookies and local storage is good for prototyping but not practical for a full blown app due to  the lack of storage capacity. This phase will also finalize the data structure so it won't be a hassle on the third phase.",
      "The third phase will be focusing on developing the issue tracker and improving the application's overall UI and UX.",
      "Visual Studio Code and Typescript are used to better maintain the code as they are well-equiped in minimizing cluttered, unreadable code with a low learning curve to use.",
    ],
    takeAways: [],
    github: "https://github.com/sayus2884/bug-tracker",
    link: "https://bug-tracker-delta.vercel.app/",
  },
  {
    title: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    demoVideo: "",
    technologies: ["Typescript", "NextJs", "TailwindCSS"],
    role: "Research, prototyping, programming",
    description: [
      "My online portfolio detailing and showcasing my works, skills, and  experiences.",
    ],
    challenge:
      "Presenting works, skills, and experience relating to my field of expertise, full stack web development.",
    process: [
      "Portfolios are mediums that let you display what you're capable of. The challenge is figuring out how to convey it to the viewer in an eye-catching manner. So I started looking into different illustrations on Pinterest for inspiration. Then, I created my first iteration of the portfolio.",
      "To know whether I'm on the right track, the portfolio was presented to a group of both inexperienced and experienced developers for feedback after which I made adjustments based on their critique.",
    ],
    problems: ["The context was not easily understood.", "Not mobile friendly."],
    solutions: [
      "The foundations of the portfolio were already built. What it required was proper execution. So I once again scoured for Youtube videos, Pinterest posts, and featured websites on Awwward to get a better grasp of good UI/UX.",
      "Youtube channels like Design Course, and The Futur provided the knowledge to creating better user experience while Pinterest and Awwward provided the inspirations needed to create an aesthically pleasing portfolio.",
      "A mobile first approached is then adopted which made the redesigning much more efficient and for the development process easier.",
    ],
    takeAways: [
      "Learning new concepts outside of my general expertise may feel daunting or annoying and it may require a few or more repeatitions to be decent in it but it will be rewarded nontheless.",
      "Being unique doesn't mean being original when designing a portfolio site. What makes a portfolio, or any other website, unique is the proper presentation of information and context.",
    ],
    github: "https://github.com/sayus2884/portfolio",
    link: null,
  },
  {
    title: "MyOshis.ch",
    imageUrl: "/images/myoshis.png",
    demoVideo: "",
    technologies: ["NextJs", "TailwindCSS", "Express", "Youtube Data API"],
    role: "Research, prototyping, programming",
    description: [
      "A platform for viewing multiple virtual streamers (Vtubers) from Youtube at the same time. A convenient way to watch multiple point-of-views when Vtubers do collaboration streams.",
    ],
    challenge: "Watching collaboration streams in one screen.",
    process: [
      "The best examples to base the app on were Youtube and Zoom. Specifically, Youtube's layout was used to display recent videos, upcoming, and current live streams. While Zoom's layout during conference calls will be used for the videos that are going to displayed on screen.",
      "The app is primarily going to be used on large screens, so a desktop first approach is acceptable.",
      "Since all the data can be fetched from Youtube's Data API, it was not necessary to build a separate server.",
    ],
    problems: [
      "Displaying multiple videos in different layouts.",
      "Exceeding Youtube Data API's quotas in after 10,000 requests.",
      "Code maintanance has become unmanageable.",
    ],
    solutions: [
      "The initial solution for displaying the videos was to have fixed layout options that the user can choose from. However, this wasn't flexible enough and it would add too much work. Assuming that the user wants to have different sizes and position for different videos, a free drag and drop approach was taken instead.",
      "To avoid reaching the 10,000 query limit for using the API, a separate back end server was created with a caching system added which reduced the amount of calls to the API by 90%.",
      "As far as maintainability goes, a transition to Typescript and a new project management tool is going to be necessary before continuing the project.",
    ],
    takeAways: [],
    github: null,
    link: "https://myoshis.ch",
  },
];

export default works;
