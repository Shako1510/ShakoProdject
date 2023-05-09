// import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { About } from '../pages/AbautPage'


export const App = () => {

  return (

    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="about" element={<About />} />;

      </Route>

    </Routes>

  );

};
