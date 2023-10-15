import './PieChartBox.scss';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface IChartData {
    name: string;
    value: number;
    color: string;
}

interface IProps {
    title: string;
    chartData: IChartData[];
    dataKey: string;
}

const PieChartBox = ({ title, chartData, dataKey }: IProps) => {
    return (
        <div className="pieChartBox">
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: 'white',
                                borderRadius: '5px',
                            }}
                        />
                        <Pie
                            data={chartData}
                            innerRadius="70%"
                            outerRadius="90%"
                            paddingAngle={5}
                            dataKey={dataKey}
                        >
                            {chartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {chartData.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div
                                className="dot"
                                style={{ background: item.color }}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartBox;
