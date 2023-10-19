import * as htmlFs from 'fs';
import { errorHandling } from '../fileParser';
export const SUPPORTED_FILE_EXTENSIONS = ['.md', '.txt'];

export function htmlConversion(title: string, cssLink: string, body: string, selectedLang: string, outputFolder: string) {
    const result:string = `<!doctype html>
<html lang="${selectedLang}">
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${
        cssLink
            ? `<link rel="stylesheet" href="${cssLink}">`
            : ""
    }
</head>
<body>
<h1>${title}</h1>
${body}
</body>
</html>`;

    htmlFs.writeFile(`${outputFolder}/${title}.html`, result, function (err: any) {
        if (err) {
            errorHandling(err.message);
        }
    });
    console.log(`${title}.html is created successfully!`);
}