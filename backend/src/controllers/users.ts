import { RequestHandler } from 'express';
import UserModel from '../models/user';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

interface SignUpBody {
	username: string;
	email: string;
	password: string;
}

export const signUp: RequestHandler<
	unknown,
	unknown,
	SignUpBody,
	unknown
> = async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		// collation for casing, "steve", "Steve" should be considered the same.
		const userExits = await UserModel.findOne({ username })
			.collation({ locale: 'en', strength: 2 })
			.exec();

		if (userExits) {
			throw createHttpError(409, 'Username already taken');
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await UserModel.create({
			username,
			displayName: username,
			email,
			password: hashedPassword,
		});

		const newUser = result.toObject();

		// Delete password before sending
		delete newUser.password;

		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
};
