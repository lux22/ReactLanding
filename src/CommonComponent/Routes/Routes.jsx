import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../Loading/loading";
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../../Component/Home/Home")), 2000);
  });
});

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
