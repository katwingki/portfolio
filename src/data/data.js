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
      'BrainTeez is a mobile educational application built within 2.5 weeks by a team of three developers. Our goal is to create a holistic learning application that provides a variety of leveled games and a real-time multiplayer game room that engage many parts of the child’s brain at once.',

      'Currently, there are three different leveled games. The first is a simple addition game that is rendered with eye-catching pizazz. The second game strengthens logical skills and pattern-matching abilities by sorting a series of draggable circles into boxes by their color. The third game relies on the players’ memory to match pairs of cards with the same animal.',
      'All three games are progressively harder at each level. We believe the balance of shapes, numbers, colors, and sounds in these games will simulate new connections in the child’s brain. Finally, the real-time multiplayer game room allows the teacher to administer contests to evaluate the students’ performance.',

      ' I am solely responsible for Firebase Authentication and real-time multiplayer game room using CloudFirestore.',
      'Technologies: Firebase, Firestore, React Native, Expo, JavaScript, and Redux.',
    ],
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
      'Minions AI, an IOS, Android mobile application, that I created during a 4-day solo project. Testing is an essential part of learning. However, traditional paper and pen testing can be tedious and stressful for kids and possibly not the best indicator of their potential. To improve kids’ learning experience, I created this fun and straightforward artificial intelligence mobile application that tests kids’ basic knowledge.',

      'In this application, I incorporated some fun Minions elements where kids can ask Minions questions, and an automated response populates based on their response. On the other hand, Minions can ask kids questions to see if they are smart enough to be the next Minions Master and send responses based on their input. The testing component integrated with the neural network-based Brain.js library, and the training data normalized with a natural npm package. ',

      'After accumulating a strong foundation in building PERN Stack with agile methodologies, I decided to challenge myself with some new technologies such as React Native and Expo for this solo project. One of the significant challenges was the natural.js library is not compatible with Expo. I worked around it by standardizing React data. Overall, I enjoyed the process of trial and error, and I was happy about what I was able to build within the time frame given.',

      'Technologies: React Native, Expo, JavaScript, and React',
    ],
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
      'HYKM Bookstore is a mock, fully functional e-commerce website built within 7-day by a team of four developers. The site sells textbooks with enhanced admin, user, and security features. The application was deployed to Heroku via Travis CI for continuous integration.',
      'The application was built from the ground up using all the technologies that we acquired throughout the course. This was our first group project as a developer, we followed the Agile Software Development methodology to ensure all the requirements are met through the collaboration of the team, for example, we meet daily as a group to update each other on progress and divide the daily task among the group through Github project board. For the more challenging part, we often pair-program to maximize efficiency. A teaching fellow was also assigned as our project manager to guide us through the process and perform a quality check to ensure we are delivering qualified slices. ',
      'I am solely responsible for Heroku deployment and setting up authentication with Google using OAuth. ',
      'Technologies:  Node.js, PostgresSQL, Sequelize, Express, React, Redux, HTML, CSS, and OAuth',
    ],
  },
];
