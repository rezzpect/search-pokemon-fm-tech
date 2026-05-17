"use client";

import { Suspense, useState } from "react";
import SearchInput from "@/components/SearchInput/SearchInput";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Loading from "@/components/Loading/Loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import DisplayError from "@/components/Error/DisplayError";

export default function Home() {
  return (
    <div className="w-full p-10 flex flex-col justify-center items-center gap-5">
      <div className="md:w-150 w-[80vw]" >
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>

      <div className='md:w-200 w-screen h-full'>
        <ErrorBoundary errorComponent={DisplayError}>
          <Suspense fallback={<Loading />}>
            <PokemonCard />
          </Suspense>
        </ErrorBoundary>
      </div>

    </div>
  );
}
