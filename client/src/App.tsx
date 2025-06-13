import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BookingForm from "@/pages/BookingForm";
import ContactPage from "@/pages/ContactPage";
import ServicesPage from "@/pages/ServicesPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FleetPage from "@/pages/FleetPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking" component={BookingForm} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/fleet" component={FleetPage} />
      <Route path="/fleet/:vehicleType" component={FleetPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProvider>
          <Header />
          <Router />
          <Footer />
          <BackToTop />
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;