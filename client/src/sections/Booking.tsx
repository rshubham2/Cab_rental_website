import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Route, MapPin, Plane, ArrowRight } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingFormSchema = z.object({
  from: z.string().min(1, "From location is required"),
  to: z.string().min(1, "Destination is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  carType: z.string().min(1, "Car type is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  additionalRequirements: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const Booking = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("outstation");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      from: "",
      to: "",
      pickupDate: "",
      pickupTime: "",
      carType: "",
      contactNumber: "",
      additionalRequirements: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: BookingFormValues) => {
      const response = await apiRequest("POST", "/api/bookings", {
        tripType: activeTab,
        from: values.from,
        to: values.to,
        startDate: values.pickupDate,
        carType: values.carType,
        contactNumber: values.contactNumber,
        additionalRequirements: values.additionalRequirements,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Successful",
        description: "Your booking request has been submitted successfully. We will contact you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: error instanceof Error ? error.message : "An error occurred while submitting your booking.",
      });
    },
  });

  function onSubmit(values: BookingFormValues) {
    mutation.mutate(values);
  }

  const bookingTabs = [
    { id: "outstation", label: "Outstation", icon: <Route className="text-2xl mb-2" /> },
    { id: "local", label: "Local", icon: <MapPin className="text-2xl mb-2" /> },
    { id: "airport", label: "Airport", icon: <Plane className="text-2xl mb-2" /> },
  ];

  return (
    <section id="booking" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Book Your Ride</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Simple and quick booking process to start your journey with us.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {bookingTabs.map((tab) => (
              <div
                key={tab.id}
                className={`${
                  activeTab === tab.id 
                    ? "bg-primary text-white" 
                    : "bg-gray-50 text-foreground hover:bg-primary hover:text-white"
                } rounded-lg p-4 text-center cursor-pointer transition`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <h3 className="font-sans font-medium">{tab.label}</h3>
              </div>
            ))}
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter pickup location" {...field} />
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
                        <Input placeholder="Enter destination" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="pickupTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="carType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Car Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                          <SelectItem value="tempo">Tempo Traveller</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="additionalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Requirements (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any special requests or requirements..." 
                        rows={3} 
                        className="resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Processing..." : "Book Instantly"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
