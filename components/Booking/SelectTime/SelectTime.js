import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from "./SelectTime.module.css" 

const SelectTime = () => {
  return (
    <div className={styles.fullCalendar}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        slotMinTime="09:00:00"
        slotDuration="00:30:00" 
        eventTextColor = "black"
        eventColor= "#378006"
      />
    </div>
  );
};

export default SelectTime;


