/// <reference path="es6-shim/es6-shim.d.ts" />
declare module 'moment' {
  var moment: any;
  export default moment;
}

declare module 'lodash' {
  var lodash: any;
  export default lodash;
}

declare module 'app/plugins/sdk' {
  class QueryCtrl {
    target: any;
    constructor($scope: any, $injector: any)
  }

  export {
  QueryCtrl,
  };
}
