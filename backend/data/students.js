import bcryptjs from 'bcryptjs';
const students = [
  {
    name: 'Steve Rogers',
    loginName: 'rogers',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    email: 'stave@mail.com',
    about: 'it is i',
    enrolledCourses: [],
    studentNumber: '7737373',
  },
  {
    name: 'Natasha Romanoof',
    loginName: 'natty',
    profilePic: '/resourses/dummyPerson.png',
    email: 'natty@mail.com',
    password: bcryptjs.hashSync('123456', 10),
    about: 'it is i',
    enrolledCourses: [],
    studentNumber: '7767373',
  },
  {
    name: 'Tony Stark',
    loginName: 'tony',
    email: 'tony@mail.com',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    about: 'it is i',
    enrolledCourses: [],
    studentNumber: '7637373',
  },
];

export default students;
