import axios from 'axios';
import { observable, action, makeObservable, computed, runInAction } from 'mobx';
//Kהגדיר אולי במקרא מה זה צבע שהוא לא של היום ולא של השבוע
// לשנות את הצבעים במקרא
class Meetings {
    meetings = []

    tempMeetings = [{
        id: "1",
        serviceName: "New Born Photos",
        serviceDescription: "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2023, 27, 12),
        clientName: "Yael",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com"
    }, {
        id: "2",
        serviceName: "New Born Photos",
        serviceDescription:  "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(),
        clientName:  "Yeudit",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "3",
        serviceName: "New Born Photos",
        serviceDescription: "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: "2023-12-31T10:00:00.000Z",
        clientName: "Odel",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "4",
        serviceName: "New Born Photos",
        serviceDescription:  "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2023, 25, 12),
        clientName: "Tamar",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "5",
        serviceName: "New Born Photos",
        serviceDescription:  "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2022, 24, 12),
        clientName: "Shira",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "6",
        serviceName: "New Born Photos",
        serviceDescription:  "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2022, 16, 2),
        clientName: "Sara",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "7",
        serviceName: "New Born Photos",
        serviceDescription: "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2022, 15, 2),
        clientName: "Rachel",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }, {
        id: "8",
        serviceName: "New Born Photos",
        serviceDescription: "New Born photos that will make you happy",
        servicePrice: 800,
        dateTime: new Date(2022, 6, 3),
        clientName: "Pnina",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            addMeeting: action,
            getMeetingsDataFromServer: action,
            getMeetings: computed
        })
        this.meetings = this.getMeetings;
    }

    get getMeetings() {
        this.getMeetingsDataFromServer();
        return this.meetings;
    }

    getMeetingsDataFromServer() {
        axios.get("http://localhost:8787/appointments").then((res) => {
            runInAction(() => {
                this.meetings = res.data;
                if (this.meetings.length === 0) {
                    for (let i = 0; i < this.tempMeetings.length; i++) {
                        this.addMeeting(this.tempMeetings[i]);
                    }
                }
            })
        })
    }
    addMeeting(mit) {
        fetch("http://localhost:8787/appointment", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: mit.id,
                serviceName: mit.serviceName,
                serviceDescription: mit.serviceDescription,
                servicePrice: mit.servicePrice,
                dateTime: mit.dateTime,
                clientName: mit.clientName,
                clientPhone: mit.clientPhone,
                clientEmail: mit.clientEmail
            })

        }).then((response) => {
            if (response.status === 400) {
                alert("This date is already caught, try again!!!!!!!!")
            }
            else {
                runInAction(() => {
                    this.meetings = [...this.meetings, mit];
                });
            }

        })
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new Meetings();