import { 
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from '../components/BiorhythmCard';
import { useLocalStorage } from '../hook';
import './Home.css';


const Home: React.FC = () => {

  const [ birthDate, setBirthDate ] = useLocalStorage('birthDate', '') 
  const [ targetDate, setTargetDate ] = useState<string>(new Date().toISOString())



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' fullscreen>
      { birthDate && <BiorhythmCard  birthDate={birthDate} targetDate={targetDate}/>}
        <IonItem>
          <IonLabel position='fixed'>Birth Date:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY'
          value={birthDate}
          onIonChange={(event)=>setBirthDate(event.detail.value!)}
          />
        </IonItem>
        <IonItem>
        <IonLabel position='fixed'>Target date:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY'
          value={targetDate}
          onIonChange={(event)=>setTargetDate(event.detail.value!)}
          />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
