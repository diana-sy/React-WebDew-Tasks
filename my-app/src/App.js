import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification.js';
import SideSection from './components/SideSection';

function App() {
// ... API call and response headers
// as a result the data would be avaible

  const newsNotificationData =[
  {
    topic: 'PÄIVÄN TIMANTTI',
    body: 'Tutkija kertoo: Näin sota näkyy meissä edellen '
  },
  {
    topic: 'PÄIVÄN TIMANTTI',
    body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi -Näin hän säästäisi aviopuolisona 19 200 euroa '
  },
  {
    topic : 'MAINOS',
    body: 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!',
    
  }
  ]

  const sideSectionData =[
    { 
      header:"Luetuimmat",
      number: 1,
      name: "Hyvinvointi",
      article: "Ulkonäön takia ei anneta edes mahdollisuutta” – Tällaista on deittimaailmassa rehottava painosyrjintä, jonka vuoksi osa ei pääse treffeille lainkaan "
    },
    { 
     
      number: 2,
      name: "Elokuvat",
      article: "Tamminiemen pesänjakajat ”muutti Suomen poliittisen ilmaston yhdellä iskulla” – Vuonna 1981 Suomessa pohdittiin ankarasti, ketkä olivat kirjan takana, ja nyt tekijät pääsevät ääneen"
    },
    { number: 3,
      name: "Afganistan",
      article: "Toiveet naisten työskentelystä Afganistanissa valumassa hiekkaan – Kabulin pormestarin mukaan naiset kelpaavat vielä vessavahdeiksi"
    },
    { number: 4,
      name: "Helsingin Yliopisto",
      article: "Yliopistojen käyttämän tieto­järjestelmän puutteet ovat ”pöyristyttävää luettavaa” – Opiskelijat vaativat nyt korjauksia ja vauhdilla"
    },
    { number: 5,
      name: "Elokuvat",
      article: "Dyynin ennätyksellinen ensi-iltatulos kertoo pysyvämmästä muutoksesta, uskoo elokuva-ala, mutta teattereissa odotetaan jo paljon suurempaa ensi-iltaa"
    },
    { number: 6,
      name: "HS-analyysi",
      article: "Venäjän vaalit päättyivät Moskovassa farssiin, kun valta­puolueelle sopivaa tulosta hierottiin kiusallisen pitkään"
    },
  ]

  const mainNewsData = [
    { 
      header:"Turvallisuuspolitiikka",
      img: "https://hs.mediadelivery.fi/img/468/70cad02bca939f4a9a1eb2af1361708c.jpg" ,
      title: "Turvallisuuspolitiikka",
      text:"Australian ja Ranskan selkkaus nosti otsikoihin ydinsukellusveneet: Millainen se on ja miten se eroaa dieselsukellusveneestä?",
      place:"Ulkomaat",
      time:"6:52"
    },
    
    { 
      header:"Televisio",
      img: "https://hs.mediadelivery.fi/img/468/0139bbfa7f0341bccba115ea7d5de22e.jpg",
      title: "Televisioarvostelu",
      text:"Prinsessa Dianan 60-vuotispäivän kunniaksi valmistunut dokumentti on tavanomainen, mutta kerrankin uhripuhe jää vähemmälle",
      place:"Kulttuuri",
      time:"8:49"
    },
    { 
      header:"",
      img: "https://hs.mediadelivery.fi/img/468/32791fafa7f35c2d5e3c4eb37ad02ec1.jpg",
      title: "Kannabis",
      text:"Ruotsin ensimmäinen kannabisyritys valmistautuu jo laillistamiseen: ”Miksi annamme rahaa rikollisille?”",
      place:"Ulkomaat",
      time:"7:09"
    },

  ]


  return (
    <div>
     <Header/>

     {
       newsNotificationData.map(element=> <NewsNotification topic={element.topic} body={element.body}/>)
     }
     {/* <NewsNotification topic = 'PÄIVÄN TIMANTTI' body =' Tutkija kertoo: Näin sota näkyy meissä edellen'/>
     <NewsNotification topic = 'PÄIVÄN TIMANTTI' body= ' Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi -Näin hän säästäisi aviopuolisona 19 200 euroa'/>
     <NewsNotification topic = 'MAINOS' body=' Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'/> */}
      <div className="paper">

        <div className ="mainSection">{
      mainNewsData.map(element=> <MainSection header={element.header} img={element.img}
          title={element.title} text={element.text} place={element.place} time={element.time}/>)
      }</div>

      <div className ="sideSection">
     {
       sideSectionData.map(element=> <SideSection header= {element.header} number={element.number} newsTopic={element.name} article={element.article}/>)
     }</div>

     </div>

     </div>
  );
}

export default App;
