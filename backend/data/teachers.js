import bcryptjs from 'bcryptjs';
const teachers = [
  {
    name: 'Peter Tosh',
    loginName: 'pTosh',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    email: 'toshtosh@mail.com',
    about:
      'Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions)',
    isAdmin: 'true',
    teacherNumber: 'LB7737373',
  },
  {
    name: 'John Chibadura',
    loginName: 'joechiba',
    profilePic: '/resourses/dummyPerson.png',
    email: 'johnChibadura@mail.com',
    password: bcryptjs.hashSync('123456', 10),
    about:
      'Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions)',

    teacherNumber: 'LB7737373',
  },
  {
    name: 'Marshall Munhu',
    loginName: 'MarMunhu',
    email: 'marshall@mail.com',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    about:
      'Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions)',

    teacherNumber: 'LB7737373',
  },
];

export default teachers;
