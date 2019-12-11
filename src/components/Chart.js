import { LineChart, Tooltip, Line, XAxis, YAxis, CartesianGrid } from 'recharts'
import React from 'react';

const Chart = ({ meas }) => {

    const customToolTip = ({ payload, label, active }) => {
        if (active && payload != null) {
            return (
                <div className="custom-tooltip">
                    <p style={{ color: "black", fontSize: "16px", paddingTop: "13px" }} className="label">Date: {label}</p>
                    <p style={{ color: "black", fontSize: "16px" }} className="label">Measurement: {payload[0] === undefined ? 0 : payload[0].value}</p>
                </div>
            )
        }
    }

    const customXAxisTick = ({ payload }) => {
        return <p>{}</p>
    }

    const wrapperStyle = {
        backgroundColor: "white",
        opacity: "0.5",
        borderRadius: "25px",
        width: "auto"
    };
    return (
        <LineChart
            width={1200}
            height={600}
            data={meas}
            margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
            <XAxis dataKey="date" tick={customXAxisTick} />
            <YAxis dataKey="value" />
            <Tooltip content={customToolTip} wrapperStyle={wrapperStyle}></Tooltip>
            <CartesianGrid strokeDasharray="5 5" stroke="#3d423e" />
            <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
        </LineChart>
    );
}

export default Chart;