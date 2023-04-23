import Image from "next/image";
import { Inter } from "next/font/google";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const apolloClient = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

  const { data } = await apolloClient.query({
    query: gql`
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
    `,
  });

  const films = data.allFilms.films;
  console.log(films);

  return (
    <main>
      <h1 className="text-4xl">Star Wars Films</h1>
      <ul>
        {films.map((film: any) => (
          <li key={film.episodeID} className=" bg-slate-500 rounded p-2 mb-2">
            <h2 className="text-2xl">{film.title}</h2>
            <p>{film.openingCrawl}</p>
            <p>Director: {film.director}</p>
            <p>Producers: {film.producers.join(", ")}</p>
            <p>Release Date: {film.releaseDate}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
