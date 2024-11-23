import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/faq";
import Contact, { contactAction } from "./pages/help/contact";
import NotFound from "./pages/404Error";
import CareerDetails, { careerDetailsLoader } from "./pages/career/CareerDetails";
import CareerError from "./pages/career/CareerError";


import RootLayout from "./layouts/RootLayouts";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";
import Career, { careerLoader } from "./pages/career/Career";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="career" element={<CareerLayout />} errorElement={<CareerError />}>
        <Route 
          index 
          element={<Career />} 
          loader={careerLoader}
        />
      
      <Route 
        path=":id" 
        element={<CareerDetails />} 
        loader={careerDetailsLoader} 
      />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={ router } />
  );
}

export default App
