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
// export const generateMetaData = async ({ params }: {params: Promise<{slug: string}>}) => {
//   const { slug } = await params;
//   const event = await getEventBySlug(slug);

//   return {
//     title: event.name,
//     description: event.description,
//     openGraph: {
//       title: event.name,
//       description: event.description,
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/explore/${slug}`,
//       images: [
//         {
//           url: event.image,
//           width: 800,
//           height: 600,
//         },
//       ],
//     },
//   };
// }

const EventDetaiPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
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
        <DetailEventPage slug={slug} />
      </Suspense>
    </main>
  );
};

export default EventDetaiPage;
