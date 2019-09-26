import React, { useEffect, useState, FunctionComponent } from 'react'
import { timer } from '../../util';
import TextItem from '../TextItem/TextItem';
interface ClockPropTypes {
    deadline: number;
}

const Clock: FunctionComponent<ClockPropTypes> = ({ deadline }) => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    useEffect(() => {
        function levelTimer() {
            if (deadline)
                setTime(
                    timer(deadline)
                );
        }
        let interval = setInterval(() => levelTimer(), 100);
        return () => {
            clearInterval(interval);
        };
    }, [deadline])

    return (
        <TextItem {...{
            headingText: "Time",
            text: `0${time.minutes}:${time.seconds}`
        }} />
    )
}

export default Clock
