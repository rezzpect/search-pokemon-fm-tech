import { POKEMON } from "@/types/pokemondata";

export default function PokemonAttack({ pokemon }: { pokemon: POKEMON | null }) {
    if (!pokemon) {
        return null;
    }

    return (
        <div className="w-full flex flex-col gap-5 p-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <header className="text-lg font-bold">Fast Attacks</header>
                    {
                        pokemon.attacks.fast.map((attack: { name: string, type: string, damage: number }, index: number) => (
                            <div key={`attack-${index}`} className="p-2 border border-black rounded-lg">
                                <p className="font-bold">{attack.name}</p>
                                <p className="text-sm text-gray-600">Type: {attack.type}</p>
                                <p className="text-lg font-bold">Damage: {attack.damage}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <header className="text-lg font-bold">Special Attacks</header>
                    {
                        pokemon.attacks.special.map((attack: { name: string, type: string, damage: number }, index: number) => (
                            <div key={`attack-${index}`} className="p-2 border border-black rounded-lg">
                                <p className="font-bold">{attack.name}</p>
                                <p className="text-sm text-gray-600">Type: {attack.type}</p>
                                <p className="text-lg font-bold">Damage: {attack.damage}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}