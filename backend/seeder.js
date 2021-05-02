import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import courses from './data/courses.js';
import Course from './models/courseModel.js';

import users from './data/users.js';

import Courseware from './models/coursewareModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    await Course.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

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
    await User.deleteMany();

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
