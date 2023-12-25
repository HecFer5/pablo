import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import "dayjs/locale/es"
dayjs.locale('es')

const Portada = () => {
  const localizer = dayjsLocalizer(dayjs)



  
  const events = [
    {
      start: dayjs('2023-12-18T12:00:00').toDate(),
      end: dayjs('2023-12-18T13:10:00').toDate(),
      title: 'evento 1'
    }
  ]
  return (

    <div className='container mx-auto sm mt-10'>
      <Calendar
        localizer={localizer}
        style={{ height: 500 }}
        events={events}
        defaultView="week"
      />
    </div>


  )
}

export default Portada