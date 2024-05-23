const airport = {
    capacity: 10, //Default Capacity
    planes: [],
    stormyWeather: false,

    setCapacity: function (number) {
        if (Number.isInteger(number) && number >= 0) {
            this.capacity = number;

        }
    },



    isWeatherStormy: function (bool) {
        this.stormyWeather = bool;

    },


    isAirportFull: function () {
        if(this.planes.length === this.capacity){
            console.log("Capacity At Max: cannot add plane.")
        }
        return this.planes.length === this.capacity;
        
    },

    doesAirportContain: function (plane) {
        const planesWithSameID = this.planes.filter(x => x.planeID === plane.planeID)
        if (planesWithSameID.length > 0) {
            return true;
        } else {
            return false;
        }
    },

    // code used to add a plane to the airport 
    landPlane: function (plane) {
        if (!this.stormyWeather) {
            if ((!(this.doesAirportContain(plane)) && !(this.isAirportFull()))) {
                this.planes.push(plane)
                console.log(`Plane: ${plane.planeID}, successfully landed.`);
            } else if (this.doesAirportContain(plane)) {
                console.log(`Cannot Land Plane: ${plane.planeID}, already at the airport.`);
            }
        } else {
            console.log(`STORMY WEATHER - PLANE: ${plane.planeID} CANNOT LAND.`);
        }    
    },

    takeOff: function (plane) {
        if (!this.stormyWeather) {
            if (this.doesAirportContain(plane)) {
                const updatedPlanes = this.planes.filter(x => x.planeID !== plane.planeID);
                this.planes = updatedPlanes;
                console.log(`Plane: ${plane.planeID}, has taken off.`);
            } else {
                console.log(`Plane: ${plane.planeID}, is not at the airport.`);
            }
        } else {
            console.log(`STORMY WEATHER: PLANE ${plane.planeID} CANNOT TAKE OFF.`);
        }
    }

};


export default airport;