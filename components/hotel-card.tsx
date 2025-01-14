import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Hotel } from "lucide-react";
import Image from "next/image";

interface HotelCardProps {
  name: string;
  location: string;
  image: string;
  rooms: number;
  rating: number;
  category?: string;
}

export function HotelCard({ name, location, image, rooms, rating, category }: HotelCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            {category && (
              <Badge variant="secondary" className="mt-1">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Hotel className="h-4 w-4" />
          <span className="text-sm">{rooms} Rooms</span>
        </div>
      </CardContent>
    </Card>
  );
}