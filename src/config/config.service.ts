import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { IConfigService } from './config.service.interface';

import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('[ConfigService] Can not read .env file');
		} else {
			this.logger.log('[ConfigService] Read .env file');
			this.config = result.parsed as DotenvParseOutput;
		}
	}

	public get(key: string): string {
		return this.config[key];
	}
}
