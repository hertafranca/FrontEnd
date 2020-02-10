import React, { useState, useEffect } from "react";
import api from './Services/api';

import './EditDev.css';

export default function EditDev({ history }) {
  const { dev } = history.location.state; 

  const [name, setName] = useState(dev.name);
  const [techs, setTechs] = useState(dev.techs.join(', '));
  const [bio, setBio] = useState(dev.bio);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
    }, []);

    async function handleEditDev(e) {
      e.preventDefault();
      const data = { name, techs, bio, latitude, longitude }
      try {
        await api.put(`/devs/${dev._id}`, data);
        history.goBack();
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <edit>
        <form onSubmit={handleEditDev}>
          <div className='input-block'>
            <label htmlFor="">The User Name</label>
            <input 
            name='name'
            id='name' 
            required 
            value={name}
            onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor="techs">Technologies</label>
            <input 
            name='Techs'
            id='Techs' 
            required
            value={techs}
            onChange={e => setTechs (e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor="bio">Bio</label>
            <input 
            name='Bio'
            id='Bio' 
            required
            value={bio}
            onChange={e => setBio(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className='input-block'>
              <label htmlFor="latitude">latitude</label>
              <input 
              type="number" 
              name='latitude'
              id='latitude' 
              required
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className='input-block'>
            <label htmlFor="longitude">longitude</label>
              <input
              type="number" 
              name='longitude'
              id='longitude' 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)} 
              />
          </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </edit>
    );
}