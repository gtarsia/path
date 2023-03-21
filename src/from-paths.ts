import nodePath from 'node:path'
import { ZyxwPath } from './ZyxwPath'

export function fromPaths(...paths: string[]) {
  const p = nodePath.normalize(nodePath.join(...paths))
  return new ZyxwPath(p)
}
