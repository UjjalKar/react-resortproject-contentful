import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => (
  <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link className="btn-primary" to="/">
          Return Home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer />
  </>
);

export default Rooms;
