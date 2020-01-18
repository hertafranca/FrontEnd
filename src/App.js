import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  useEffect(() => {  
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (err) => {
    console.log(err);
  },
  {
    timeout: 30000,
  }
)
}, []);

  return (
   <div id="app">
     <aside>
      <strong>Register</strong>
      <form>
        <div className='input-block'>
          <label htmlFor="">The user from github</label>
          <input name='github_username'id='github_username' required />
        </div>

        <div className='input-block'>
          <label htmlFor="techs">Technologies</label>
          <input name='Techs'id='Techs' required />
        </div>

        <div className="input-group">
          <div className='input-block'>
            <label htmlFor="latitude">latitude</label>
            <input name='latitude'id='latitude' required />
          </div>

          <div className='input-block'>
           <label htmlFor="longitude">longitude</label>
            <input name='longitude'id='longitude' required />
         </div>
         </div>

        <button type="submit">Save</button>
      </form>
     </aside>
     <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59263959?s=460&v=4" alt="Herta Franca" />
            <div className="user-info">
              <strong>Herta Franca</strong>
              <span>Html, Css, JavaScript</span>
            </div>
          </header>
          <p>I'm new pathfinder of this technological world and an eternal learner of the web and mobile technologies.</p>
          <a href="https://github.com/hertafranca">Access the profile in the github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59263959?s=460&v=4" alt="Herta Franca" />
            <div className="user-info">
              <strong>Herta Franca</strong>
              <span>Html, Css, JavaScript</span>
            </div>
          </header>
          <p>I'm new pathfinder of this technological world and an eternal learner of the web and mobile technologies.</p>
          <a href="https://github.com/hertafranca">Access the profile in the github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59263959?s=460&v=4" alt="Herta Franca" />
            <div className="user-info">
              <strong>Herta Franca</strong>
              <span>Html, Css, JavaScript</span>
            </div>
          </header>
          <p>I'm new pathfinder of this technological world and an eternal learner of the web and mobile technologies.</p>
          <a href="https://github.com/hertafranca">Access the profile in the github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59263959?s=460&v=4" alt="Herta Franca" />
            <div className="user-info">
              <strong>Herta Franca</strong>
              <span>Html, Css, JavaScript</span>
            </div>
          </header>
          <p>I'm new pathfinder of this technological world and an eternal learner of the web and mobile technologies.</p>
          <a href="https://github.com/hertafranca">Access the profile in the github</a>
        </li>
      </ul>
     </main>
   </div>
  );
}

export default App;
