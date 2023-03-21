import nodePath from 'node:path'
import { ZyxwPathBuilder } from './ZyxwPathBuilder'

export class ZyxwPath {
  path: string;

  constructor(path: string) {
    this.path = path
  }

  get full() {
    return new ZyxwPathBuilder(this.path)
  }

  get dir() {
    return new ZyxwPathBuilder(nodePath.dirname(this.path))
  }

  get base() {
    return nodePath.basename(this.path)
  }
}
