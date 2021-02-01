import bcryptjs from 'bcryptjs';
const users = [
  {
    name: 'Steve Rogers',
    loginName: 'rogers',
    profilePic: '',
    password: bcryptjs.hashSync('123456', 10),
    email: 'stave@mail.com',
    isTeacher: 'true',
    isAdmin: 'true',
    teacherNumber: 'LB7737373',
  },
  {
    name: 'Natasha Romanoof',
    loginName: 'natty',
    profilePic: '',
    email: 'natty@mail.com',
    password: bcryptjs.hashSync('123456', 10),
    isStudent: 'true',
    studentNumber: '7737373',
  },
  {
    name: 'Tony Stark',
    loginName: 'tony',
    email: 'tony@mail.com',
    profilePic: '',
    password: bcryptjs.hashSync('123456', 10),
    isStudent: 'true',
    studentNumber: 'LB7737373',
  },
];

export default users;
