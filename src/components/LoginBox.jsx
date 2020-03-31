import React from 'react';
import axios from 'axios';

const LoginBox = props => {
  //const [session_id, setSession_id] = useState(null);
  //const [session_token, setSession_token] = useState(null);

  const loginBtn = () => {
    axios
      .post('https://shrouded-escarpment-56668.herokuapp.com/api/users/login', {
        email: 'dongdong@example.com',
        password: '12345678',
      })
      .then(function(response) {
        sessionStorage.setItem('token', response.data.token);
        console.log(response.data._id, response.data.token);
        if (response.data.token) return console.log('success');
        else return console.log('fail');
      })
      .catch(function(error) {
        console.log(error);
        return 'fail';
      });
  };
  const logOutBtn = () => {
    sessionStorage.removeItem('token');
  };

  if (props.type === 'in') {
    return <button onClick={loginBtn}>{props.btntext}</button>;
  } else if (props.type === 'out') {
    return <button onClick={logOutBtn}>{props.btntext}</button>;
  }
};

export default LoginBox;
