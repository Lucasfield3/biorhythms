import dayjs from 'dayjs'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    ReferenceLine,
    CartesianGrid
}from 'recharts'
import { calculateBiorhythmSeries } from '../calculateBiorhythms'
import './BioRhythmsCharts.css'

interface Dates{
    targetDate:string;
    birthDate:string
}

function formatDate(isoString:string){
    return dayjs(isoString).format('D MM')
}

const BiorhythmCharts:React.FC<Dates> = (props)=>{
    const startDate = dayjs(props.targetDate).subtract(15, 'days').toISOString()
    const data = calculateBiorhythmSeries(props.birthDate, startDate, 31)
        .map((item) => ({...item, date:formatDate(item.date)}))
    return(
        <ResponsiveContainer className='biorhythms-charts' width='100%' height={200}>
            <LineChart data={data}>
                <XAxis 
                dataKey='date'
                ticks={[data[3].date, data[15].date, data[27].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                <ReferenceLine x={data[15].date} />
                <Line type='natural' dot={false} dataKey='physical' className='physical'/>
                <Line type='natural' dot={false} dataKey='emotional'  className='emotional'/>
                <Line type='natural' dot={false} dataKey='intellectual'  className='intellectual'/>
            </LineChart>
        </ResponsiveContainer>
    )

}

export default BiorhythmCharts