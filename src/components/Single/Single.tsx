import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import './Single.scss';

interface IChartData {
    dataKeys: { name: string; color: string }[];
    data: object[];
}

interface IActivitiesData {
    time: string;
    text: string;
}

interface IProps {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart: IChartData;
    activities?: IActivitiesData[];
}

const Single = ({ img, title, info, chart, activities }: IProps) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {img && <img src={img} alt="" />}

                        <h1>{title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {chart.dataKeys.map((dataKey) => (
                                <Line
                                    key={dataKey.name}
                                    type="monotone"
                                    dataKey={dataKey.name}
                                    stroke={dataKey.color}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {activities && (
                    <ul>
                        {activities.map((activitie, i) => (
                            <li key={i}>
                                <div>
                                    <p>{activitie.text}</p>
                                    <time>{activitie.time}</time>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Single;
