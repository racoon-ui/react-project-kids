import React, { useEffect } from 'react';
import axios from 'axios';
import store from 'store';

const FoundRemove = (props) => {
  //const [removelists, setRemovelists] = useState(null);

  useEffect(() => {
    console.log(store.get('token'));
  }, []);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.get('token'),
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    axios.delete(`https://shrouded-escarpment-56668.herokuapp.com/api/stores/${props.foundlistid}`, config);
  };

  return <button onClick={onSubmit}>{props.children}</button>;
};

export default FoundRemove;
