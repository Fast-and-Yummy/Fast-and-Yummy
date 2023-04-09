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
    <div className='admin'>
    <div className="screen-1">

  <div class="email">
 
    <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    <div class="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
     
      
    </div>
  </div>
  <div class="password">
 
    <div class="sec-2">
      <ion-icon name="lock-closed-outline"></ion-icon>
    
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <ion-icon class="show-hide" name="eye-outline"></ion-icon>
    </div>
  </div>
  
  {name === 'ghchiw' && password === 'ghchiw' && <Link className='login' to="/welcomeAdmin">Go to Welcome</Link>}
  <div class="footer"><span>Forgot Password?</span></div>
</div>
</div>
</form>
  );
};

export default NameChecker;