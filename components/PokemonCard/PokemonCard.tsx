'use client';

import { GET_POKEMON } from "@/graphql/queries";
import { skipToken, useSuspenseQuery } from "@apollo/client/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { QUERY_RESULT } from "@/types/pokemondata";
import PokemonStat from "../PokemonStat/PokemonStat";
import PokemonEvolution from "../PokemonEvolution/PokemonEvolution";
import PokemonAttack from "../PokemonAttack/PokemonAttack";

const views = ["Stats", "Evolutions", "Attacks"];

export default function PokemonCard() {
    const [view, setView] = useState<string>("Stats");
    const searchParams = useSearchParams();
    const search = searchParams.get("name") || '';

    const { data } = useSuspenseQuery<QUERY_RESULT>(GET_POKEMON, search ? {
        variables: { name: search }
    } : skipToken);

    const handleChangeView = (e: React.MouseEvent<HTMLButtonElement>) => {
        setView(e.currentTarget.value);
    }

    return (
        <div className='w-full h-full rounded-lg overflow-hidden shadow-sm'>
            {data?.pokemon ? (
                <>
                    <div className="flex p-10 bg-green-200 text-green-800 items-center gap-5">
                        <Image
                            className="rounded-full border-4 h-50 w-50 border-green-500"
                            src={data?.pokemon?.image ?? ''}
                            alt={data?.pokemon?.name ?? 'Pokemon Image'}
                            width={200}
                            height={200}
                        />
                        <div className="flex flex-col ">
                            <header className="text-4xl font-bold">{data?.pokemon?.name}</header>
                            <header className="text-md font-semibold">{data?.pokemon?.classification}</header>
                            <div className="mt-5 flex gap-1">
                                {
                                    data?.pokemon?.types.map((type: string, index: number) => (
                                        <span key={`type-${index}`} className="px-2 rounded-full w-fit h-fit text-white bg-green-800">{type}</span>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-5 w-full h-12">
                        {views.map((v) => (
                            <button key={v} onClick={handleChangeView} value={v}
                                className={`h-full w-full text-gray-400 font-bold ${view === v ? 'border-b-4 border-green-500 text-green-800' : ''}`}>
                                {v}
                            </button>
                        ))}
                    </div>
                    <div className="text-wrap">
                        {view === "Stats" && <PokemonStat pokemon={data?.pokemon ?? null} />}
                        {view === "Evolutions" && <div><PokemonEvolution pokemon={data?.pokemon ?? null} /></div>}
                        {view === "Attacks" && <div><PokemonAttack pokemon={data?.pokemon ?? null} /></div>}
                    </div>
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center p-10">
                    <p className="text-2xl font-bold text-green-500">{search ? 'No Pokémon found.' : 'Search for a Pokémon to view its details.'}</p>
                </div>
            )}
        </div>
    )
}