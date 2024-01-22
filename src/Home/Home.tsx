import Navbar from './Navbar';
import Start from './Start';
import './Home.scss'
import Messages from './Messages';
import { questionsType } from './interfce'

const Questions: questionsType[] = [
  {
    cityName: "Marrakech",
    fullName: "Ouado Zaki",
    distance: '20m',
    message: "Where are the best places to experience local culture?"
  },
  {
    cityName: "Marrakech",
    fullName: "Jardin Majorelle",
    distance: '10m',
    message: "What is the history behind Jardin Majorelle?"
  },
  {
    cityName: "Marrakech",
    fullName: "Koutoubia Mosque",
    distance: '15m',
    message: "Can you recommend good restaurants near Koutoubia Mosque?"
  },
  {
    cityName: "Marrakech",
    fullName: "Saadian Tombs",
    distance: '8m',
    message: "Tell me more about the Saadian Tombs and their significance."
  }, {
    cityName: "Marrakech",
    fullName: "Souad EL",
    distance: '8m',
    message: "market??????"
  }, {
    cityName: "Marrakech",
    fullName: "Saiid Salman",
    distance: '8m',
    message: "Where can i find the Mosquee"
  },
];


function Home() {
  return (
    <main style={{ flexDirection: 'column' }}>
      <Navbar />
      <section>
        <div className='questions'>
          {
            Questions.length > 0 ?
              <>
                <div className="head">
                  <h1>{'Taha Q&A'}</h1>
                  <div className={'tagQuestions'}>{`Questions ${4}`}</div>
                </div>
                <Messages Questions={Questions} />
              </> :
              <Start />
          }

        </div>
      </section>
    </main>
  )
}

export default Home
