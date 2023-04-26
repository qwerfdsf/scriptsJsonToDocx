import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as PizZip from "pizzip";
const Docxtemplater = require('docxtemplater');
@Injectable()
export default class EventsService {
  constructor() {}

  /** Создание мероприятия * */
  async create(): Promise<any> {
    const data = fs.readFileSync('./files/Test.json', "utf8")
    const templateFile = fs.readFileSync( './files/document.docx', 'binary');
    const zip = new PizZip(templateFile);
    let outputDocument = new Docxtemplater(zip);
    const dataToAdd = {  carList: JSON.parse(data) }
    outputDocument.setData(dataToAdd);
    outputDocument.render()
    let outputDocumentBuffer = outputDocument.getZip().generate({ type: 'nodebuffer' });
    fs.writeFileSync('./files/documentOut.docx', outputDocumentBuffer);
    return fs.readFileSync( './files/documentOut.docx');
  }
}
