import { Module } from '@nestjs/common';

import TestController from './Events.controller';

import EventsService from './Events.service';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [EventsService],
  exports: [EventsService],
})
export default class EventsModule {}
