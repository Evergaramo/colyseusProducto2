import * as Colyseus from "colyseus.js";

var client = new Colyseus.Client('ws://localhost:8888');



//Connecting to server
client.join("room_name").then(room => {
    console.log(room.sessionId, "joined", room.name);
}).catch(e => {
    console.log("JOIN ERROR", e);
});


//Joining to a room:
client.join("room_name").then(room => {
    console.log(room.sessionId, "joined", room.name);
}).catch(e => {
    console.log("JOIN ERROR", e);
});



//--------------------------------------------------------


//
//Room events
//
//Room state has been updated:
room.onStateChange((state) => {
  console.log(room.name, "has new state:", state);
});


//Message broadcasted from server or directly to this client:
room.onMessage((message) => {
  console.log(client.id, "received on", room.name, message);
});

//Server error occurred:
room.onError(() => {
  console.log(client.id, "couldn't join", room.name);
});


//The client left the room:
room.onLeave(() => {
  console.log(client.id, "left", room.name);
});

