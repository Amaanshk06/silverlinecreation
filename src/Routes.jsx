import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Homepage from "pages/homepage";
import AboutUs from "pages/about-us";
import ProjectsPortfolio from "pages/projects-portfolio";
import ServicesHub from "pages/services-hub";
import ContactConsultation from "pages/contact-consultation";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/projects-portfolio" element={<ProjectsPortfolio />} />
        <Route path="/services-hub" element={<ServicesHub />} />
        <Route path="/contact-consultation" element={<ContactConsultation/>}/>
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;