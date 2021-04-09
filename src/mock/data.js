import { nanoid } from 'nanoid';

export const projectsData = [
    {
        id: nanoid(),
        img: 'images/project_LLSC.png',
        title: 'Student Services Management System',
        info: 'System rebuilding capstone project for Lamb Learner Success Center of SAIT, change and migrate database from MS Access to MongoDB including development of new web-based interface system to replace the old GUI interface program. Worked with 4 students as a team.',
        info2: '[ MongoDB, Node.js, PUG, CSS ]',
        url: '',
        repo: 'https://github.com/paskal3314/LLSCSSMS',
    },
    {
        id: nanoid(),
        img: 'images/project_Jin-me.png',
        title: 'My Own Portfolio Website',
        info: 'The responsive website you are looking at right now, introducing my backgrounds depending on the country selected by user, including simple but interactive design.',
        info2: '[ React, CSS ]',
        url: '',
        repo: 'https://github.com/paskal3314/Jin.me',
    },
];