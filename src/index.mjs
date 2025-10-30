import { askQuestion } from './utils/ask-question.mjs';
import { generateLogbookContext } from './utils/generate-logbook-context.mjs';
import { logbookOcr } from './utils/logbook-ocr.mjs';

const filePath = './samples/sample-logbook.pdf';
const question = "What is my vehicle's registration number?";

const logbookData = await logbookOcr({ filePath });

const logbookContext = generateLogbookContext(logbookData);

const answer = await askQuestion(question, logbookContext);
// eslint-disable-next-line no-console
console.log(answer);
