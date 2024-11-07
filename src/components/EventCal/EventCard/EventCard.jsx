import "./EventCard.css";
import FormattedDescription from "../FormattedDescription/FormattedDescription";
import React from "react";
import { AvatarGroup, Avatar } from "@mui/material";

export default function EventCard({
  date,
  time,
  name,
  description,
  img,
  attendees,
}) {
  // DATE REFORMATTING LOGIC
  const eventDate = new Date(date + "T" + time);

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // DDD
    year: "numeric", // YEAR
    month: "short", // MMM
    day: "numeric", // D
    hour: "2-digit", // HH
    minute: "2-digit", // MM
    hour12: true, // 12-hour clock with AM/PM
    timeZoneName: "shortOffset", // Time zone offset (e.g., GMT-5)
  });

  const formattedDate = formatter.format(eventDate);

  return (
    <div className="event-card">
      <div className="event-card__top">
        <div className="event-card__top-left">
          {" "}
          <time className="event-card__time" dateTime={`${date} ${time}`}>
            {formattedDate}
          </time>
          <h2 className="event-card__title">{name}</h2>
          <FormattedDescription
            text={description}
            className={"event-card__description"}
          />
        </div>
        <div className="event-card__top-right">
          <img src={img} alt="Event image" className="event-card__img" />
        </div>
        <div className="event-card__bottom">
          <div className="event-card__attendees">
            <AvatarGroup max={5}>
              {attendees.map((attendee) => {
                const { status, name, profile_picture, id } = attendee;

                if (status == "Going")
                  return <Avatar key={id} alt={name} src={profile_picture} />;
              })}
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
