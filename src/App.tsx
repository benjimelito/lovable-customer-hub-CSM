import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ConsultancyServicesTerms from "./pages/ConsultancyServicesTerms";
import DataProcessingAgreement from "./pages/DataProcessingAgreement";
import Definitions from "./pages/Definitions";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductTerms from "./pages/ProductTerms";
import Subprocessors from "./pages/Subprocessors";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/data-processing-agreement"
            element={<DataProcessingAgreement />}
          />
          <Route path="/product-terms" element={<ProductTerms />} />
          <Route
            path="/consultancy-services-terms"
            element={<ConsultancyServicesTerms />}
          />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="/subprocessors" element={<Subprocessors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
