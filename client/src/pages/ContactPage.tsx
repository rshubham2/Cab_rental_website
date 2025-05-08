import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

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
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = insertContactSchema;

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been successfully sent. We'll get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message.",
      });
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - RoadTrip India</title>
        <meta name="description" content="Contact RoadTrip India for chauffeur-driven cab services across 2000+ cities in India. Reach us at +91 9045450000." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-sans font-bold text-3xl md:text-4xl mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">We're here to assist you with any questions or special requirements.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gray-50 border-none shadow-md h-full">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-sans font-semibold text-2xl mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <a href="tel:9045450000" className="text-gray-700 hover:text-primary">+91 9045450000</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <a href="mailto:info@roadtripindia.com" className="text-gray-700 hover:text-primary">info@roadtripindia.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Head Office</h3>
                      <p className="text-gray-700">123 Transport Tower, MG Road<br />New Delhi - 110001</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.971371514046!2d77.22510591485928!3d28.632343082418512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1625582926619!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RoadTrip India Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gray-50 border-none shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-sans font-semibold text-2xl mb-6">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
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
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
