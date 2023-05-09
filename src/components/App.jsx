// import HomePage from "pages/HomePage";
// import { Route, Routes } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout/SharedLayout";
import AboutPage from 'pages/AbautPage'
import HomePage from 'pages/HomePage'
import ProjectsPage from 'pages/ProjectsPage';
import WhatWeDoPage from 'pages/WhatWeDoPage';
import CareerPage from 'pages/CareerPage';
import NewsPage from 'pages/NewsPage';
import ContactsPage from 'pages/CantactsPage';

export const App = () => {

  return (
    <>

      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <WhatWeDoPage />
      <CareerPage />
      <NewsPage />
      <ContactsPage />

    </>

    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     {/* <Route index element={<HomePage />} /> */}
    //     <Route path="about" element={<About />} />;

    //   </Route>

    // </Routes>

  );

};
