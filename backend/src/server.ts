import mongoose from 'mongoose';
import app from './app';
import env from './env';

const runServer = async () => {
	try {
		await mongoose.connect(env.MONGO_CONNECTION_STRING);
		console.log('Mongoose connected');
		app.listen(env.PORT, () =>
			console.log('Server running on port: ' + env.PORT)
		);
	} catch (error) {
		console.error('Connection to MongoDB Atlas failed');
	}
};

runServer();
