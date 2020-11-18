import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./PodcastsUser.css";

export const PodcastsUser = () => {
  const ListaPodcastFake = [
    {
      title: "Soy el podcast 1",
      duration: 3.25,
      author: "Autor podcast 1",
      img: "https://images.unsplash.com/photo-1605387811345-618b994771ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Soy el podcast 2",
      duration: 2.21,
      author: "Autor podcast 2",
      img: "https://images.unsplash.com/photo-1605384847192-bed8ef4e69db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1072&q=80"
    },
    {
      title: "Soy el podcast 3",
      duration: 3.32,
      author: "Autor podcast 3",
      img: "https://images.unsplash.com/photo-1605380539357-70db16d8c34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    },
    {
      title: "Soy el podcast 4",
      duration: 3.30,
      author: "Autor podcast 4",
      img: "https://images.unsplash.com/photo-1605379729007-eb32d0439d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
    },
    
  ];
  return (
    <div className="PodcastsUser-wrap">
      {ListaPodcastFake.map(podcast => 
        (
        <PodcastCard
          title={podcast.title}
          duration={podcast.duration}
          author={podcast.author}
          img={podcast.img}
        />
      ))}
    </div>
  );
};
