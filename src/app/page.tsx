//import { getQueryClient, trpc } from "@/trpc/server";
//import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

//import { Suspense } from "react";

"use client";

import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";


export default function Home() {
  //const queryClient = getQueryClient();
  //void queryClient.prefetchQuery(trpc.hii.queryOptions({text: " pre fetched hello"}))
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return (
    <div>
       <Button onClick={() => invoke.mutate({ text: "haha"})}>press</Button>
    </div>
  );
}
