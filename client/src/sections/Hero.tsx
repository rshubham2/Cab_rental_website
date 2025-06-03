import { Link } from "wouter";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quickBookingSchema = z.object({
  tripType: z.string().min(1, "Trip type is required"),
  from: z.string().min(1, "From location is required"),
  to: z.string().min(1, "Destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  returnDate: z.string().optional(),
});

type QuickBookingValues = z.infer<typeof quickBookingSchema>;

const Hero = () => {
  const { toast } = useToast();

  const form = useForm<QuickBookingValues>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      tripType: "outstation-roundtrip",
      from: "",
      to: "",
      startDate: "",
      returnDate: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: QuickBookingValues) => {
      const response = await apiRequest("POST", "/api/bookings", {
        ...values,
        carType: "sedan", // Default value
        contactNumber: "", // Will be filled in the next step
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Started",
        description: "Please complete your booking with additional details.",
      });
      // Redirect to the full booking form
      window.location.href = "/booking";
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to start booking process.",
      });
    },
  });

  function onSubmit(values: QuickBookingValues) {
    // For the hero section, we'll just redirect to the booking page
    // instead of submitting the partial data
    window.location.href = "/booking";
  }

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay and Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080" 
          alt="Scenic Indian highway" 
          className="w-full h-full object-cover scale-in" 
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Content */}
          <div className="text-white fade-in">
            <div className="relative inline-flex mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">Maharashtra Service</span>
            </div>
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Your Journey, 
              <span className="block text-secondary">Our Responsibility</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Experience premium chauffeur-driven cab services across 2000+ cities in India. Travel with comfort, flexibility, and peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <span className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition shadow-lg inline-flex items-center cursor-pointer btn-hover-effect">
                  <span>Book Your Cab Now</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              <a href="tel:9045450000" className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-lg transition shadow-lg flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2 mr-4">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/40.jpg" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Customer" />
              </div>
              <div>
                <p className="text-white font-medium">Trusted by 10,000+ customers</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-white">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form Card */}
          <Card className="bg-white rounded-xl shadow-2xl border-0 scale-in">
            <CardHeader className="pb-2 border-b">
              <CardTitle className="text-2xl text-center text-primary">
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                  Book Your Ride
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="bg-primary/5 p-4 rounded-lg mb-2">
                    <FormField
                      control={form.control}
                      name="tripType"
                      render={({ field }) => (
                        <FormItem className="mb-0">
                          <FormLabel className="text-primary font-medium">Trip Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-0 bg-white shadow-sm">
                                <SelectValue placeholder="Select Trip Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="outstation-roundtrip">Outstation Round Trip</SelectItem>
                              <SelectItem value="outstation-oneway">Outstation One-Way</SelectItem>
                              <SelectItem value="local">Local City Travel</SelectItem>
                              <SelectItem value="airport-pickup">Airport Pickup</SelectItem>
                              <SelectItem value="airport-drop">Airport Drop</SelectItem>
                              <SelectItem value="rental">Hourly/Daily Rental</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="from"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium flex items-center">
                            <svg className="w-4 h-4 mr-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="8" strokeWidth="2" />
                              <circle cx="12" cy="12" r="3" strokeWidth="2" />
                            </svg>
                            From
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter pickup location" 
                              {...field} 
                              className="border-0 shadow-sm input-focus-effect"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="to"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium flex items-center">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" strokeWidth="2" />
                              <circle cx="12" cy="10" r="3" strokeWidth="2" />
                            </svg>
                            To
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter destination" 
                              {...field} 
                              className="border-0 shadow-sm input-focus-effect"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium flex items-center">
                            <svg className="w-4 h-4 mr-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                            </svg>
                            Start Date
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field} 
                              className="border-0 shadow-sm input-focus-effect"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="returnDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium flex items-center">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                            </svg>
                            Return Date
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field} 
                              className="border-0 shadow-sm input-focus-effect"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 btn-hover-effect"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    Plan My Trip
                  </Button>
                </form>
              </Form>
              
              <div className="flex items-center justify-center mt-6 border-t pt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>Secure booking, instant confirmation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
