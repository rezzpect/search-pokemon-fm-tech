'use client';

import { POKEMON } from "@/types/pokemondata";

export default function PokemonStat({ pokemon }: { pokemon: POKEMON | null }) {
    if (!pokemon) {
        return null;
    }

    return (
        <div className="w-full flex flex-col gap-5 p-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <header className="text-lg font-bold">Weight</header>
                    <p className="p-2 border border-black rounded-lg">{pokemon.weight.minimum} ~ {pokemon.weight.maximum}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <header className="text-lg font-bold">Height</header>
                    <p className="p-2 border border-black rounded-lg">{pokemon.height.minimum} ~ {pokemon.height.maximum}</p>
                </div>

                <div className="flex flex-col">
                    <header className="text-lg font-bold">Resistant</header>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        {pokemon.resistant.map((res: string, index: number) => (
                            <span key={`res-${index}`} className="px-2 rounded-full w-fit h-fit text-white bg-green-800">{res}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <header className="text-lg font-bold">Weaknesses</header>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        {pokemon.weaknesses.map((weak: string, index: number) => (
                            <span key={`weak-${index}`} className="px-2 rounded-full w-fit h-fit text-white bg-red-800">{weak}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}