import { ICreateError, IError } from '../types/builders'
import makeModelMessage from './createModelMessage'

/**
 * @function createError
 *
 * Creates an error response following the RFC 7807 pattern.
 *
 * @param code - HTTP status code 4xx to 5xx
 * @param ref - HTTP Code Reference
 * @param type - URL for a document describing the error condition
 * @param detail - Legible error description
 * @param instance - URI exclusive for or specific error
 * @param title - Short and descriptive information
 */
const createError = ({
  code = 500,
  type = 'about:blank',
  title,
  detail,
  instance,
}: ICreateError): IError =>
  Object.assign(makeModelMessage({ code, title }), { type, detail, instance })

export default createError