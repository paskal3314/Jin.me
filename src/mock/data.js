import { nanoid } from 'nanoid';

export const projectsData = [
    {
        id: nanoid(),
        country: 'canada',
        img: 'images/project_LLSC.png',
        title: 'Student Services Management System [Capstone project]',
        info: 'System rebuilding capstone project for Lamb Learner Success Center of SAIT, change and migrate database from MS Access to MongoDB including development of new web-based interface system to replace the old GUI interface program.\r\n Worked with 4 students as a team.',
        info2: 'MongoDB, Node.js, JavaScript, PUG, CSS',
        credential: {username: '000123456', password: 'password'},
        url: 'https://llsc-ssms.herokuapp.com/',
        repo: 'https://github.com/paskal3314/LLSCSSMS',
    },
    {
        id: nanoid(),
        country: 'canada',
        img: 'images/project_Jin-me.png',
        title: 'My Own Portfolio Website',
        info: 'The responsive website you are looking at right now, introducing my backgrounds depending on the country selected by user.',
        info2: 'React, JavaScript, CSS',
        url: 'https://jin-me.herokuapp.com/',
        repo: 'https://github.com/paskal3314/Jin.me',
    },
    {
        id: nanoid(),
        country: 'korea',
        img: 'images/project_interface.png',
        title: 'Video Interface for Volvo XC90/S90, 2017',
        info: 'The first firmware project that I took a lead the software part in QDIS corp., third-party video interface device for builtin display in the car to display HDMI and VGA input source like rear-camera. Developed embedded firmware for this device.',
        info2: 'C, Video Scaling, Embedded programming',
        url: 'http://qdis.co.kr/product/All.php?ptype=view&prdcode=1802230001'
    },
];

export const experienceData = [
    {
        id: nanoid(),
        country: 'canada',
        img: 'images/experience-cibo.jpg',
        title: 'Pizza Cook, Cibo 17th ave',
        info: 'The first job in Canada when I was doing working holiday, experienced working in different culture, the place that I met first friends in Calgary. My speaking skills had improved a lot while I was working here!',
        info2: '2018 - 2020',
    },
    {
        id: nanoid(),
        country: 'canada',
        img: 'images/education-sait.png',
        title: 'Southern Alberta Institute of Technology (SAIT)',
        info: 'International student, IT-Software Development diploma course will be completed in May, 2021. Studying all around of software such as Object-oriented Programming, Database, Web Development, Security, System Design, and so on.',
        info2: '2019 - Apr. 2021 (Expected completion)',
    },
    {
        id: nanoid(),
        country: 'korea',
        img: 'images/experience-qdis.png',
        title: 'Firmware Developer, QDIS corp.',
        info: 'Developed firmware solutions for automotive video interfaces, cooperated with Hardware team to develop software for targeted car system. Analyzed data bus of car system to read necessary data and developed firmware using 32bit-MCU, Video Scaler, data structure and communication protocols for various chipsets such as UART, I2C, SPI, CAN. Communicated with global clients to identify their issues or needs.',
        info2: '2016 - 2018',
    },
    {
        id: nanoid(),
        country: 'korea',
        img: 'images/education-yuhan.png',
        title: 'Yuhan University',
        info: 'Associate’s degree in Information Technology and Communication, graduated with honors and the representative of graduates. The first time that I met software development!',
        info2: '2013 - 2017',
    }
];