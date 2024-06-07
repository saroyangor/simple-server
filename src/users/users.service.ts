import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';

import { TYPES } from '../types';
import { IConfigService } from '../config/config.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	async createUser({ name, email, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(): Promise<boolean> {
		return true;
	}
}
