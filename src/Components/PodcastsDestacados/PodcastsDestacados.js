import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./PodcastsDestacados.css";


export const PodcastsDestacados = () => {
  const ListaPodcastFake = [
    {
      title: "Soy el podcast 1",
      categories: "Videojuegos",
      author: "Autor podcast 1",
      img: "https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
    },
    {
      title: "Soy el podcast 2",
      categories: "Videojuegos",
      author: "Autor podcast 2",
      img: "https://images.unsplash.com/photo-1603516071728-9d8ac803a335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2525&q=80"
    },
    {
      title: "Soy el podcast 3",
      categories: "Comedia",
      author: "Autor podcast 3",
      img: "https://images.unsplash.com/photo-1584626128261-75a4a218fc11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
    {
      title: "Soy el podcast 4",
      categories: "Comedia",
      author: "Autor podcast 4",
      img: "https://images.unsplash.com/photo-1584168844383-3c3ee678981a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80"
    },
    {
      title: "Soy el podcast 1",
      categories: "Comida",
      author: "Autor podcast 1",
      img: "https://images.unsplash.com/photo-1604256140940-5150dc006258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
    },
    {
      title: "Soy el podcast 2",
      categories: "Comida",
      author: "Autor podcast 2",
      img: "https://images.unsplash.com/photo-1603822810271-ceebe6d4c53a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80"
    },
    {
      title: "Soy el podcast 3",
      categories: "Comedia",
      author: "Autor podcast 3",
      img: "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
    },
    {
      title: "Soy el podcast 4",
      categories: "Comedia",
      author: "Autor podcast 4",
      img: "https://images.unsplash.com/photo-1601642702400-c1544ff700d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
    }
  ];
  return (
    <div className="PodcastsDestados-wrap">
      {ListaPodcastFake.map(podcast => 
        (
        <PodcastCard
          title={podcast.title}
          categories={podcast.categories}
          author={podcast.author}
          img={podcast.img}
        /> 
      ))}
    </div>
  );
};
