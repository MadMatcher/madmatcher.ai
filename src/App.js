import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Data = lazy(() => import('./pages/Data'));
const Software = lazy(() => import('./pages/Software'));
const Research = lazy(() => import('./pages/Research'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const LessonsLearned = lazy(() => import('./pages/LessonsLearned'));
const NotFound = lazy(() => import('./pages/NotFound'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const Product = lazy(() => import('./pages/Product'));
const OpenSource = lazy(() => import('./pages/OpenSource'));
const SparkMatcher = lazy(() => import('./pages/SparkMatcher'));
const CloudMatcher = lazy(() => import('./pages/CloudMatcher'));
const Consulting = lazy(() => import('./pages/Consulting'));
const Team = lazy(() => import('./pages/Team'));
const ProductDevelopment = lazy(() => import('./pages/ProductDevelopment'));
const AboutResearch = lazy(() => import('./pages/AboutResearch'));
const UseCases = lazy(() => import('./pages/UseCases'));
const ContactForm = lazy(() => import('./pages/ContactForm'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/open-source" element={<OpenSource />} />
        <Route path="/product/sparkmatcher" element={<SparkMatcher />} />
        <Route path="/product/cloudmatcher" element={<CloudMatcher />} />
        <Route path="/product/consulting" element={<Consulting />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/product-development" element={<ProductDevelopment />} />
        <Route path="/about/research" element={<AboutResearch />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/form" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
