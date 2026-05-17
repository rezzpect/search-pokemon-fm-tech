import { POKEMON } from "@/types/pokemondata";
import Image from "next/image";
import Link from "next/link";

export default function PokemonEvolution({ pokemon }: { pokemon: POKEMON | null}) {
    if (!pokemon) {
        return null;
    }

    return (
        <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-2 p-5">
            {
                pokemon.evolutions && pokemon.evolutions.map((evo: { name: string, image: string }, index: number) => (
                    <Link href={`/?name=${evo.name}`} key={`evo-${index}`} className="flex flex-col rounded-lg p-2 items-center gap-2 hover:text-green-500 hover:shadow-sm">
                        <Image
                            src={evo.image}
                            alt={evo.name}
                            width={100}
                            height={100}
                            className="h-25 w-25 border-green-500 border rounded-full"
                        />
                        <p className="text-lg font-bold">{evo.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}