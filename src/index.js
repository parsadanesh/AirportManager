import airport from "./airport.js";
import { plane1, plane2, plane3, plane4, plane5, plane6 } from "./planes.js";

// SIMULATION

// CHECK DEFAULT CAPACITY IS 10 - USER STORY 1
console.log(`Today with have a capacity of ${airport.capacity}.`);
// SET WEATHER TO NOT STORMY
airport.isWeatherStormy(false);
console.log("Weather at the airport is not stormy.");
// ADD PLANES 2 PLANES
console.log(`Trying to land plane: ${plane1.planeID}.`);
airport.landPlane(plane1);
console.log(`Trying to land plane: ${plane2.planeID}.`);
airport.landPlane(plane2);
// CHECK FOR PLANE FOR TAKE OFF
airport.doesAirportContain(plane1) === true ? console.log(`Plane: ${plane1.planeID}, is currently at the airport.`) : console.log(`Plane: ${plane1.planeID}, is not currently at the airport.`);
// FLY OFF WITH FIRST PLANE
console.log(`Plane: ${plane1.planeID} - Trying to take off.`);
airport.takeOff(plane1);
// CHANGE THE CAPACITY - USER STORY 2
airport.setCapacity(3);
console.log(`Sorry passengers we have to shut down a terminal and the capacity has changed to ${airport.capacity}.`);
// TRY ADD THE SAME PLANE TWICE - USER STORY 5
console.log(`there are currently: ${airport.planes.length} plane`);
console.log(`Trying to land plane: ${plane3.planeID}`);
airport.landPlane(plane3);
console.log(`Trying to land plane: ${plane3.planeID}`);
airport.landPlane(plane3)
console.log(`there are currently: ${airport.planes.length} planes`);
// TRY ADD MORE THAN CAPACITY - USER STORY 1
console.log(`Trying to land plane: ${plane4.planeID}`);
airport.landPlane(plane4);
console.log(`Trying to land plane: ${plane5.planeID}`);
airport.landPlane(plane5);
// TAKE OFF WITH SAME PLANE TWICE - USER STORY 6
console.log(`Plane: ${plane4.planeID} - Trying to take off.`);
airport.takeOff(plane4);
console.log(`Plane: ${plane4.planeID} - Trying to take off.`);
airport.takeOff(plane4);
// CHANGE WEATHER TO STORMY
airport.isWeatherStormy(true);
console.log("Weather is stormy, all flights will be delayed.");
// TRY TAKE OFF WHEN WEATHER IS STORMY - USER STORY 7
console.log(`Plane: ${plane2.planeID} - Trying to take off.`);
airport.takeOff(plane2);
// TRY LAND A PLANE WHEN WEATHER IS STORMY - USER STORY 8
console.log(`Trying to land plane: ${plane6.planeID}`);
airport.landPlane(plane6);
// SET WEATHER TO NOT STORMY
airport.isWeatherStormy(false);
// LAND AND TAKE OFF THE SAME PLANES AS BEFORE
console.log(`Plane: ${plane2.planeID} - Trying to take off.`);
airport.takeOff(plane2);
console.log(`Trying to land plane: ${plane6.planeID}`);
airport.landPlane(plane6);
console.log("Airport is now closed.");

