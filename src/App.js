import React, {useState, useEffect} from 'react';
import api from './Services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
function App({ history }) {
  const [devs, setDevs] = useState([]);
 
  useEffect(() => {
   async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
   } 
   
   loadDevs();
  }, [])

  
  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs,response.data]);
  }

  async function deleteDev(id) {
    try {
      await api.delete(`/devs/${id}`);
      const devsList = devs.filter(dev => dev._id != id);
      setDevs(devsList);
    } catch (error) {
     console.log(error); 
    }
  }

  return (
   <div id="app">
     <aside>
      <strong>Register</strong>
      <DevForm onSubmit={handleAddDev} />
     </aside>

     <main>
      <ul>
        {devs.map(dev =>(
          <DevItem key={dev._id} dev={dev} onClick={() => deleteDev(dev._id)} history={history} />
        ))}
      </ul>
     </main>
   </div>
  );
}

export default App;
