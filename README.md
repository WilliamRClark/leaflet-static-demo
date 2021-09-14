# LeafletStaticDemo

This project was created to demo the compatiblity issue with Angular Universal running ngx-leaflet.

To repro:
1.  npm install
2.  npm run build:ssr

  This should succeed.

3.  npm run serve:ssr

  This should fail with something like:

  ```  
    ReferenceError: window is not defined
        at C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\server\main.js:1:1263956
        at __webpack_require__ (C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\server\main.js:1:2230907)
        at C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\server\main.js:1:3844391
        at C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\server\main.js:1:3847472
        at Object.<anonymous> (C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\server\main.js:1:3847704)
        at Module._compile (internal/modules/cjs/loader.js:1072:14)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
        at Module.load (internal/modules/cjs/loader.js:937:32)
        at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! leaflet-static-demo@0.0.0 serve:ssr: `node dist/leaflet-static-demo/server/main.js`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the leaflet-static-demo@0.0.0 serve:ssr script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     C:\Users\cwill\AppData\Roaming\npm-cache\_logs\2021-09-14T14_02_47_760Z-debug.log
    ```


    You get a similar error with:


    ```
    npm run prerender
    ```

    ```
    ✖ Prerendering routes to C:\git\test\leaflet-static-demo\dist\leaflet-static-demo\browser failed.
        window is not defined
        npm ERR! code ELIFECYCLE
        npm ERR! errno 1
        npm ERR! leaflet-static-demo@0.0.0 prerender: `ng run leaflet-static-demo:prerender`
        npm ERR! Exit status 1
        npm ERR!
        npm ERR! Failed at the leaflet-static-demo@0.0.0 prerender script.
        npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

        npm ERR! A complete log of this run can be found in:
        npm ERR!     C:\Users\cwill\AppData\Roaming\npm-cache\_logs\2021-09-14T14_06_37_341Z-debug.log
    ```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
