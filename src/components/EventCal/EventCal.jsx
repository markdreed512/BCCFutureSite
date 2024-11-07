import "./EventCal.css";
import EventCard from "./EventCard/EventCard";
import {
  event_name,
  date,
  time,
  description,
  img,
  attendees,
} from "./dummy-data.json";
// this is a single even
// would need to make sure it works for multiple events

export default function EventCal() {
  return (
    <section className="event-cal">
      <EventCard
        date={date}
        time={time}
        name={event_name}
        description={description}
        img={img}
        attendees={attendees}
      />
    </section>
  );
}
