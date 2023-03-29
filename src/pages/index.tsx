
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
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useIsomorphicLayoutEffect } from '../../helpers/isomorphicEffect'

gsap.registerPlugin(ScrollTrigger);



//   export function Birds() {
//     const { loading, error, data } = useQuery(gql`
//         query Birds {
//           birds {
//               data {
//               id
//               attributes {
//                   breed
//                   country
//               }
//           }  
//           }
//       }
//     `);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
//     if (!data) return null;
//     interface Bird {
//       id: number;
//       attributes: {
//         breed: string;
//         country: string;
//       }
//     }

//     return (
//       <ul>
//         {data.birds.data.map((bird: Bird) => (
//           <li key={bird.id}>{bird.attributes.country}</li>
//         ))}
//       </ul>
//     );
// }

// export default function Scroll() {
//   const main = useRef();

//   useIsomorphicLayoutEffect(() => {
//     const ctx = gsap.context((self: gsap.core.Animation) => {
//       const boxes = self.selector('.box');
//       boxes.forEach((box) => {
//         gsap.to(box, {
//           x: 300,
//           scrollTrigger: {
//             trigger: box,
//             start: 'bottom bottom',
//             end: 'top 20%',
//             scrub: true,
//           },
//         });
//       });
//     }, main);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div>
//       <header className="header">
//         <a
//           className="brand"
//           href="https://greensock.com/scrolltrigger"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             className="greensock-icon"
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
//             width="200"
//             height="64"
//           />
//         </a>
//       </header>
//       <section className="section flex-center column blue">
//         <h1>Basic ScrollTrigger with React</h1>
//         <h2>Scroll down to see the magic happen!!</h2>
//       </section>
//       <div className="section flex-center column" ref={main}>
//         <h1>This boxes animates as you scroll!</h1>
//         <div className="box">box</div>
//         <div className="box">box</div>
//         <div className="box">box</div>
//       </div>
//       <section className="section flex-center orange column">
//         <h1>The End!</h1>
//         <h2>
//           For more information visit:{' '}
//           <a
//             href="https://greensock.com/scrolltrigger/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             greensock.com/scrolltrigger/
//           </a>
//         </h2>
//       </section>
//     </div>
//   );
// }




 import Header from '../../components/Header/Header'
 import Hero from "../../components/Hero/Hero"
 import WhyPlayfulMinds from "../../components/WhyPlayfulMinds/WhyPlayfulMinds"
 import HowItWorks from "../../components/HowItWorks/HowItWorks"
export default function example () {
  return (
    <>
    <Header />
    <Hero />
    {/* <WhyPlayfulMinds />
    <HowItWorks /> */}
    </>
  
  )
}