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
      "I am Hafiz Zafar Ahmad, a Web and Mobile Developer with four years of experience. I specialize in designing and developing web and mobile applications. My expertise includes languages like HTML, CSS, JavaScript, Java, Kotlin and Dart, along with frameworks such as React Native and Flutter for mobile app development and VueJS, NuxtJS for web app development.",
    links: {
      linkedin: "www.linkedin.com",
      github: "https://github.com/hafizzafarahmad",
      resume:
        "https://drive.google.com/file/d/1EYyeh4eSKz5q9BprYOed4GNb1nXr7QwO/view?usp=drive_link",
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
          "Web Programming",
          "Mobile Programming",
          "UI/UX Design",
          "Front-end Developing",
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
          "Web Programming",
        ],
      },
    ],
    experience: [
      {
        name: "Cybers Blitz Nusantara",
        place: "Bandung, Indonesia",
        date: "February, 2020 - Present",
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
        info: ["HTML", "CSS", "Bootstrap", "Json"],
        icon: "fas cubes",
      },
      {
        title: "Framework",
        info: ["VueJS", "NuxtJS", "Flutter", "React Native"],
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
        name: "JMCLICK 2.0 - Human Capital Information System",
        title: "JMCLICK 2.0",
        pictures: [
          {
            img: require("@/assets/portfolio/jmclick/JMCLICK.png"),
            title: "",
          },
        ],
        technologies: ["Dart", "Flutter", "Firebase", "Android", "IOS"],
        category: "Mobile App",
        github: "",
        date: "Feb, 2020 - Mar, 2020",
        visit: "",
        description: "",
      },
      {
        name: "Smart Survey - Survey and Monitoring System",
        title: "Smart Survey",
        pictures: [
          {
            img: require("@/assets/portfolio/smartsurvey/smartsurvey.png"),
            title: "",
          },
        ],
        technologies: [
          "Dart",
          "Flutter",
          "Firebase",
          "NoSQL",
          "Android",
          "IOS",
        ],
        category: "Mobile App",
        github: "",
        date: "Apr, 2021 - Jul, 2021",
        visit: "",
        description: "",
      },
      {
        name: "UKM Access",
        title: "UKM Access",
        pictures: [
          {
            img: require("@/assets/portfolio/ukmaccess/UKM Access.png"),
            title: "",
          },
        ],
        technologies: [
          "Dart",
          "Flutter",
          "Firebase",
          "NoSQL",
          "Android",
          "IOS",
        ],
        category: "Mobile App",
        github: "",
        date: "Jul, 2021 - Dec, 2021",
        visit: "",
        description: "",
      },
      {
        name: "UFO 2 - Functional testing Fiber ODP Online",
        title: "UFO 2",
        pictures: [
          {
            img: require("@/assets/portfolio/ufo/UFO2.png"),
            title: "",
          },
        ],
        technologies: ["Dart", "Flutter", "Android", "IOS"],
        category: "Mobile App",
        github: "",
        date: "Jan, 2021 - Feb, 2021",
        visit: "",
        description: "",
      },
      {
        name: "UKM Hub - Officer Management System",
        title: "UKM Hub",
        pictures: [
          {
            img: require("@/assets/portfolio/ukmhub/ukmhub.png"),
            title: "",
          },
        ],
        technologies: ["Dart", "Flutter", "NoSQL", "Android", "IOS"],
        category: "Mobile App",
        github: "",
        date: "Jan, 2023 - Present",
        visit: "",
        description: "",
      },
      {
        name: "Next Generation Transformer - Project Management System",
        title: "Next Generation Transformer",
        pictures: [
          {
            img: require("@/assets/portfolio/transformer/Transformer.png"),
            title: "",
          },
        ],
        technologies: [
          "Javascript",
          "CSS",
          "Bootstrap",
          "json",
          "VueJS",
          "NuxtJS",
        ],
        category: "Web App",
        github: "",
        date: "Jul, 2022 - Present",
        visit: "",
        description: "",
      },
    ],
  },
});
