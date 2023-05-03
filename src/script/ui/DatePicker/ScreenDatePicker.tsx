import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'

const ScreenDatePicker = () => {
    const [date, setDate] = useState(new Date())

    return <DatePicker date={date} onDateChange={setDate}/>
}

export default ScreenDatePicker