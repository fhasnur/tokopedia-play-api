import React, { useState, useEffect } from 'react';
import NavHome from "../components/NavHome";
import Thumbnail from "../components/Thumbnail";
import { Theme, Container } from '@radix-ui/themes';
import axios from "axios";

function HomePage() {
  const [videos, setVideos] = useState([]);

  const url_videos = "http://localhost:3000/videos/";

  useEffect(() => {
    getVideos();
  }, [url_videos]);

  const getVideos = async () => {
    try {
      const response = await axios.get(url_videos);
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Theme>
      <Container size="4">
        <NavHome />
        <Thumbnail videos={videos} />
      </Container>
    </Theme>
  )
}

export default HomePage;