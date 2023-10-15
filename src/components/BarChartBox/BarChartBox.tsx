import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './BarChartBox.scss';

interface IProps {
    title: string;
    chartData: object[];
    color: string;
    dataKey: string;
}

const BarChartBox = ({ title, chartData, color, dataKey }: IProps) => {
    return (
        <div className="barChartBox">
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={chartData}>
                        <Tooltip
                            contentStyle={{
                                background: 'var(--main-bg)',
                                borderRadius: '5px',
                            }}
                            labelStyle={{ display: 'none' }}
                            cursor={{ fill: 'none' }}
                        />
                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartBox;
