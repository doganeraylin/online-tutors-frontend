import { gql } from "@apollo/client"

const birdList = gql `
    query {
        birds {
            data {
            id
            attributes {
                breed
                country
            }
        }  
        }
   
    }
`

export { birdList }