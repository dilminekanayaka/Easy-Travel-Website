document.addEventListener("DOMContentLoaded", function() {
    const scheduleData = [
        { route: "A", departure: "08:00 AM", arrival: "08:45 AM" },
        { route: "B", departure: "09:00 AM", arrival: "09:50 AM" },
        { route: "C", departure: "10:00 AM", arrival: "10:40 AM" }
    ];

    const scheduleTable = document.getElementById("schedule-table");

    scheduleData.forEach(function(schedule) {
        const row = document.createElement("tr");

        const routeCell = document.createElement("td");
        routeCell.textContent = schedule.route;
        row.appendChild(routeCell);

        const departureCell = document.createElement("td");
        departureCell.textContent = schedule.departure;
        row.appendChild(departureCell);

        const arrivalCell = document.createElement("td");
        arrivalCell.textContent = schedule.arrival;
        row.appendChild(arrivalCell);

        scheduleTable.appendChild(row);
    });
});
