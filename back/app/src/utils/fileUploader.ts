import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

// Разрешить только изображения
export const imageFileFilter = (req, file, callback) => {

  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  callback(null, 'Test.json');
};
