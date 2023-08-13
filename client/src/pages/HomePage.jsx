import React from 'react';
import NavHome from "../components/NavHome";
import Thumbnail from "../components/Thumbnail";
import { Theme, Container } from '@radix-ui/themes';

function HomePage() {
  return (
    <Theme>
      <Container size="4">
        <NavHome />
        <Thumbnail />
      </Container>
    </Theme>
  )
}

export default HomePage;