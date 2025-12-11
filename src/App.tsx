import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CustomerProvider, RewardsProvider, ProgressProvider } from "./contexts";
import CustomerHubHome from "./pages/CustomerHubHome";
import Home from "./pages/Home";
import ComponentShowcase from "./pages/ComponentShowcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder pages for hub sections (to be implemented in later phases)
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-muted-foreground">Coming soon in Phase 2+</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CustomerProvider>
      <RewardsProvider>
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Customer Hub Routes */}
                <Route path="/" element={<CustomerHubHome />} />
                <Route path="/demo" element={<PlaceholderPage title="Watch Demo" />} />
                <Route path="/usage" element={<PlaceholderPage title="Usage Dashboard" />} />
                <Route path="/process" element={<PlaceholderPage title="Sales Process" />} />
                <Route path="/research" element={<PlaceholderPage title="AI Research" />} />
                <Route path="/social" element={<PlaceholderPage title="Social Proof" />} />
                <Route path="/actions" element={<PlaceholderPage title="Action Items" />} />
                <Route path="/faq" element={<PlaceholderPage title="FAQ & Chat" />} />
                <Route path="/swag" element={<PlaceholderPage title="Swag Redemption" />} />
                
                {/* Utility Routes */}
                <Route path="/original" element={<Home />} />
                <Route path="/components" element={<ComponentShowcase />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProgressProvider>
      </RewardsProvider>
    </CustomerProvider>
  </QueryClientProvider>
);

export default App;
