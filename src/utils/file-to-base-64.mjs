import fs from 'node:fs';

import { fileTypeFromBuffer } from 'file-type';

const fileToBase64 = async (filePath) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const imageBuffer = fs.readFileSync(filePath);
    const mimeType = await fileTypeFromBuffer(imageBuffer);

    return { imageBuffer, mimeType };
};

export { fileToBase64 };
