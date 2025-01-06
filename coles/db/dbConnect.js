import mongoose from 'mongoose';

const dbConnect = async () => {
  const getDate = new Date();
  const month = getDate.getMonth() + 1;
  const day = getDate.getDate();
  const year = getDate.getFullYear();

  const formattedDate = `${month}-${day}-${year}`;
  try {
    // const conn = await mongoose.connect(`mongodb://127.0.0.1/coles_${formattedDate}`);
    const conn = await mongoose.connect(`mongodb://127.0.0.1/coles_1-3-2025`);
    console.log('database connected');
    return conn;
  } catch (error) {
    console.log('database error');
  }
};

export default dbConnect;
