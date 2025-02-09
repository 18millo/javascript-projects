// event objects //
let events = [
    {
        title: 'Launch party',
        date: new Date('2024-03-16'),
        location: 'New York',
        attendees: new Set (['Millo', 'Bob', 'Alice', 'John'])
    },
    {
        title: 'Fund Raiser',
        date: new Date('2024-03-17'),
        location: 'Los Angeles',
        attendees: new Set (['Millo', 'Bob', 'Alice', 'John'])
    },
    {
        title: 'Dinner Party',
        date: new Date('2024-03-18'),
        location: 'Chicago',
        attendees: new Set (['Millo', 'Bob', 'Alice', 'John', 'Gegs' ])
    },
    {
        title: 'Birthday Party',
        date: new Date('2024-03-19'),
        location: 'Houston',
        attendees: new Set (['Millo', 'Alice', 'John'])
    }
]

//filter events happening in the next 7 days//
let currentDate = new Date('2024-03-16');
let futureDate = new Date (currentDate);
currentDate.setDate( currentDate.getDate() + 7 );

//filter events that are within the seven days//
let eventsWithin7Days = events.filter(event => 
    event.date <= currentDate && event.date >= futureDate);

//map events to display the event details//
let eventDetails = eventsWithin7Days.map(event => {
    return {
        title: event.title,
        date: event.date.toLocaleDateString(),
        location: event.location,
        attendees: Array.from(event.attendees).join(', ')
    }
});
console.log('upcoming events');
console.log(eventDetails);

// Create a WeakMap to store the event's organizer//
let eventOrganizers = new WeakMap();

//store orginizers in the weakmap//
eventOrganizers.set( events[0], 'Millo');
eventOrganizers.set( events[1], 'Bob');
eventOrganizers.set( events[2], 'Alice');

//function to list all event organizers using weakMap//
function listEventOrganizers(events, eventOrganizers) {
    events.forEach(event => {
        let organizer = eventOrganizers.get(event);
        if (organizer) {
        console.log(`Event: ${event.title} is organized by ${organizer}`);
        } else {
            console.log(`Event: ${event.title} has no organizer`);
        }
    });
}

//display event organizers//
listEventOrganizers(events, eventOrganizers);

//display the event details in table format//
console.log('Event Details:');
console.table(
    eventDetails.map(event => ({
        Title: event.title,
        Date: event.date,
        Location: event.location,
        Attendees: event.attendees
}))
);

//function to add new attendees//
function addAttendees(event, newAttendees) {
    event.attendees = new Set([...event.attendees, ...newAttendees]);
    }

// add new attendees to the first event//
addAttendees(events[0], ['John', 'Jane']);
console.log('Updated attendees for the first event:');
console.log(events[0].attendees);

//function that converts the event details to JSON//
function convertToJson(eventDetails) {
   return JSON.stringify(eventDetails, null, 2);
    }

//convert event details to JSON//
let eventJson = convertToJson(eventDetails);
console.log('Event details in JSON format:');
console.log(eventJson); 

//use object methods to display properties and values of the first event//
let firstEvent = events[0];
console.log('Properties and values of the first event:');
console.log("object.keys():", Object.keys(firstEvent));
console.log("object.values():", Object.values(firstEvent));
console.log("object.entries():", Object.entries(firstEvent));

//iterate over the events array and console.log the title and date of each event//
events.forEach(event => {
    console.log(`Event Title: ${event.title}, Event Date: ${event.date}`);
});

//functionality to delete events//
function deleteEvent(eventTitle) {
    let index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`${ eventTitle} has been deleted.`);
        } else {
            console.log(`${ eventTitle} does not exist.`);
    }
 }
//delete the second event//
deleteEvent(events[0].title);
console.log('Updated events list:');
console.log(events);

//use the .reduce method to find event with most attendies//
let mostAttendedEvent = events.reduce((max, current) => {
    return current.attendees.size > max.attendees.size ? current : max;
    });
    console.log('Event with most attendees:');
    console.log(mostAttendedEvent.title);