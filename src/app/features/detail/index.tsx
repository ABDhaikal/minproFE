"use client"
import React from "react";
import { useRouter } from 'next/router';  // Import useRouter
import EventDetailForm from "./components/EventDetailForm";

const EventDetailPage = () => {
  const router = useRouter();  // Inisialisasi useRouter untuk mengambil slug dari URL
  const { slug } = router.query;  // Ambil slug dari query parameter URL

  // Cek jika slug belum tersedia, bisa mengembalikan loading atau pesan error
  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Panggil EventDetailForm dengan slug sebagai props */}
      <EventDetailForm slug={slug as string} />
    </div>
  );
};

export default EventDetailPage;
