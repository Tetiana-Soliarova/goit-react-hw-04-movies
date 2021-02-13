import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import router from '../src/routes';
import Layout from './component/Loyout';
import {Suspense, lazy} from 'react'


const HomePage = lazy(() =>
  import('../src/views/HomePage' /* webpackChunkName: "home-page" */),
);
const Movies = lazy(() =>
  import('../src/views/Movies' /* webpackChunkName: "movies" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../src/views/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */
  ),
);

const App = () => ( 
  <Layout>
    <Suspense fallback={<h1>Loading....</h1>}>
      <Switch>
      <Route
        exact
        path={router.home}
        component={HomePage}
      />
      <Route
        path={router.movieDetailsPage}
        component={MovieDetailsPage}
      />
      <Route
        exact
        path={router.movies}
        component={Movies}
      />

        <Redirect to={router.home} />
      </Switch>
    </Suspense>
    </Layout> 
)

export default App;
