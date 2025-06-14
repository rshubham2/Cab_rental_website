"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Car, MapPin, Plane, Clock } from 'lucide-react'

const bookingSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service type'),
  from: z.string().min(1, 'From location is required'),
  to: z.string().min(1, 'To location is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  passengers: z.string().min(1, 'Number of passengers is required'),
  vehicleType: z.string().min(1, 'Please select a vehicle type'),
  driverLanguage: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required').optional(),
  requirements: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const serviceTypes = [
  { id: 'outstation', name: 'Outstation Trip', icon: Car },
  { id: 'local', name: 'Local Trip', icon: MapPin },
  { id: 'airport', name: 'Airport Transfer', icon: Plane },
  { id: 'hourly', name: 'Hourly Rental', icon: Clock },
]

const vehicleTypes = [
  'Sedan (4 seats)',
  'SUV (7 seats)', 
  'Luxury Car (4 seats)',
  'Tempo Traveller (12+ seats)',
]

const languages = [
  'Hindi',
  'English', 
  'Marathi',
  'Gujarati',
  'Tamil',
  'Telugu',
  'Kannada',
  'Bengali'
]

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  })

  const selectedService = watch('serviceType')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Booking Submitted Successfully!",
          description: "We'll contact you shortly to confirm your booking details.",
        })
        reset()
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Ride
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and quick booking process. We also provide hotel bookings and complete trip planning services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Journey</CardTitle>
              <CardDescription>
                Fill in the details below and we'll get back to you with the best options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Service Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Service Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setValue('serviceType', service.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedService === service.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <service.icon className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm font-medium">{service.name}</div>
                      </button>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Trip Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      From
                    </label>
                    <Input
                      {...register('from')}
                      placeholder="Pickup location"
                      className={errors.from ? 'border-red-500' : ''}
                    />
                    {errors.from && (
                      <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To
                    </label>
                    <Input
                      {...register('to')}
                      placeholder="Destination"
                      className={errors.to ? 'border-red-500' : ''}
                    />
                    {errors.to && (
                      <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
                    )}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <Input
                      type="date"
                      {...register('date')}
                      className={errors.date ? 'border-red-500' : ''}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <Input
                      type="time"
                      {...register('time')}
                      className={errors.time ? 'border-red-500' : ''}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passengers
                    </label>
                    <Select onValueChange={(value) => setValue('passengers', value)}>
                      <SelectTrigger className={errors.passengers ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'passenger' : 'passengers'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.passengers && (
                      <p className="text-red-500 text-sm mt-1">{errors.passengers.message}</p>
                    )}
                  </div>
                </div>

                {/* Vehicle and Language */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <Select onValueChange={(value) => setValue('vehicleType', value)}>
                      <SelectTrigger className={errors.vehicleType ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleTypes.map((vehicle) => (
                          <SelectItem key={vehicle} value={vehicle}>
                            {vehicle}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.vehicleType && (
                      <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Language Preference (Optional)
                    </label>
                    <Select onValueChange={(value) => setValue('driverLanguage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      {...register('name')}
                      placeholder="Your full name"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      {...register('phone')}
                      placeholder="Your phone number"
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      type="email"
                      {...register('email')}
                      placeholder="Your email address"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements (Optional)
                  </label>
                  <Textarea
                    {...register('requirements')}
                    placeholder="Any special requests, hotel booking needs, or trip planning requirements..."
                    rows={4}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We also provide hotel booking and complete trip planning services
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}