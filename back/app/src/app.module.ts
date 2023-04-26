import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import EventsModule from './modules/Events/Events.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventsModule,
  ],
})
export default class AppModule {}
