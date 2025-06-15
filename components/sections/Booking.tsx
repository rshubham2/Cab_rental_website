'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Route, MapPin, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const bookingFormSchema = z.object({
  from: z.string().min(1, 'From location is required'),
  to: z.string().min(1, 'Destination is required'),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  carType: z.string().min(1, 'Car type is required'),
  contactNumber: z.string().min(10, 'Valid contact number is required'),
  email: z.string().email('Please enter a valid email address').optional(),
  driverLanguage: z.string().optional(),
  additionalRequirements: z.string().optional(),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

const Booking = () => {
  const [activeTab, setActiveTab] = useState('outstation')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      from: '',
      to: '',
      pickupDate: '',
      pickupTime: '',
      carType: '',
      contactNumber: '',
      email: '',
      driverLanguage: '',
      additionalRequirements: '',
    },
  })

  async function onSubmit(values: BookingFormValues) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          tripType: activeTab,
        }),
      })

      if (response.ok) {
        alert('Booking submitted successfully! We will contact you shortly.')
        form.reset()
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      alert('Failed to submit booking request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const bookingTabs = [
    { id: 'outstation', label: 'Outstation', icon: <Route className="text-2xl mb-2" /> },
    { id: 'local', label: 'Local', icon: <MapPin className="text-2xl mb-2" /> },
    { id: 'airport', label: 'Airport', icon: <Plane className="text-2xl mb-2" /> },
  ]

  return (
    <section id="booking" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Book Your Ride</h2>
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
                    ? 'bg-primary text-white' 
                    : 'bg-gray-50 text-foreground hover:bg-primary hover:text-white'
                } rounded-lg p-4 text-center cursor-pointer transition`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <h3 className="font-medium">{tab.label}</h3>
              </div>
            ))}
          </div>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="from">From</Label>
                <Input 
                  id="from"
                  placeholder="Enter pickup location" 
                  {...form.register('from')}
                />
                {form.formState.errors.from && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.from.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="to">To</Label>
                <Input 
                  id="to"
                  placeholder="Enter destination" 
                  {...form.register('to')}
                />
                {form.formState.errors.to && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.to.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="pickupDate">Pickup Date</Label>
                <Input 
                  id="pickupDate"
                  type="date" 
                  {...form.register('pickupDate')}
                />
                {form.formState.errors.pickupDate && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.pickupDate.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="pickupTime">Pickup Time</Label>
                <Input 
                  id="pickupTime"
                  type="time" 
                  {...form.register('pickupTime')}
                />
                {form.formState.errors.pickupTime && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.pickupTime.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="carType">Car Type</Label>
                <Select onValueChange={(value) => form.setValue('carType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Car Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="tempo">Tempo Traveller</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.carType && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.carType.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input 
                  id="contactNumber"
                  placeholder="Enter your phone number" 
                  {...form.register('contactNumber')}
                />
                {form.formState.errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.contactNumber.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email for confirmation" 
                  {...form.register('email')}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="driverLanguage">Preferred Driver Language (Optional)</Label>
                <Select onValueChange={(value) => form.setValue('driverLanguage', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="marathi">Marathi</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="additionalRequirements">Additional Requirements (Optional)</Label>
              <Textarea 
                id="additionalRequirements"
                placeholder="Any special requests, hotel booking needs, or trip planning requirements..." 
                rows={3} 
                className="resize-none"
                {...form.register('additionalRequirements')}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Book Instantly'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking