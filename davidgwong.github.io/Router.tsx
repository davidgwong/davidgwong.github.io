import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "./src/components/Layout";
import NotFoundPage from "./src/views/NotFound.page";
import AboutPage from "./src/views/About.page";
import PhotographyPage from "./src/views/Photography.page";
import DesignAndDevelopmentPage from "./src/views/DesignAndDevelopment.page";
import PersonalProjectsPage from "./src/views/PersonalProjects.page";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Navigate to="/about" replace={true} />}
        />
        <Route path="/design-and-dev" element={<DesignAndDevelopmentPage />} />
        <Route path="/personal-projects" element={<PersonalProjectsPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
