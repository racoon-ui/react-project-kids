import React, { useEffect } from 'react';
import axios from 'axios';
import store from 'store';

const FoundRemove = (props) => {
  //const [removelists, setRemovelists] = useState(null);

  return <button onClick={onSubmit}>{props.children}</button>;
};

export default FoundRemove;
