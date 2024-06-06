import { IUserService } from './users.service.interface';
import { User } from './user.entity';
import { UserRegisterDto } from './dto/user-register.dto';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class UserService implements IUserService {
	async createUser({ name, email, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
	}

	async validateUser(): Promise<boolean> {
		return true;
	}
}
