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
alert(`Hola ${userName}. Bienvenido a Isdi Airlines! `);

function infoFlights() {
    for (let i = 0; i < flights.length; i++) {
        let infoScale = " ";

        if (flights[i].scale === true) {
            infoScale = "Tiene escala. ";
        } else {
            infoScale = "No tiene escala. ";
        }
        console.log(
            `La Id del vuelo es: ${flights[i].id} El vuelo con destino: ${flights[i].to} y origen: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y ${infoScale}`
        );
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

function askForRole() {
    const role = prompt("Bienvenido, eres (USER/ADMIN)?");
    if (role === null) {
        askForRole();
    } else if (
        role.toUpperCase() !== "USER" &&
        role.toUpperCase() !== "ADMIN"
    ) {
        askForRole();
    } else {
        return role.toUpperCase();
    }
}

function manageAdminOrUser() {
    const askedForRole = askForRole();
    if (askedForRole === "ADMIN") {
        askAdminForActions();
    } else {
        userActions();
    }
}

function userActions() {
    let budgetFlightUser = +prompt(
        "Seleccione el precio que esta dispuesto a pagar: "
    );
    if (budgetFlightUser == "") {
        userActions();
    } else if (isNaN(budgetFlightUser)) {
        userActions();
    } else {
        for (i = 0; i < flights.length; i++) {
            if (flights[i].cost <= budgetFlightUser) {
            }
        }
    }
    let selectFlightForUser = prompt(
        "'Indica el ID del vuelo que deseas comprar:'"
    );
    alert(selectFlightForUser);
    alert("Gracias por su compra, vuelva pronto.");
}

function askAdminForActions() {
    const actions = prompt(
        "Que quieres hacer, borrar vuelos o crearlos?: (CREATE/DELETE)"
    );
    if (actions === null) {
        const exit = confirm('Para salir pulsa a continuacion "Aceptar" ');
        return exit ? alert("Hasta la proxima!! ") : askAdminForActions();
    } else if (actions.toUpperCase() === "CREATE") {
        createFlightAdmin();
    } else if (actions.toUpperCase() === "DELETE") {
        deleteFlightAdmin();
    } else {
        alert("Creo que ha habido algun error, intentalo de nuevo.");
        askAdminForActions();
    }
}

function createFlightAdmin() {
    const createNewFlight = {};
    if (flights.length >= 14) {
        alert("No puede haber mas de 15 vuelos!");
    } else {
        createNewFlight.from = prompt("Origen: ");
        createNewFlight.to = prompt("Destino: ");
        createNewFlight.cost = prompt("Coste del vuelo: ");
        if (isNaN(createNewFlight.cost)) {
            alert("Porfavor, selecione el coste correctamente ");
            createFlightAdmin();
        }
        createNewFlight.scale = confirm(
            'Si el vuelo tiene escalas pulsa "Acept", de lo contrario pulsa "Cancelar"'
        );
        createNewFlight.id = flights.length + 1;

        flights.push(createNewFlight);
        infoFlights();
        askAdminForActions();
    }
}

function deleteFlightAdmin() {
    const choseFlightForDelete = prompt(
        "Escribe la id del vuelo que quieres borrar?"
    );

    if (choseFlightForDelete === null) {
        askAdminForActions();
    } else if (isNaN(choseFlightForDelete)) {
        alert("Introduce un numero valido");
        deleteFlightAdmin();
    } else {
        flights.splice(choseFlightForDelete, 1);

        for (let i = 0; i < flights.length; i++) {
            flights[i].id = i;
        }
    }
    askAdminForActions();
}
