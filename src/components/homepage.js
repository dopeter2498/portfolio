import '../styles/homepage.css';
import { useEffect } from 'react';

export default function Homepage() {
  useEffect(()=>{
    document.title = 'Peter Do\'s website';
    document.body.style.backgroundColor = '#282828';
    document.body.style.color = ['#ebdbb2'];
  },[])
  return (
    <div className='header'>
      <div>
        <h1><p>Peter Do</p></h1>
      </div>
      <div className='description'>
        <p>Hello! I'm Peter and I've recently graduated with a B.S. in Computer Science at CSU East Bay. I made this website to show a few of the projects I have worked on.</p> 
      </div>
    </div>
  );
}
