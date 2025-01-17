import { viteMockServe } from 'vite-plugin-mock' // https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md

export default viteMockServe({
  mockPath: 'mock',
  prodEnabled: true,
  injectCode: `
    import { setupMockServer } from '../mock';
    setupMockServer();
  `,
})
