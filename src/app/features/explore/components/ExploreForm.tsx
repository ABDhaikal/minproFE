import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Ticket } from "lucide-react";
import Image from "next/image";
import { SearchBar } from "./SearchBar";
import ExploreList from "./ExploreList";

export default function ExploreForm() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-yellow-400">
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <section className="relative px-4 py-20 text-black sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 -mt-16 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Event List Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">Event List</h2>

          <div className="">
            <ExploreList />
          </div>
        </div>

        {/* Pagination */}
        <section className="mt-12">
          <div
            className="sticky right-0 bottom-0 left-0 flex justify-center px-6 py-4"
            style={{ zIndex: 10 }}
          >
            <div className="rounded-xl bg-white/80 px-6 py-4 shadow-md backdrop-blur-sm">
              <Pagination  />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
