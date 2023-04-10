import React,{useState} from 'react';
import {Link } from 'react-router-dom';


const NameChecker=()=>{


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    
   
  }

  return (
    <form  onSubmit={handleSubmit}> 
    <h1>page admin ya 3amo</h1>
    <div className='admin mt-96 ' >
    <div className="screen-1">

  <div className="email">
 
    <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    <div className="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
     
      
    </div>
  </div>
  <div className="password">
 
    <div className="sec-2">
      <ion-icon name="lock-closed-outline"></ion-icon>
    
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <ion-icon className="show-hide" name="eye-outline"></ion-icon>
    </div>
  </div>
  
  {name === 'admin' && password === 'admin' && <Link className='login' to="/welcomeAdmin">Go to Welcome</Link>}

</div>
</div>
</form>
  );
};

export default NameChecker;