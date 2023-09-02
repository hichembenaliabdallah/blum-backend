import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

config();
export interface data {
  data: object;
  port: string;
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello !';
  }
  async sayPort(): Promise<data> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    return {
      data: data[1],
      port: process.env.PORT,
    };
  }
}
