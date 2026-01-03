import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WasteProvider } from "@/context/WasteContext";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import ProblemOverview from "./pages/ProblemOverview";
import ProjectSolution from "./pages/ProjectSolution";
import UserInput from "./pages/UserInput";
import LocationMap from "./pages/LocationMap";
import WasteSeverity from "./pages/WasteSeverity";
import HealthImpact from "./pages/HealthImpact";
import ClimateImpact from "./pages/ClimateImpact";
import VisualGallery from "./pages/VisualGallery";
import Solutions from "./pages/Solutions";
import Awareness from "./pages/Awareness";
import SocialImpact from "./pages/SocialImpact";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WasteProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/problem" element={<ProblemOverview />} />
              <Route path="/solution" element={<ProjectSolution />} />
              <Route path="/input" element={<UserInput />} />
              <Route path="/map" element={<LocationMap />} />
              <Route path="/severity" element={<WasteSeverity />} />
              <Route path="/health" element={<HealthImpact />} />
              <Route path="/climate" element={<ClimateImpact />} />
              <Route path="/gallery" element={<VisualGallery />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/awareness" element={<Awareness />} />
              <Route path="/social" element={<SocialImpact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </WasteProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
