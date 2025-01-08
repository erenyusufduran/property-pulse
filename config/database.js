import mongoose from 'mongoose'

let connected = false;

const connectDb = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log('Mongodb is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;