import { customAlphabet } from 'nanoid'

export function randomId() {
  const nanoid = customAlphabet('1234567890', 6)
  return nanoid();
}
