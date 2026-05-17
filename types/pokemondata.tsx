export type POKEMON = {
    number: string,
    name: string,
    weight: {
        minimum: string,
        maximum: string
    },
    height: {
        minimum: string,
        maximum: string
    },
    classification: string,
    types: string[],
    resistant: string[],
    attacks: {
        fast:
        {
            name: string,
            type: string,
            damage: number
        }[]
        ,
        special:
        {
            name: string,
            type: string,
            damage: number
        }[]
    },
    weaknesses: string[],
    evolutions: {
        name: string,
        image: string
    }[],
    image:string,
}

export type QUERY_RESULT = {
    pokemon: POKEMON | null,
}