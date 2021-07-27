import dayjs from 'dayjs'

function calculateBiorhythm(birthDate:string, targetDate:string, cycle:number){
    const birthDay = dayjs(birthDate).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff =  targetDay.diff(birthDay, 'days')
    return Math.sin(2 * Math.PI * diff / cycle)
}


export function calculateBiorhythms(birthDate:string, targetDate:string){
    return{
        date:targetDate,
        physical:calculateBiorhythm(birthDate, targetDate, 23),
        emotional:calculateBiorhythm(birthDate, targetDate, 28),
        intellectual:calculateBiorhythm(birthDate, targetDate, 33),
    }
}

interface Biorhythms{
    date:string;
    physical: number;
    emotional: number;
    intellectual: number;
}

export function calculateBiorhythmSeries(birthDate:string, startDate:string, size:number){
    const series = [] as Biorhythms[]
    const startDay = dayjs(startDate).startOf('day')
    for(let i = 0; i < size; i++){
        const targetDate = startDay.add(i, 'day').toISOString()
        series.push(calculateBiorhythms(birthDate, targetDate))
    }
    return series
}