import { 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
} from "@ionic/react";
import dayjs from 'dayjs'
import { calculateBiorhythms } from '../calculateBiorhythms'
import BiorhythmCharts from "./BiorhythmCharts";
import './Biorhythms.css'

function formatDay(isoString:string){
    return dayjs(isoString).format('D MMM YYYY')
}

export const BiorhythmCard:React.FC<{targetDate:string, birthDate:string}> = props =>{
    const { physical, emotional, intellectual } = calculateBiorhythms(props.targetDate, props.birthDate)
    return(
        <IonCard className='biorhythms ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>{formatDay(props.targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmCharts birthDate={props.birthDate} targetDate={props.targetDate}/>
          <p className='physical'>Physical: {props.targetDate && physical.toFixed(4)}</p>
          <p className='emotional'>Emotional: {props.targetDate && emotional.toFixed(4)}</p>
          <p className='intellectual'>Intellectual: {props.targetDate && intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
    )

}

export default BiorhythmCard;