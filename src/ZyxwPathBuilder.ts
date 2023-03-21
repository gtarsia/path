import nodePath from 'node:path'

export class ZyxwPathBuilder {
  path: string;

  constructor(path: string) {
    this.path = path
  }

  get absolute() {
    return nodePath.resolve(this.path)
  }

  get relative(cwd = process.cwd()) {
    return nodePath.relative(cwd, this.path)
  }
}
