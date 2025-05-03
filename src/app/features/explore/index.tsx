"use client";

import useGetCategory from "@/hooks/api/events/useGetCategory";
import useGetEvents from "@/hooks/api/events/useGetEvents";
import useGetUserLocEvents from "@/hooks/api/events/useGetUserLocEvents";
import { PaginationMeta } from "@/types/pagination";
import { parseAsInteger, parseAsIsoDate, useQueryState } from "nuqs";
import React, { FC } from "react";
import { useDebounce } from "use-debounce";
import ExploreForm from "./components/ExploreForm";

interface ExplorePageProps {
  initialPage?: number;
}

const ExplorePage: FC<ExplorePageProps> = ({ initialPage = 1 }) => {
  // Query state management with better typing
  const [searchParams, setSearchParams] = useQueryState<string>("search", {
    defaultValue: "",
    parse: (value) => value || "",
  });

  const [category, setCategory] = useQueryState<string>("category", {
    defaultValue: "",
    parse: (value) => value || "",
  });

  const [location, setLocation] = useQueryState<string>("locations", {
    defaultValue: "",
    parse: (value) => value || "",
  });

  const [date, setDate] = useQueryState("date", parseAsIsoDate);
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(initialPage),
  );

  // Data fetching with error boundaries
  const {
    data: categoryData,
    isPending: loadingCategories,
    error: categoryError,
  } = useGetCategory();

  const {
    data: locationData,
    isPending: loadingLocations,
    error: locationError,
  } = useGetUserLocEvents();

  // Debounced search for better performance
  const [debouncedSearch] = useDebounce(searchParams, 500);

  // Events data fetching with proper error handling
  const {
    data: eventData,
    isPending: loadingEvents,
    error: eventError,
  } = useGetEvents({
    search: debouncedSearch,
    category,
    location,
    date,
    page,
  });

  // Calculate total pages from event data
  const meta = eventData?.meta as PaginationMeta;
  const totalPages = meta?.totalPages ?? 1;

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show error state if any critical data failed to load
  if (categoryError || locationError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="p-8 text-center">
          <p className="mb-4 text-xl text-red-500">
            Failed to load necessary data
          </p>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ExploreForm
        events={eventData?.data}
        loading={loadingEvents}
        error={eventError?.message}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        searchParams={{
          search: searchParams,
          // category: category || '',
          location,
          date: date || null,
        }}
        onSearchChange={{
          setSearchParams,
          setCategory,
          setLocation,
          setDate,
        }}
        // categoryData={categoryData?.data?.map((category) => ({ id: category, name: category }))}
        // locationData={locationData?.data?.map((location) => ({ id: location, name: location }))}
        loadingCategories={loadingCategories}
        loadingLocations={loadingLocations}
      />
    </main>
  );
};

export default ExplorePage;
