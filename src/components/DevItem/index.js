import React, { useState } from 'react';
import { MdDelete, MdDeleteForever, MdClear, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import api from "../../Services/api";

import './styles.css';

function DevItem({ dev, onClick, history }) {
  const [del, confirmDel] = useState(false);
  const [color, setColor] = useState('purple');
  const [color2, setColor2] = useState ("#7d40e7");
    return (
        <li className="dev-item">
            <header>
              <div>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(',')}</span>
                </div>
              </div>
              {del
                ?
                <div>
                  <MdDeleteForever size={24} color={color} onMouseMove={() => setColor('red')} onMouseOut={() => setColor('purple')} onClick={onClick} />  
                  <MdClear size={24} color={color2} onMouseMove={() => setColor2('red')} onMouseOut={() => setColor2("#7d40e7")} onClick={() => confirmDel(false)}/>
                </div>
                :
                <div>
                  <MdDelete size={24} color={color} onMouseMove={() => setColor('red')} onMouseOut={() => setColor('purple')} onClick={() => confirmDel(true)} />
                  <MdEdit size={24} color={color2} onMouseMove={() => setColor2('red')} onMouseOut={() => setColor2("#7d40e7")} onClick={() => history.push("/edit", {dev})} />
                </div>
              }
            </header>
            <p>{dev.bio}.</p>
            <a href={`https://github.com/${dev.github_username}`}>Access the profile in the github</a>
          </li>
    );
}

export default DevItem;