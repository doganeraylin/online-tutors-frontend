
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client';
import type { GetStaticProps } from 'next';
import { addApolloState, initializeApollo } from  '../../apollo/index'
import queryBirds from './queryBirds.graphql'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function Birds() {
    const { loading, error, data } = useQuery(gql`
        query Birds {
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
    `);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    interface Bird {
      id: number;
      attributes: {
        breed: string;
        country: string;
      }
    }

    return (
      <ul>
        {data.birds.data.map((bird: Bird) => (
          <li key={bird.id}>{bird.attributes.country}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>
        <h1>henlo</h1>
        <Birds />
      </div>
    </>
  )
}

