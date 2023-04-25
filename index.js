const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

try {
    const data = fs.readFileSync('./Test.json', "utf8")
    const templateFile = fs.readFileSync(path.resolve(__dirname, 'document.docx'), 'binary');
    const zip = new PizZip(templateFile);
    let outputDocument = new Docxtemplater(zip);
    const dataToAdd = {  carList: JSON.parse(data) }
    outputDocument.setData(dataToAdd);
    outputDocument.render()
    let outputDocumentBuffer = outputDocument.getZip().generate({ type: 'nodebuffer' });
    fs.writeFileSync(path.resolve(__dirname, 'documentOut.docx'), outputDocumentBuffer);
} catch (err) {
    console.error(err)
}