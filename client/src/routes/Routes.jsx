import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { unauthenticatedRoutes } from "./const";
import Layout from "../layouts/layout";

const Routes = () => {
  return (
    <RoutesWrapper>
      {unauthenticatedRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
