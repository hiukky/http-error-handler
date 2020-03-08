import { IMakeErr, IError } from './types'
import makeModelMessage from './makeModelMessage'

/**
 * @function makeErr
 *
 * Creates an error response following the RFC 7807 pattern.
 *
 * @param code - HTTP status code 4xx to 5xx
 * @param type - URL for a document describing the error condition
 * @param detail - Legible error description
 * @param instance - URI exclusive for or specific error
 * @param title - Short and descriptive information
 */
const makeErr = ({
  code,
  type = 'about:blank',
  title,
  detail,
  instance,
}: IMakeErr): IError =>
  Object.assign(makeModelMessage({ code, title }), { type, detail, instance })

export default makeErr