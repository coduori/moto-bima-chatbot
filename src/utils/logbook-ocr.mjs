import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { config } from 'dotenv';

import { fileToBase64 } from './file-to-base-64.mjs';

config();

const logbookOcr = async ({
    filePath,
    projectId = process.env.GOOGLE_CLOUD_PROJECT_ID,
    location = process.env.GOOGLE_CLOUD_LOCATION,
    processorId = process.env.GOOGLE_CLOUD_LOGBOOK_PROCESSOR,
}) => {
    const client = new DocumentProcessorServiceClient({
        apiEndpoint: `${location}-documentai.googleapis.com`,
    });

    const { imageBuffer, mimeType } = await fileToBase64(filePath);
    const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

    const request = {
        name,
        rawDocument: {
            content: imageBuffer.toString('base64'),
            mimeType: mimeType.mime,
        },
    };

    const [result] = await client.processDocument(request);
    const document = result.document;
    const ocrData = {};
    if (document.entities && document.entities.length > 0) {
        for (const entity of document.entities) {
            ocrData[entity.type] = entity.mentionText;
        }
    } else {
        // add custom logic when moving off of the MVP
    }

    return ocrData;
};

export { logbookOcr };
