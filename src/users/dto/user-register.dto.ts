import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email is invalid' })
	email: string;

	@IsString({ message: 'Password is required' })
	password: string;

	@IsString({ message: 'Name is required' })
	name: string;
}
