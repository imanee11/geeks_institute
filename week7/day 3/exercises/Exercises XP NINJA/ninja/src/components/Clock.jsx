import React from "react";
import './clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getCurrentTime();
    }

    getCurrentTime = () => {
        const date = new Date();
        return {
            year: date.getFullYear(),
            month: date.toLocaleString('default', { month: 'long' }),
            dayOfWeek: date.toLocaleString('default', { weekday: 'long' }),
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(this.getCurrentTime())
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { year, month, dayOfWeek, day, hour, minute, second } = this.state;

        return (
            <div className="clock-container">
                <div className="year">{year}</div>
                <div className="month">{month}</div>

                <div className="compass">
                    <div className="compass-item top">{dayOfWeek}</div>
                    <div className="compass-item right">{hour}h</div>
                    <div className="compass-item bottom">{minute}m</div>
                    <div className="compass-item left">{second}s</div>
                    <div className="center">
                        {day}/{month}/{year}
                    </div>
                </div>
            </div>
        )

    }

}

export default Clock;
