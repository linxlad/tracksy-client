import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'signup',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SignUp = require('./containers/SignUpContainer').default;

      // ------------------------------------
      // Reducers
      // ------------------------------------
      const signup = require('./reducers/SignUp').default;
      injectReducer(store, { key: 'signup', reducer: signup });

      /*  Return getComponent   */
      cb(null, SignUp);

    /* Webpack named bundle   */
    }, 'signup');
  }
});
