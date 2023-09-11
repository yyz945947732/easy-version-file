import fs from 'node:fs';
import { findUp } from 'find-up';

const FILES = [
  'VERSION',
  'VERSION.txt',
  'VERSION.md',
  '.VERSION',
  'VERSION.DEV',
  'VERSION.PROD',
  'VERSION.LOCAL',
  'VERSION.STAGE',
  'VERSION.TEST',
];

/**
 * @private
 *
 * get VERSION file path.
 */
async function getVersionFilePath() {
  const path = await findUp(FILES);
  return path;
}

/**
 * @public
 *
 * read VERSION file content.
 */
export async function readVersionFile() {
  const path = await getVersionFilePath();
  const content = fs.readFileSync(path, 'utf8').trim();
  return content;
}

/**
 * @public
 *
 * write VERSION file content.
 */
export async function writeVersionFile(content) {
  try {
    const path = await getVersionFilePath();
    fs.writeFileSync(path, content, 'utf8');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
