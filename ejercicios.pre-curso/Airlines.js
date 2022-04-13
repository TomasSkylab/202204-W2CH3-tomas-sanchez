let flights = [
    { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

    { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

    { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

    { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

    { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

    { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

    { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

    { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

    { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

    { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

    { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let userName = prompt("Seleccione un nombre de usuario para continuar:");
alert(`Hola ${userName}`);
alert("Bienvenido a Isdi Airlines!");

function infoFlights() {
    for (let i = 0; i < flights.length; i++) {
        let infoScale = " ";

        if (flights[i].scale === true) {
            infoScale = "Tiene escala.";
        } else {
            infoScale = "No tiene escala.";
        }
    }
}

function averageCost() {
    let totalCost = 0;

    for (let i = 0; i < flights.length; i++) {
        totalCost += flights[i].cost;
    }

    let average = totalCost / flights.length;
}

function lastFlights() {
    let destinations = [];
    let latest = [];

    for (let i = 0; i < flights.length; i++)
        destinations.push(flights[i]["to"]);
    latest = destinations.slice(6);
}
