
import * as React from 'react';
import Calendar from "react-widgets/Calendar";
import "react-widgets/styles.css";

export const MyCalendar = () => {

    let widget = (
        <Calendar defaultValue={new Date()} views={['month','year', 'decade']} />
      )
      
    return(widget);
}
