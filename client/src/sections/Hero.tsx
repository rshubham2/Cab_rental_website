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
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40">
        <img 
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080" 
          alt="Scenic Indian highway" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Your Journey, Our Responsibility</h1>
            <p className="text-lg md:text-xl mb-8">Experience premium chauffeur-driven cab services across 2000+ cities in India. Travel with comfort, flexibility, and peace of mind.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <span className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition shadow-lg inline-block cursor-pointer">
                  Book Your Cab Now
                </span>
              </Link>
              <a href="tel:9045450000" className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg transition shadow-lg flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
          
          {/* Booking Form Card */}
          <Card className="bg-white rounded-xl shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-center">Book Your Ride</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="tripType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trip Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
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
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="from"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>From</FormLabel>
                          <FormControl>
                            <Input placeholder="Pickup City" {...field} />
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
                          <FormLabel>To</FormLabel>
                          <FormControl>
                            <Input placeholder="Destination City" {...field} />
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
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
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
                          <FormLabel>Return Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Plan My Trip
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
