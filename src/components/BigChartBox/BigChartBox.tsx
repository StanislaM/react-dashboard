import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import './BigChartBox.scss';
import { CurveType } from 'recharts/types/shape/Curve';

interface IArea {
    dataKey: string;
    stroke: string;
    fill: string;
    stackId: number;
}

interface IChartData {
    name: string;
    books: number;
    clothes: number;
    electronic: number;
}

interface IProps {
    title: string;
    dataKey: string;
    areaType: string;
    areas: IArea[];
    chartData: IChartData[];
}

const BigChartBox = ({
    title,
    dataKey,
    areaType,
    areas,
    chartData,
}: IProps) => {
    return (
        <div className="bigChartBox">
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey={dataKey} />
                        <YAxis />
                        <Tooltip labelStyle={{ color: '#000' }} />
                        {areas.map((area) => (
                            <Area
                                type={areaType as CurveType}
                                dataKey={area.dataKey}
                                stackId={area.stackId}
                                stroke={area.stroke}
                                fill={area.fill}
                            />
                        ))}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BigChartBox;
