import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import courses from './data/courses.js';
import Course from './models/courseModel.js';
import students from './data/students.js';
import teachers from './data/teachers.js';
import Student from './models/studentModel.js';
import Teacher from './models/teacherModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await Course.deleteMany();

    const createdTeachers = await Teacher.insertMany(teachers);
    const createdStudents = await Student.insertMany(students);
    const adminUser = createdTeachers[0]._id;

    const sampleCourse = courses.map((course) => {
      return { ...course, user: adminUser };
    });

    await Course.insertMany(sampleCourse);
    console.log('Data Import successful'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`ERROR IS:${error}`.red.inverse);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await Course.deleteMany();

    console.log('Data Destory successful'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`ERROR IS:${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destoryData();
} else {
  importData();
}
