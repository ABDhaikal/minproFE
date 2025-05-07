"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Search } from "lucide-react";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface SearchBarHomeProps{
  searchParams: string;
  onSearch: (searchParams: string) => void;
  categoryParams: string;
  loadingCategories: boolean;
  onCategoryChange: (category: string) => void;
  loadingLocations: boolean;
  locationParams: string;
  onLocationChange: (location: string) => void;
  dateParams: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  locationData: string[];
  categoryData: string[];
  title?: string;
  className?: string;
}

const SearchBarHome: FC<SearchBarHomeProps> = ({
  searchParams,
  onSearch,
  categoryParams,
  loadingCategories,
  onCategoryChange,
  locationParams,
  loadingLocations,
  onLocationChange,
  dateParams,
  onDateChange,
  locationData,
  categoryData,
  className,
  title,
}) => {
  return (
    <div className={cn("flex flex-col gap-3 md:flex-row", className)}>
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          type="text"
          placeholder="Search events..."
          className="pl-10"
          value={searchParams}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>

      {/* Location Dropdown */}
      <div className="relative md:w-[200px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative flex items-center justify-center">
              <MapPin className="absolute left-0 translate-x-[10%] translate-y-[0%]" />
              <Button className="grow" variant="outline">
                {locationParams ? locationParams : "Select a location"}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup>
              {loadingLocations
                ? "Loading locations..."
                : locationData.map((loc) => (
                    <DropdownMenuRadioItem
                      onClick={() => onLocationChange(loc)}
                      key={loc}
                      value={loc}
                    >
                      {loc}
                    </DropdownMenuRadioItem>
                  ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal md:w-[200px]",
              !dateParams && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateParams ? format(dateParams, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={dateParams} onSelect={onDateChange} required />
        </PopoverContent>
      </Popover>

      {/* Category Dropdown */}
      <div className="relative md:w-[200px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="grow">
              {categoryParams ? categoryParams : "Select a category"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup>
              {loadingCategories
                ? "Loading categories..."
                : categoryData.map((cat) => (
                    <DropdownMenuRadioItem
                      onClick={() => onCategoryChange(cat)}
                      key={cat}
                      value={cat}
                    >
                      {cat}
                    </DropdownMenuRadioItem>
                  ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Button */}
      <Link
        href={`/explore?search=${searchParams}${locationParams ? `&location=${locationParams}` : ""}${dateParams ? `&date=${dateParams.toISOString()}` : ""}${categoryParams ? `&category=${categoryParams}` : ""}`}
      >
        <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
      </Link>
    </div>
  );
};

export function SearchBar() {
  const [searchParams, setSearchParams] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [date, setDate] = React.useState<Date | undefined>();
  const [category, setCategory] = React.useState<string>("");
  const [loadingLocations, setLoadingLocations] = useState(true);
  const [locations, setLocations] = useState<string[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axiosInstance.get("/events/locations");
        setLocations(data.data);
        setLoadingLocations(false);
      } catch (error) {
        setLoadingLocations(true);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/events/categories");
        setCategories(data.data);
        setLoadingCategories(false);
      } catch (error) {
        setLoadingCategories(true);
      }
    };
    fetchCategories();
  }, []);

  return (
    <SearchBarHome
      searchParams={searchParams}
      onSearch={setSearchParams}
      categoryParams={category}
      loadingCategories={loadingCategories}
      onCategoryChange={setCategory}
      locationParams={location}
      loadingLocations={loadingLocations}
      onLocationChange={setLocation}
      dateParams={date}
      onDateChange={setDate}
      locationData={locations}
      categoryData={categories}
    />
  );
}