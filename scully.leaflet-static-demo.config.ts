import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "leaflet-static-demo",
  outDir: './dist/static',
  extraRoutes: [
    '/map'
  ],
  routes: {
  }
};