import './ChartBox.scss';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

interface IProps {
    title: string;
    number: number | string;
    icon: string;
    chartData: object[];
    dataKey: string;
    color: string;
    percentage: number;
}

const ChartBox = ({
    title,
    number,
    icon,
    chartData,
    dataKey,
    color,
    percentage,
}: IProps) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={`src/assets${icon}`} alt="icon" />
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
                <Link style={{ color: color }} to={'/'}>
                    View all
                </Link>
            </div>

            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: 'none',
                                    border: 'none',
                                }}
                                labelStyle={{ display: 'none' }}
                                position={{ x: 10, y: 60 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text">
                    <span
                        className="percentage"
                        style={{
                            color: percentage >= 0 ? 'limegreen' : 'tomato',
                        }}
                    >
                        {percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
