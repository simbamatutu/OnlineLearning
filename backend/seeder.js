import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import courses from './data/courses.js';
import coursewares from './data/courseware.js';
import Course from './models/courseModel.js';
import Subtopic from './models/subtopicModel.js';
import subTopics from './data/Subtopic.js';
import users from './data/users.js';
import Courseware from './models/coursewareModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Courseware.deleteMany();
    await Course.deleteMany();
    await Subtopic.deleteMany();
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const sampleCourseware = coursewares.map((courseware) => {
      return { ...courseware, user: adminUser };
    });
    const sampleSubTopic = subTopics.map((sub) => {
      return { ...sub, user: adminUser };
    });
    const sampleCourse = courses.map((course) => {
      return { ...course, user: adminUser };
    });

    await Course.insertMany(sampleCourse);
    await Courseware.insertMany(sampleCourseware);
    await Subtopic.insertMany(sampleSubTopic);
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
    await Courseware.deleteMany();
    await Subtopic.deleteMany();
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
