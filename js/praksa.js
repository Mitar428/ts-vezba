"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(name, date, status) {
        this.name = name;
        this.date = date;
        this.status = status;
    }
}
function addAppointment(list, name, date, status = "pending") {
    const appointment = new Appointment(name, date, status);
    list.push(appointment);
}
function filterByStatus(list, status) {
    const result = [];
    for (const appointment of list) {
        if (appointment.status === status) {
            result.push(appointment);
        }
    }
    return result;
}
function countByStatus(list, status) {
    return filterByStatus(list, status).length;
}
const appointments = [];
addAppointment(appointments, "Marko", "2026-11-10");
addAppointment(appointments, "Ana", "2026-11-11", "confirmed");
addAppointment(appointments, "Ivan", "2026-11-12");
console.log(filterByStatus(appointments, "pending"));
console.log("Pending:", countByStatus(appointments, "pending"));
//# sourceMappingURL=praksa.js.map