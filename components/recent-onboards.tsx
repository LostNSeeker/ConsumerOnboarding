import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const recentHotels = [
  {
    id: 1,
    name: "ITC Grand Chola",
    location: "Chennai, Tamil Nadu",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
  },
  {
    id: 2,
    name: "Rambagh Palace",
    location: "Jaipur, Rajasthan",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
  },
  {
    id: 3,
    name: "The Oberoi Amarvilas",
    location: "Agra, Uttar Pradesh",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800",
  },
];

export function RecentOnboards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Onboards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentHotels.map((hotel) => (
            <div key={hotel.id} className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{hotel.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{hotel.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}