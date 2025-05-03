"use client";

import { Pagination } from "@/components/ui/pagination";
import { IEvent } from "@/types/events";
import { SearchChangeHandlers, SearchParams } from "@/types/search";
import { useRouter } from "next/navigation";
import ExploreList from "./ExploreList";
import SearchBarHome from "./SearchBar";

interface ExploreFormProps {
  events?: IEvent[];
  loading: boolean;
  error?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  searchParams: SearchParams;
  onSearchChange: SearchChangeHandlers;
  categoryData?: Array<{ id: string; name: string }>;
  locationData?: Array<{ id: string; name: string }>;
  loadingCategories: boolean;
  loadingLocations: boolean;
}

export default function ExploreForm({
  events,
  loading,
  error,
  currentPage,
  totalPages,
  onPageChange,
  searchParams,
  onSearchChange,
  categoryData,
  locationData,
  loadingCategories,
  loadingLocations,
}: ExploreFormProps) {
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="p-8 text-center">
          <p className="mb-4 text-xl text-red-500">Failed to load events</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-yellow-400">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <section className="relative mb-12">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <SearchBarHome />
            </div>
          </div>
        </section>

        {/* Event List Section */}
        <section className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Event List</h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-64 animate-pulse rounded-lg bg-white/50"
                />
              ))}
            </div>
          ) : (
            <ExploreList />
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="mt-12">
            <div className="sticky right-0 bottom-0 left-0 z-10 flex justify-center px-6 py-4">
              <div className="rounded-xl bg-white/80 px-6 py-4 shadow-md backdrop-blur-sm">
                <Pagination
                // currentPage={currentPage}
                // totalPages={totalPages}
                // onPageChange={onPageChange}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
