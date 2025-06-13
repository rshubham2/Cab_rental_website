import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, insertBookingSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

import {
  Form,
  FormControl,
  FormDescription,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const contactFormSchema = insertContactSchema;
const bookingFormSchema = insertBookingSchema.extend({
  startDate: z.string().min(1, "Start date is required"),
  returnDate: z.string().optional(),
  email: z.string().email("Please enter a valid email address").optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type BookingFormValues = z.infer<typeof bookingFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const bookingForm = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tripType: "outstation",
      from: "",
      to: "",
      startDate: "",
      returnDate: "",
      carType: "",
      contactNumber: "",
      email: "",
      driverLanguage: "",
      additionalRequirements: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been successfully sent. We'll get back to you shortly.",
      });
      contactForm.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message.",
      });
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (values: BookingFormValues) => {
      const response = await apiRequest("POST", "/api/bookings", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted",
        description: "Your booking request has been successfully submitted. We'll contact you shortly.",
      });
      bookingForm.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit booking request.",
      });
    },
  });

  function onContactSubmit(values: ContactFormValues) {
    contactMutation.mutate(values);
  }

  function onBookingSubmit(values: BookingFormValues) {
    bookingMutation.mutate(values);
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Gautham Tours and Travels</title>
        <meta
          name="description"
          content="Contact Gautham Tours and Travels for premium cab services across Maharashtra. Reach us at gauthamnadar123@gmail.com or call us."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-sans font-bold text-3xl md:text-4xl mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're here to assist you with any questions or special requirements. Get in touch or book your ride directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-gray-50 border-none shadow-md h-full">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-sans font-semibold text-2xl mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:9833401900"
                          className="block text-gray-700 hover:text-primary"
                        >
                          +91 9833401900
                        </a>
                        <a
                          href="tel:8850919298"
                          className="block text-gray-700 hover:text-primary"
                        >
                          +91 8850919298
                        </a>
                        <a
                          href="tel:9619455668"
                          className="block text-gray-700 hover:text-primary"
                        >
                          +91 9619455668
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <a
                        href="mailto:gauthamnadar123@gmail.com"
                        className="text-gray-700 hover:text-primary"
                      >
                        gauthamnadar123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Head Office</h3>
                      <p className="text-gray-700">
                        004, 4/B, Matoshree, Maharashtra nagar
                        <br />
                        Mumbai - 400088
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3224708648645!2d72.93836767600082!3d19.04955445280064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c67eb82d84c1%3A0x6403d6c27b46cba!2sMatoshri%20sahakari%20Grah%20Nirman%20Sanstha!5e0!3m2!1sen!2sin!4v1748951980887!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gautham Tours and Travels Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact and Booking Forms */}
          <div>
            <Card className="bg-gray-50 border-none shadow-md">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="contact">Send Message</TabsTrigger>
                    <TabsTrigger value="booking">Quick Booking</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contact" className="mt-6">
                    <h2 className="font-sans font-semibold text-2xl mb-6">
                      Send a Message
                    </h2>
                    <Form {...contactForm}>
                      <form
                        onSubmit={contactForm.handleSubmit(onContactSubmit)}
                        className="space-y-4"
                      >
                        <FormField
                          control={contactForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your full name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter your email address"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your phone number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter message subject"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Write your message here..."
                                  rows={4}
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
                          disabled={contactMutation.isPending}
                        >
                          {contactMutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="booking" className="mt-6">
                    <h2 className="font-sans font-semibold text-2xl mb-6">
                      Quick Booking
                    </h2>
                    <Form {...bookingForm}>
                      <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-4">
                        <FormField
                          control={bookingForm.control}
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
                                  <SelectItem value="outstation">Outstation Trip</SelectItem>
                                  <SelectItem value="local">Local Travel</SelectItem>
                                  <SelectItem value="airport">Airport Transfer</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={bookingForm.control}
                            name="from"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>From</FormLabel>
                                <FormControl>
                                  <Input placeholder="Pickup location" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={bookingForm.control}
                            name="to"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>To</FormLabel>
                                <FormControl>
                                  <Input placeholder="Destination" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={bookingForm.control}
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
                            control={bookingForm.control}
                            name="carType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Car Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Car" />
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
                        </div>

                        <FormField
                          control={bookingForm.control}
                          name="contactNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          disabled={bookingMutation.isPending}
                        >
                          {bookingMutation.isPending ? "Submitting..." : "Book Now"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;