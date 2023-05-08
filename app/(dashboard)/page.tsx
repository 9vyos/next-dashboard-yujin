import Image from "next/image";
import { Inter } from "next/font/google";
import { ApolloProvider, gql } from "@apollo/client";
import { apolloClient, query } from "@/lib/graphql/apollo-client";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { data } = await query(
    gql`
      query {
        allFilms {
          films {
            title
            episodeID
            openingCrawl
            director
            producers
            releaseDate
          }
        }
      }
    `
  );

  const films = data.allFilms.films;
  console.log(films);

  return (
    // <ApolloProvider client={apolloClient}>
    <>
      <h1 className="text-4xl">Star Wars Films</h1>
      <ul>
        {films.map(
          (film: {
            title: string;
            episodeID: number;
            openingCrawl: string;
            director: string;
            producers: string[];
            releaseDate: string;
          }) => (
            <li
              key={film.episodeID}
              className=" bg-slate-500 rounded p-2 mb-2 max-w-sm"
            >
              <h2 className="text-2xl">{film.title}</h2>
              <p>{film.openingCrawl}</p>
              <p>Director: {film.director}</p>
              <p>Producers: {film.producers.join(", ")}</p>
              <p>Release Date: {film.releaseDate}</p>
            </li>
          )
        )}
      </ul>
    </>
    // </ApolloProvider>
  );
}
