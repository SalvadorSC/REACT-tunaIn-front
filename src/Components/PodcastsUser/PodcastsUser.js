import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./PodcastsUser.css";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import {getUserId} from "../../util/LocalStorage.utils";

export const PodcastsUser = () => {
  const [listaPodcastsUser, setListaPodcastsUser] = useState([]);
  const url = window.location.href;
  useEffect(() => {

    const userId = getUserId();
    console.log("->");
    console.log(`data/podcast/?id_author=${userId}`);

    if (url === "http://localhost:3000/myPodcasts" || url === "http://localhost:3000/profile") {
      serverRequest(`data/podcast/?id_author=${userId}`, "GET")
        .then((response) => {
          setListaPodcastsUser(response)
        })
        .catch(console.log);
    }
    else {
      serverRequest(`data/podcast/`, "GET")
      .then((response) => {
        setListaPodcastsUser(response)
      })
      .catch(console.log);
    }


  }, [url]);

  return (
    <div className="PodcastsUser-wrap">
      {listaPodcastsUser.map(podcast =>
        (
          <PodcastCard
            podcastId={podcast._id}
            title={podcast.title}
            categories={podcast.categories}
            description={podcast.description}
            author={podcast.id_author}
            img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
          />
        ))}
    </div>
  );
};
