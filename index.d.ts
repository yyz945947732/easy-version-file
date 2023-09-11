/**
 * @public
 *
 * read VERSION file content.
 *
 * @example
 *
 * ```
 * import { readVersionFile } from 'easy-version-file';
 * const version = readVersionFile()
 * ```
 */
export function readVersionFile(): Promise<string>;

/**
 * @public
 *
 * write VERSION file content.
 *
 * @example
 *
 * ```
 * import { writeVersionFile } from 'easy-version-file';
 * writeVersionFile('1.0.1')
 * ```
 */
export function writeVersionFile(content: string): Promise<boolean>;
