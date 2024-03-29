/**
 * Method 2 apply
 * Using context in functional component
 * 3:38:00 of coding addict resort project
 */

import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />;
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

/**
 * Apply method 1
 * Using context in functional component
 * We are going to use RoomConsumer from
 * our context.js
 * use context in functional component
 * Method 1
 */

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
/**
 * Using context in functional component
 * We are going to use RoomConsumer from
 * our context.js
 * use context in functional component
 * Method 1
 */
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) return <Loading />;
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
