import { HotelCard } from "@/components/hotel-card";
import { RecentOnboards } from "@/components/recent-onboards";
import { LocationFilter } from "@/components/location-filter";
import { Button } from "@/components/ui/button";
import { Plus, LogIn } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary">EnerzyFlow</h1>
            
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Employee Login
              </Button>
            </Link>
            <Link href="/onboard">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                List Your Property
              </Button>
            </Link>
          </div>
        </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LocationFilter />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <HotelCard
                name="Sunset Bay Resort"
                location="Miami Beach, FL"
                image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800"
                rooms={45}
                rating={4.8}
                category="resort"
              />
              <HotelCard
                name="Mountain View Lodge"
                location="Aspen, CO"
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                rooms={30}
                rating={4.6}
                category="lodge"
              />
              <HotelCard
                name="Urban Oasis Hotel"
                location="New York, NY"
                image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800"
                rooms={120}
                rating={4.5}
                category="hotel"
              />
              <HotelCard
                name="Seaside Inn"
                location="San Diego, CA"
                image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800"
                rooms={60}
                rating={4.7}
                category="boutique"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <RecentOnboards />
          </div>
        </div> 
      </div>
    </main>
  );
}