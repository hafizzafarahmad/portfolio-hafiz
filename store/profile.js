export const state = () => ({
  data: {
    name: "Hafiz Zafar Ahmad",
    logo_name: "Hafiz",
    flat_picture: require("@/assets/portrait.png"),
    config: {
      use_cookies: true,
      navbar: {
        blur: false,
      },
    },
    description:
      "My name is Hafiz Zafar Ahmad, senior Senior Mobile Developer at KFS University with an interest in Software Development, UI/UX Design and Front-end developing. ",
    links: {
      linkedin: "www.linkedin.com/in/mahy-mohab-209",
      github: "https://github.com/mahy209",
      behance: "https://www.behance.net/mahymohab",
      resume:
        "https://drive.google.com/file/d/1yrJjc6q-X29qiW_UupooSq1hMTEwJLZ6/view?usp=sharing",
    },
    education: [
      {
        name: "BSI University",
        place: "Bandung",
        date: "sep, 2015 - sep, 2019",
        degree: "Bachelor of Computer Science",
        gpa: "3.64/4.0",
        description: "",
        skills: [
          "Software Engineering",
          "web programming",
          "Mobile programming",
          "UI/UX design",
          "Front-end developing",
        ],
      },
      {
        name: "Prakarya International Vocational High School",
        place: "Bandung",
        date: "sep, 2012 - sep, 2015",
        degree: "Computer and Network Engineering",
        gpa: null,
        description: "",
        skills: [
          "Computer Hardware",
          "Database Management",
          "Networking",
          "web programming",
        ],
      },
    ],
    experience: [
      {
        name: "Cybers Blitz Nusantara (Telkom Indonesia)",
        place: "Bandung, Indonesia",
        date: "February, 2020 - currently",
        position: "Senior Software Engineer",
        description: "",
        skills: [
          "Dart",
          "Flutter",
          "Kotlin",
          "Java",
          "IOS",
          "Android",
          "Firebase",
          "Bootstrap",
          "Json",
          "JavaSript",
          "TypeSript",
          "NuxtJS",
          "VueJS",
        ],
      },
      {
        name: "Access Cipta Solusi",
        place: "Bandung",
        date: "February, 2019 - May, 2019",
        position: "Network Engineer",
        description: "",
        skills: ["Mikrotik", "Cisco", "Network", "CentOS", "Ubuntu"],
      },
    ],
    skills: [
      {
        title: "Language",
        info: ["Dart", "Javascript", "Java", "Kotlin"],
        icon: "fas code",
      },
      {
        title: "Front-end",
        info: ["HTML5", "CSS3", "Bootstrap3", "JQuery", "Es6", "json"],
        icon: "fas cubes",
      },
      {
        title: "Framework",
        info: ["VueJS", "NuxtJS", "Flutter"],
        icon: "fas laptop-code",
      },
      {
        title: "Databases",
        info: ["MySQL", "Postgresql", "NoSQL", "SQLite"],
        icon: "fas database",
      },
      {
        title: "Operating systems & tools",
        info: ["Ubuntu", "Windows", "Agile", "Scrum", "JIRA", "Firebase"],
        icon: "fas tools",
      },
      {
        title: "Design",
        info: ["Figma", "XD", "Photoshop", "Premiere"],
        icon: "fas square-pen",
      },
    ],
    portfolio: [
      {
        name: "Diary App",
        pictures: [
          {
            img: require("@/assets/portfolio/diary/1.png"),
          },
          {
            img: require("@/assets/portfolio/diary/2.png"),
          },
          {
            img: require("@/assets/portfolio/diary/3.png"),
          },
        ],
        technologies: ["react", "scss", "local storage"],
        category: "Web App",
        date: "Aug, 2021 - 20 days",
        github: "https://github.com/mahy209/notes-react-app.git",
        visit: "https://github.com/mahy209/notes-react-app.git",
        description:
          " Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag ",
      },
      {
        name: "Online Examination",
        pictures: [
          {
            img: require("@/assets/portfolio/online examination/exam (1).png"),
          },
          {
            img: require("@/assets/portfolio/online examination/exam (2).png"),
          },
          {
            img: require("@/assets/portfolio/online examination/exam (3).png"),
          },
          {
            img: require("@/assets/portfolio/online examination/exam (4).png"),
          },
          {
            img: require("@/assets/portfolio/online examination/exam (5).png"),
          },
        ],
        technologies: ["HTML", "CSS", "JavaSript", "JQuery", "PHP", "MySQL"],
        category: "Web App",
        date: "Apr, 2021 - May, 2021",
        github: "https://github.com/mahy209/online-examination.git",
        visit: "https://github.com/mahy209/online-examination.git",
        description:
          "Online Examination System Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations. Organizations can also easily check the performance of the student that they give in an examination. As a result of this, organizations are releasing results in less time. It also helps the environment by saving paper. According to today’s requirement, online examination project in php is very useful to learn it. What is an online examination system? In an online examination system examine get their user id and password with his/her admit card. This id is already saved in the examination server. When examine login to the server he/she get his/her profile already register. On the certain time examine gets the message to start the examination. All answers given by examine are saved into the server with his/her profile information. Online examination system also allows to correct the answer if the examine needed to change any answer in the examination time duration, however, after the time duration any change will not allow. This also makes c checking the answer easy and error proof as computers are more accurate than man and provide fast results too. Php is a web base language so we can create an online examination system in PHP. Administrator of Online Examination has multiple features such as Add, Delete, Update Topics and Question. To Login as Admin put inside your browser.",
      },
      {
        name: "MyFlix.com",
        pictures: [
          {
            img: require("@/assets/portfolio/myflix.com/1.png"),
          },
          {
            img: require("@/assets/portfolio/myflix.com/2.png"),
          },
          {
            img: require("@/assets/portfolio/myflix.com/3.png"),
          },
          {
            img: require("@/assets/portfolio/myflix.com/4.png"),
          },
        ],
        technologies: ["react", "css", "TMDB"],
        category: "Web App",
        date: "Aug, 2021 - 10 days",
        github: "https://github.com/mahy209/MyFlix-react-app.git",
        visit: "https://github.com/mahy209/MyFlix-react-app.git",
        description:
          " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. ",
      },
    ],
    portfolio_design: [
      {
        name: "Examia",
        title: "Online Examination - UI Design",
        pictures: [
          {
            img: require("@/assets/designs/online examination/exam (2).png"),
            title: "MoodBoard",
          },
          {
            img: require("@/assets/designs/online examination/exam (1).png"),
            title: "Mockups 1",
          },
          {
            img: require("@/assets/designs/online examination/exam (3).png"),
            title: "Mockups 2",
          },
          {
            img: require("@/assets/designs/online examination/exam (4).png"),
            title: "App Elements",
          },
          {
            img: require("@/assets/designs/online examination/exam (5).png"),
            title: "App Elements",
          },
          {
            img: require("@/assets/designs/online examination/exam (6).png"),
            title: "App Elements",
          },
        ],
        technologies: ["XD", "Photoshop"],
        category: "Visual Design",
        github: "",
        date: "Jan, 2021 - Feb, 2021",
        visit: "",
        description:
          " Examia is a open source project , <br> <br> with Ui/UX design and full stack developing(HTML/CSS/JQuery/PHP).",
      },
      {
        name: "Pill Reminder",
        title: "Pill Reminder - Mockup Design",
        pictures: [
          {
            img: require("@/assets/designs/pill reminder/Web 1.png"),
            title: "Moodboard",
          },
          {
            img: require("@/assets/designs/pill reminder/1.png"),
            title: "Mockups 1",
          },
          {
            img: require("@/assets/designs/pill reminder/2.png"),
            title: "Mockups 2",
          },
        ],
        technologies: ["XD", "Illustrator"],
        category: "Visual Design",
        github: "",
        date: "Apr, 2021 - Apr, 2021",
        visit: "",
        description: "pill reminder app for nessecary drugs for the day.",
      },
      {
        name: "Taxes Burger",
        title: "Taxes Burger - UI design",
        pictures: [
          {
            img: require("@/assets/designs/burger/Web 1 (1).jpg"),
            title: "Moodboard",
          },
          {
            img: require("@/assets/designs/burger/Web 1 (1).png"),
            title: "Mockup 1",
          },
          {
            img: require("@/assets/designs/burger/Web 1 (2).png"),
            title: "Mockup 2",
          },
          {
            img: require("@/assets/designs/burger/Web 1 (3).png"),
            title: "Mockup 3",
          },
        ],
        technologies: ["XD", "Illustrator"],
        category: "Visual Design",
        github: "",
        date: "May, 2021 - May, 2021",
        visit: "",
        description: " Burger restuarant UI design",
      },
    ],
  },
});
