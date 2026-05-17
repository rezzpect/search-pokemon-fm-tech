import { gql } from "@apollo/client";

const GET_POKEMON = gql`
query pokemons($name: String) {
    pokemon(name: $name) {
        id
        number
        name
        classification
        types
        weight{
            minimum
            maximum
        }
        height{
            minimum
            maximum
        }
        resistant
        weaknesses
        attacks {
            fast {
                name
                type
                damage
            }
            special {
                name
                type
                damage
            }
        }
        evolutions{
            name
            image
        }
        image
  }
}
`;

export { GET_POKEMON };