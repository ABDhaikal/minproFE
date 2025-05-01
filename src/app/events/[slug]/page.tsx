import { Badge } from "@/components/ui/badge";
import { useGetEvent } from "@/hooks/api/events/getEvent";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetaData({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const desc = `Just read it ${slug}`;

  return {
    title: slug,
    description: desc,
  };
}

const DetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const event = await useGetEvent(slug);

  if (!event) {
    notFound();
  }
  return (
    <div className="container py-10">
      <div className="mb-8">
        <Badge>{event.category}</Badge>
        <h1 className="mb-4 text-3xl font-bold">{event.name}</h1>
      </div>

      <div className="flex-items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.name || "Event Thumbnail"}
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
