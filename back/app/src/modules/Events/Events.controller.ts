import {
  Post,
  Body,
  Controller,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import EventsService from './Events.service';

import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../../utils/fileUploader';

@Controller('events')
export default class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: `./files`,
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(
    @UploadedFile() image,
    @Body() dto,
  ): Promise<any> {
    return this.eventsService.create();
  }
}
