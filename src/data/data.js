export const aboutMe = {
  motto:
    'All our dreams can come true, if we have the courage to pursue them - by Walt Disney',
  aboutOne:
    'After my incredible 10+ years journey as an entrepreneur who sell, design, market, and research herbal supplements, I am more than grateful to have my dream come true, becoming a Software Engineer. ',
  aboutTwo:
    'Thanks to the Fullstack Academy Grace Hopper program! Throughout the curriculum, I acquire a tremendous amount of knowledge and full of hands-on experiences, such as developing an application with a team via Agile Project Management, transforming my educational ideas into action by building different mobile applications, and much more.',
  aboutThree:
    'The teaching fellowship at Fullstack Academy further deepens my knowledge and fulfill my passion as a mentor where I can help others understand new concepts and achieve their goals.Technologies are evolving at a lightning speed, I am ready and looking forward to any new challenges that I will be facing as a Software Engineer. I am particularly interested in working as a team as I believe collaboration is the key to success. My goal is to develop products that not only satisfy but exceed client’s expectations.     ',
};

export const work = [
  {
    company: 'Fullstack Academy',
    title: 'Teaching Fellow',
    dates: 'NOV 2020 - FEB 2021',
    descriptions: [
      'Mentor, support and teach over 50 students in an immersive full-stack engineering program',
      'Guide students on JavaScript fundamentals, debugging strategies, and software architecture',
      ' Supervise student project teams by providing technical guidance and leading daily code review with agile methodologies ',
      'Administer technical interviews for prospective students applying to the program',
    ],
  },
];

export const projects = [
  {
    title: 'BrainTeez',
    iframelink:
      'https://www.youtube.com/embed/PO03Om8jUBo?&autoplay=1"frameborder="0"allowfullscreen',
    github: 'https://github.com/team-g-capstone',
    link: 'https://expo.io/@katwingki/projects/brainteez',
    youtube: 'https://www.youtube.com/watch?v=J4UF711Ofc0',
    date: 'October 2020',
    descriptions: [
      'BrainTeez is a mobile educational application built within 2.5 weeks by a team of three developers. Our goal is to create a holistic learning application that provides a variety of leveled games and a real-time multiplayer game room that engages many parts of the child’s brain at once.',

      'Currently, there are three different leveled games. We believe the balance of shapes, numbers, colors, and sounds in these games will stimulate new connections in the child’s brain. Finally, the real-time multiplayer game room allows the teacher to administer contests to evaluate the students’ performance.',
      'I was solely responsible for Firebase Authentication as well as user profile storage and the real-time multiplayer game room using Cloud Firestore.',

    ],
    tech: ["React Native", "Expo", "Firebase", "Redux"]
  },
  {
    title: 'Minions AI',
    iframelink:
      'https://www.youtube.com/embed/kusE5jgcYj8?&autoplay=1"frameborder="0"allowfullscreen',
    github: 'https://github.com/katwingki/Stackathon',
    link:
      'https://res.cloudinary.com/dp8rfxspl/video/upload/v1609658529/Portfolio/MinionsAI_CompletedWithAudio_pn4qcn.mp4',
    youtube:
      'https://youtu.be/ngUMmZCazzc?list=PLUNbWIDGJfl5Le7wT5C9D9pJbk2s1H2gi',
    date: 'October 2020',
    descriptions: [
      'I created Minions AI, a mobile application, within 4 days. Although testing is an essential part of learning, traditional paper and pen testing can be tedious and stressful for kids. To improve kids’ learning experience, I developed this fun artificial intelligence application that tests kids’ basic knowledge.',

      'In this application, Minions and kids can ask each other questions, and an automated response is populated based on the inputs. After accumulating a strong foundation in building PERN Stack apps through agile methodologies and daily pair-programming, I decided to challenge myself with some new technologies such as React Native and Expo for this solo project.',

      `One of the significant challenges was the natural.js library's incompatibility with Expo. I worked around it by standardizing the data in React through the process of trial and error.`],

    tech: ["React", "React Native", "Expo", "JavaScript"]
  },
  {
    title: 'HYKM Bookstore',
    iframelink:
      'https://www.youtube.com/embed/iyGDtenQF_A?&autoplay=1"frameborder="0"allowfullscreen',
    github: 'https://github.com/HYKM/graceshopper',
    link: 'https://hykm-bookstore.herokuapp.com',
    youtube: 'https://www.youtube.com/watch?v=Xxc0v6FW38k',
    date: 'September 2020',
    descriptions: [
      'HYKM Bookstore is a mock, fully functional e-commerce website built within 7 days by a team of 4 developers. The site sells textbooks with enhanced admin, user, and security features. The application was deployed to Heroku via Travis CI for continuous integration.',
      'The application was built from the ground up using all the technologies that we acquired throughout the course. This was our first group project as developers; we followed the Agile Software Development methodology to ensure all the requirements were met. We met daily as a group to update each other on our progress and divide the daily tasks through the GitHub project board. ',
      'For the more challenging part, we often pair-program to maximize efficiency.I was solely responsible for Heroku deployment and setting up authentication with Google using OAuth. ',


    ],
    tech: ["PostgreSQL", "Node.js", "REST API", "React"],
  },
];
