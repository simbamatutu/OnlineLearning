import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected:${conn.connection.host}`.yellow.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold.bgRed);
    process.exit(1);
  }
};
export default connectDB;
