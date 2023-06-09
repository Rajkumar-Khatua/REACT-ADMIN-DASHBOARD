import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 3500 },
  { name: "March", Total: 500 },
  { name: "April", Total: 4400 },
  { name: "May", Total: 8800 },
  { name: "June", Total: 9900 },
];
const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer
        width='100%'
        aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient
              id='total'
              x1='0'
              y1='0'
              x2='0'
              y2='1'>
              <stop
                offset='5%'
                stopColor='#25cc7e'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor=' #da213f'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke="#4e4e4e"/>
          <YAxis stroke="#4e4e4e"/>
          <CartesianGrid strokeDasharray='3 3' className="chartGrid"/>
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Total'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
