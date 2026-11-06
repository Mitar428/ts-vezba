
class Appointment {
    name: string;
    date: string;
    status: string;

    constructor(name: string, date: string, status: string) {
        this.name = name;
        this.date = date;
        this.status = status;
    }
}

function addAppointment(
    list: Appointment[],
    name: string,
    date: string,
    status: string = "pending"
): void {
    const appointment = new Appointment(name, date, status);
    list.push(appointment);
}


function filterByStatus(
    list: Appointment[], 
    status: string
): Appointment[] {
    const result: Appointment[] = [];

    for (const appointment of list) {
        if (appointment.status === status) {
            result.push(appointment);
        }
    }

    return result;
}

/*
if(false === true){
    console.log("uslo");
} else if(true===false){
    console.log("izaslo");
}else{
    console.log("otislo");
}*/



function countByStatus(
    list: Appointment[],
    status: string
): number {
    return filterByStatus(list, status).length;
}

const appointments: Appointment[] = [];

addAppointment(appointments, "Marko", "2026-11-10");
addAppointment(appointments, "Ana", "2026-11-11", "confirmed");
addAppointment(appointments, "Ivan", "2026-11-12");

console.log(filterByStatus(appointments, "pending"));
console.log("Pending:", countByStatus(appointments, "pending"));
