// This is a Server Component (no "use client" directive)
import DetailEventPage from "@/app/features/explore/detailevent";
import { getEventBySlug } from "@/hooks/api/events/getEventBySlug";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

// This is a Server Component that fetches data
export default async function Page({ params }: PageProps) {
  const { slug } = params;

  try {
    // Fetch data on the server
    const event = await getEventBySlug(slug);

    // If no event found, show 404
    if (!event) {
      notFound();
    }

    // Pass data to a Client Component
    return (
      <main>
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <p>Loading...</p>
            </div>
          }
        >
          <DetailEventPage event={event} />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Error fetching event:", error);
    notFound();
  }
}
