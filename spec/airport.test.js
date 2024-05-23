import airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework.js";
import { plane1, plane2, plane3} from "../src/planes.js";


const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testCapacity = undefined;
    airport.capacity = undefined;
    airport.planes = [];
    

};
//? User Story 1
console.log("**********************");
console.log("USER STORY 1");
console.log("");
//? Test 1.1
//* Check that the airport has a capacity of 10
console.log("Test 1.1");
console.log("=======================");
// Arrange
let expected = 10;
let actual, result;
// Act
actual = airport.capacity;
// Assert
result = assertEquals(actual, expected);
// Report 
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
expected = undefined;
actual = undefined;
result = undefined;

//! End of Test 1.1
//!End of User Story 1

//? User Story 2
console.log("**********************");
console.log("USER STORY 2");
console.log("");
//? Test 2.1
//* set the capacity of the airport and check the correct number is set
console.log("Test 2.1");
console.log("=======================");
// Arrange
let testCapacity = 10;
expected = 10;
actual, result;
// Act
airport.setCapacity(testCapacity);
actual = airport.capacity;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 2.1

//? Test 2.2
//* set the capacity of the airport and then set it to a different number check changes can be made
console.log("Test 2.2");
console.log("=======================");
// Arrange
expected = 20;
testCapacity = 10;
// Act
airport.setCapacity(testCapacity);
airport.setCapacity(20);
actual = airport.capacity;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 2.2

//? Test 2.3
//* Test the capacity cannot be negative adding a negative number when using setCapacity, it should give an error message 
console.log("Test 2.3");
console.log("=======================");
// Arrange
expected = airport.capacity;
testCapacity = -10;
// Act
airport.setCapacity(testCapacity);
actual = airport.capacity;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 2.4

//? Test 2.4
//* Test the capacity cannot is not null after adding a null value when using setCapacity, it should give an error message 
console.log("Test 2.4");
console.log("=======================");
// Arrange
expected = airport.capacity;
testCapacity = null;
// Act
airport.setCapacity(testCapacity);
actual = airport.capacity;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 2.4
//! End of User Story 2

console.log("**********************");
console.log("USER STORY 3");
console.log("");
//? User Story 3
//? Test 3.1
//* Test an empty airport to check if there is space to land.
console.log("Test 3.1");
console.log("=======================");
// Arrange
expected = false;
airport.capacity = 10;
// Act
actual = airport.isAirportFull();
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 3.1

//? Test 3.2
//* Test an airport at capacity to see airport is full.
console.log("Test 3.2");
console.log("=======================");
// Arrange
expected = true;
airport.capacity = 1;
let testItem = {};
// Act
airport.planes.push(testItem);
actual = airport.isAirportFull();
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 3.2
//! End of User Story 3

console.log("**********************");
console.log("USER STORY 4");
console.log("");
//? User Story 4
//? Test 4.1
//* Search for a plane that is not at the airport, should return false.
console.log("Test 4.1");
console.log("=======================");
// Arrange
airport.planes = [];
expected = false;
airport.planes.push(plane1);
let testPlane = plane2;
// Act
actual = airport.doesAirportContain(testPlane);
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();
testPlane = undefined;

//! End of Test 4.1

//? Test 4.2
//* Add a plane to an empty airport and check if it is stored properly should return true.
console.log("Test 4.2");
console.log("=======================");
// Arrange
airport.planes = [];
expected = true;
airport.planes.push(plane3);
// Act
actual = airport.doesAirportContain(plane3);
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 4.2

//? Test 4.3
//* Add multiple planes to the airport and check if doesAirportContain can find a plane stored at the airport
console.log("Test 4.3");
console.log("=======================");
// Arrange
airport.planes = [];
airport.planes.push(plane1)
airport.planes.push(plane2);
airport.planes.push(plane3);
expected = true;
// Act
actual = airport.doesAirportContain(plane3);
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 4.3
//! End of User Story 4


console.log("**********************");
console.log("USER STORY 5");
console.log("");
//? User Story 5
//? Test 5.1
//* Land a plane at the airport when there is capacity, length of Plane[] should increase by one
console.log("Test 5.1");
console.log("=======================");
// Arrange
expected = airport.planes.length + 1;
testPlane = plane1;
// Act
airport.landPlane(testPlane);
actual = airport.planes.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();
testPlane = undefined;

//! End of Test 5.1

//? Test 5.2
//* Land a plane and check that the same plane is stored in the array.
console.log("Test 5.2");
console.log("=======================");
// Arrange
expected = true;
testPlane = plane1;
// Act
airport.landPlane(plane1);
actual = airport.doesAirportContain(plane1);
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();
testPlane = undefined;

//! End of Test 5.3

//? Test 5.3
//* Try land a plane at airport that has reached capacity, should not add to planes array.
console.log("Test 5.3");
console.log("=======================");
// Arrange
airport.setCapacity(2);
expected = airport.planes.length + 2;
airport.landPlane(plane1);
airport.landPlane(plane2);
// Act
airport.landPlane(plane3);
actual = airport.planes.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();
testPlane = undefined;

//! End of Test 5.4

//? Test 5.4
//* Try land a plane already at the airport should not increase array and return error message.
console.log("Test 5.4");
console.log("=======================");
// Arrange
airport.setCapacity(2);
expected = airport.planes.length + 2;
airport.landPlane(plane1);
airport.landPlane(plane2);
// Act
airport.landPlane(plane1);
actual = airport.planes.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();
testPlane = undefined;

//! End of Test 5.4
//! End of User Story 5

console.log("**********************");
console.log("USER STORY 6");
console.log("");
//? User Story 6
//? Test 6.1
//* Test that when a plane at the airport takes off the array length decreases.
console.log("Test 6.1");
console.log("=======================");
// Arrange
airport.planes = [];
airport.planes.push(plane1);
airport.planes.push(plane2);
airport.planes.push(plane3);
expected = airport.planes.length - 1;
// Act
airport.takeOff(plane2);
actual = airport.planes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 6.1
//? Test 6.2
//* Test that when a plane at the airport takes off the array is updated and plane is no longer at the airport.
console.log("Test 6.2");
console.log("=======================");
// Arrange
airport.planes = [];
airport.planes.push(plane1);
airport.planes.push(plane2);
airport.planes.push(plane3);
expected = false;
// Act
airport.takeOff(plane2);
actual = airport.doesAirportContain(plane2);
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 6.2
//? Test 6.3
//* Test that when trying to take off a plane that is not at the airport, no planes take off and a error message shown.
console.log("Test 6.3");
console.log("=======================");
// Arrange
airport.planes = [];
airport.planes.push(plane1);
airport.planes.push(plane2);
expected = airport.planes.length;
// Act
airport.takeOff(plane3);
actual = airport.planes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 6.3


console.log("**********************");
console.log("USER STORY 7");
console.log("");
//? User Story 7
//? Test 7.1
//* land a plane then set weather as stormy, try land new plane and check planes size does not increase.
console.log("Test 7.1");
console.log("=======================");
// Arrange
airport.capacity = 10;
expected = airport.planes.length + 1;
airport.landPlane(plane1);
// Act
airport.isWeatherStormy(true);
airport.landPlane(plane2);
actual = airport.planes.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of Test 7.1

//? Test 7.2
//* Set weather as stormy, try land plane and check plane is not stored in the array planes.
console.log("Test 7.2");
console.log("=======================");
// Arrange
airport.capacity = 10;
expected = false;
airport.landPlane(plane1);
// Act
airport.isWeatherStormy(true);
airport.landPlane(plane2);
actual = airport.doesAirportContain(plane2);
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of test 7.2
//! End of User Story 7

console.log("**********************");
console.log("USER STORY 8");
console.log("");
//? User Story 8
//? Test 8.1
//* Set weather to stormy and try to take off with a plane at the airport then check plane array did not decrease.
console.log("Test 8.1");
console.log("=======================");
// Arrange
airport.capacity = 10;
airport.isWeatherStormy(false);
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
expected = airport.planes.length;
// Act
airport.isWeatherStormy(true);
airport.takeOff(plane2);
actual = airport.planes.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of test 8.1

//? Test 8.2
//* Set weather to stormy and try to take off with a plane at the airport then check plane is still at the airport.
console.log("Test 8.2");
console.log("=======================");
// Arrange
airport.capacity = 10;
airport.isWeatherStormy(false);
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
expected = true;
// Act
airport.isWeatherStormy(true);
airport.takeOff(plane2);
actual = airport.doesAirportContain(plane2);
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
cleanUp();

//! End of test 8.2
//! End of User Story 8