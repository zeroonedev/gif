var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hashHistory;
var Gif = require('../components/Gif');

var routes = (
  <Router history={hasHistory}>
    <Route path="/" component={Gif}>
      <IndexRoute component={Gif} />
    </Route>
  </Router>
);

module.exports = routes;