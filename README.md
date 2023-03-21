
# @zyxw/path

Just a wrapper I use when dealing with paths.

For a specific path:

* Sometimes I need to express it relatively
* Sometimes I need to express it absolutely

This library facilitates that.

```typescript
// assume cwd is /tmp
const path = fromPaths('qwe/asd.txt') // identical to fromPaths('/tmp/qwe/asd.txt')
path.full.absolute // => '/tmp/qwe/asd.txt'
path.full.relative // => 'qwe/asd.txt'
path.dir.absolute // => /tmp/qwe
path.dir.relative // => qwe
path.base // => 'asd.txt'
```
