import { join } from 'path'
function _resolve(dir) {
  return join(__dirname, dir)
}
export default {
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '~': _resolve('lib'),
    },
  },
}
