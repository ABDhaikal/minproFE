"use client"

import React from "react"
import DetailComponent from "./components/detailcomponent"
import { IEvent } from "@/types/events"

interface DetailEventPageProps {
  event: IEvent
}

// Client component that receives the event data
export default function DetailEventPage({ event }: DetailEventPageProps) {
  return (
    <div className="">
      <DetailComponent event={event} />
      {/* <Accesscomponent /> */}
    </div>
  )
}