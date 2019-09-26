import React, { useEffect, useState, FunctionComponent } from 'react';
import { timer } from '../../util';
import TextItem from '../TextItem/TextItem';
interface ClockPropTypes {
    deadline: number;
}

const Clock: FunctionComponent<ClockPropTypes> = ({ deadline }) => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    useEffect(() => {
        //doesnt work
        function timeEnded() {
            const { minutes, seconds } = time;
            if (!minutes && !seconds) {
                clearInterval(interval)
            }
        }
        function levelTimer() {
            if (deadline)
                setTime(
                    timer(deadline)
                );
            timeEnded();
        }

        let interval = setInterval(() => levelTimer(), 100);
        return () => {
            clearInterval(interval);
        };
    }, [deadline, time])

    return (
        <TextItem {...{
            headingText: "Time",
            text: `0${time.minutes}:${time.seconds}`
        }} />
    )
}

export default Clock
