import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-6 text-white">Ready to Start Your Journey?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Experience the comfort and flexibility of premium cab services across India. Book your ride today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="#booking">
              Book Your Cab Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <a href="tel:9833401900">
              <Phone className="h-4 w-4 mr-2" />
              Call 9833401900
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA