"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function Client() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.hii.queryOptions({text: " pre fetched hello"}))
    return <div>{JSON.stringify(data)}</div>
}