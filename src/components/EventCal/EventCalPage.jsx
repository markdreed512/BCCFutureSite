import EventCalElement from "./EventCalElement/EventCalElement";
import "./EventCalPage.css";

import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function BasicPagination({ pageCount, classes }) {
  return (
    <Stack spacing={2}>
      <Pagination
        className={classes}
        count={pageCount}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}

export default function EventCalPage() {
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className="event-cal-pg">
      <h1 className="event-cal-pg__title">
        Code Coffee Events: Connect, Learn, and Innovate Together!
      </h1>
      <div className="event-cal-pg__divider"></div>
      <EventCalElement setPageCount={setPageCount} />
      <BasicPagination
        pageCount={pageCount}
        classes="event-cal-pg__pagination"
      />
    </div>
  );
}
