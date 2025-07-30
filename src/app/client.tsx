"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function Client() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.hi.queryOptions({text: "hhhhh"}))
    return <div>{JSON.stringify(data)}</div>
}