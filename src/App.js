import { useState } from 'react';
import './App.css';
import Arrow from './components/arrow-function';
import FunctionDeclaration from './components/function-declaration';
import FunctionExpression from './components/function-expression';


function App() {
  const [arrow, setArrow] = useState(false)
  const [funDec, setFunDec] = useState(false)
  const [funEx, setFunEx] = useState(false)

  const fakeContacts = [
    {
      "dob": "1981-11-04",
      "job": "Textiles Specialist",
      "last": "Jenkins",
      "name": "Mejia",
      "email": "mejia@comstruct.com",
      "phone": "6497286718",
      "salary": "77,881",
      "contact": true,
      "freelance": false
    },
    {
      "dob": "1961-11-18",
      "job": "Content Manager",
      "last": "Ward",
      "name": "Tammie",
      "email": "tammie@zosis.com",
      "phone": "12131811073",
      "salary": "138,364",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1971-02-15",
      "job": "Data Scientist",
      "last": "Guerrero",
      "name": "Hollie",
      "email": "hollie@geekular.com",
      "phone": "17858548913",
      "salary": "73,476",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1979-11-02",
      "job": "Social Media Manager",
      "last": "Garrett",
      "name": "Salinas",
      "email": "salinas@manufact.com",
      "phone": "7940250154",
      "salary": "84,856",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1962-11-27",
      "job": "Technical Writer",
      "last": "Whitfield",
      "name": "Roth",
      "email": "roth@apexia.com",
      "phone": "19278975049",
      "salary": "154,448",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1966-07-02",
      "job": "Technical Writer",
      "last": "Roy",
      "name": "Joyce",
      "email": "joyce@olucore.com",
      "phone": "8706607064",
      "salary": "76,910",
      "contact": true,
      "freelance": false
    },
    {
      "dob": "1950-07-02",
      "job": "Data Scientist",
      "last": "Hodge",
      "name": "Bridges",
      "email": "bridges@qnekt.com",
      "phone": "3567400698",
      "salary": "145,144",
      "contact": true,
      "freelance": false
    },
    {
      "dob": "1992-01-18",
      "job": "Software Engineer",
      "last": "Brock",
      "name": "Adams",
      "email": "adams@digifad.com",
      "phone": "15891742970",
      "salary": "81,834",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1987-07-12",
      "job": "Accountant",
      "last": "Rogers",
      "name": "Dianne",
      "email": "dianne@extro.com",
      "phone": "19386393278",
      "salary": "120,894",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1993-06-29",
      "job": "Accountant",
      "last": "Salinas",
      "name": "Phyllis",
      "email": "phyllis@deminimum.com",
      "phone": "14429924832",
      "salary": "181,058",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1972-03-30",
      "job": "Software Tester",
      "last": "Sawyer",
      "name": "Harriet",
      "email": "harriet@aeora.com",
      "phone": "10390637729",
      "salary": "168,753",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1982-11-27",
      "job": "Technical Writer",
      "last": "Washington",
      "name": "Lea",
      "email": "lea@accruex.com",
      "phone": "7422205437",
      "salary": "43,618",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1976-12-17",
      "job": "Technical Writer",
      "last": "Thomas",
      "name": "Gardner",
      "email": "gardner@zizzle.com",
      "phone": "13265028124",
      "salary": "116,358",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1957-02-25",
      "job": "Data Scientist",
      "last": "Russell",
      "name": "Lindsay",
      "email": "lindsay@spacewax.com",
      "phone": "11332556991",
      "salary": "65,812",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1964-03-05",
      "job": "Content Manager",
      "last": "Leon",
      "name": "Middleton",
      "email": "middleton@exospace.com",
      "phone": "16676304781",
      "salary": "157,326",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1952-06-02",
      "job": "Software Engineer",
      "last": "Leach",
      "name": "Valeria",
      "email": "valeria@hivedom.com",
      "phone": "5710103837",
      "salary": "94,274",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1970-03-13",
      "job": "Physician",
      "last": "Pittman",
      "name": "Nicholson",
      "email": "nicholson@pivitol.com",
      "phone": "15875339073",
      "salary": "73,647",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1980-02-27",
      "job": "IT Manager",
      "last": "Bean",
      "name": "Gail",
      "email": "gail@translink.com",
      "phone": "13528937206",
      "salary": "97,892",
      "contact": false,
      "freelance": false
    },
    {
      "dob": "1973-06-19",
      "job": "Software Tester",
      "last": "Oneil",
      "name": "Rush",
      "email": "rush@netplode.com",
      "phone": "1891854112",
      "salary": "116,800",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1952-12-21",
      "job": "Film Producer",
      "last": "Galloway",
      "name": "Alana",
      "email": "alana@filodyne.com",
      "phone": "10667647099",
      "salary": "186,148",
      "contact": true,
      "freelance": false
    },
    {
      "dob": "1977-12-02",
      "job": "Video Editor",
      "last": "Wilcox",
      "name": "Henry",
      "email": "henry@rodeocean.com",
      "phone": "13451938923",
      "salary": "178,275",
      "contact": true,
      "freelance": true
    },
    {
      "dob": "1960-12-11",
      "job": "Technical Writer",
      "last": "Schmidt",
      "name": "Oneil",
      "email": "oneil@gogol.com",
      "phone": "18620621591",
      "salary": "176,930",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1962-10-31",
      "job": "Physician",
      "last": "Robles",
      "name": "Rene",
      "email": "rene@flyboyz.com",
      "phone": "5785199853",
      "salary": "83,985",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1974-08-17",
      "job": "Content Manager",
      "last": "Riley",
      "name": "Collier",
      "email": "collier@inquala.com",
      "phone": "18558853699",
      "salary": "66,490",
      "contact": false,
      "freelance": false
    },
    {
      "dob": "1971-03-29",
      "job": "Accountant",
      "last": "Hood",
      "name": "Kari",
      "email": "kari@essensia.com",
      "phone": "5158089107",
      "salary": "53,610",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1966-06-21",
      "job": "Data Scientist",
      "last": "Berger",
      "name": "Tameka",
      "email": "tameka@utara.com",
      "phone": "1258286594",
      "salary": "180,340",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1965-11-10",
      "job": "Data Scientist",
      "last": "Fischer",
      "name": "Rae",
      "email": "rae@wrapture.com",
      "phone": "15057010888",
      "salary": "82,485",
      "contact": false,
      "freelance": false
    },
    {
      "dob": "1967-03-17",
      "job": "Film Producer",
      "last": "Harmon",
      "name": "Williamson",
      "email": "williamson@prismatic.com",
      "phone": "4907130620",
      "salary": "148,012",
      "contact": false,
      "freelance": false
    },
    {
      "dob": "1985-11-25",
      "job": "Neurosurgeon",
      "last": "Hyde",
      "name": "Humphrey",
      "email": "humphrey@satiance.com",
      "phone": "13712514600",
      "salary": "144,106",
      "contact": false,
      "freelance": true
    },
    {
      "dob": "1965-08-13",
      "job": "Textiles Specialist",
      "last": "David",
      "name": "Angelina",
      "email": "angelina@dentrex.com",
      "phone": "15964044528",
      "salary": "183,862",
      "contact": true,
      "freelance": false
    },
    {
      "dob": "1953-12-08",
      "job": "Content Manager",
      "last": "Hancock",
      "name": "Danielle",
      "email": "danielle@ersum.com",
      "phone": "7217037262",
      "salary": "124,975",
      "contact": false,
      "freelance": false
    }
  ]

  return (
    <main className="App">
      <h1>Hey Patrick</h1>
      <p>Testing your theory about how the component function is written; seems like that wasn't the issue.</p><p>It doesn't seem to make a difference how the function is declared/exported as long as the syntax is valid. 🤷🏻‍♀️</p>
      <p>I prefer arrow function syntax for whatever reason so I use the Emmet shortcut 'sfc' (for 'stateless function component').</p>
      <p>The states determining which lists are displayed are housed in the parent element and toggled with the button clicks.</p>
      <p>The states that change the styling of each contact on click are housed in the child elements.</p>
      <section className='data-display'>
        <button type='button' onClick={() => setArrow(!arrow)}>Arrow Function</button>
        <button type='button' onClick={() => setFunDec(!funDec)}>Function Declaration</button>
        <button type='button' onClick={() => setFunEx(!funEx)}>Function Expression</button>
      </section>
      <section className='data-display'>
        {arrow && <div className='arrow'>
          {fakeContacts.map((contact, key) => {
            return <Arrow key={key} data={contact} />
          })}
        </div>}
        {funDec && <div className='funDec'>
          {fakeContacts.map((contact, key) => {
            return <FunctionDeclaration key={key} data={contact} />
          })}
        </div>}
        {funEx && <div className='funEx'>
          {fakeContacts.map((contact, key) => {
            return <FunctionExpression key={key} data={contact} />
          })}
        </div>}

      </section>


    </main>
  );
}

export default App;
