import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import dictionary from '../../dictionary';
import Articles from '../../components/Articles/Articles';
import Home from '../../components/Home/Home';
import Sources from '../../components/Sources/Sources';

const App = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h1>Blue Sky Action</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <nav className="nav">
          {props.categories.map(category => (
            <NavLink
              key={category}
              className="nav-link"
              activeClassName="active"
              to={`/${category}`}
            >
              {`${dictionary[category]}`}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
    <Route
      path="/:category"
      render={_ => <Sources {..._} sources={props.sources} />}
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/:category/:source"
        render={_ => <Articles {..._} articles={props.articles} />}
      />
    </Switch>
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  sources: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
  match: { params: { category: 'general' } }
};

export default App;
