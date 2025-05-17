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

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/software" element={<Software />} />
        <Route path="/data" element={<Data />} />
        <Route path="/research" element={<Research />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/lessonslearned" element={<LessonsLearned />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
