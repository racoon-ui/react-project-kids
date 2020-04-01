import React, { useState } from 'react';
import Icon from '../common/Icon';
import { TABLE, DIV } from '../common/Tag';

const ListItem = props => {
  const [listdata] = useState(props.data);
  return (
    <DIV float="left" width="" padding="3% 1%">
      <TABLE align="left" padding="7px 5px" titlesize="24px" titlecolor="#d13030" subsize="16px">
        <caption>{listdata.name}</caption>
        <tbody>
          <tr>
            <th>
              <Icon type="IoMdPin" color="#d13030" />
              주소
            </th>
            <td>{listdata.address}</td>
          </tr>
          <tr>
            <th>
              <Icon type="MdPhone" color="#d13030" />
              전화
            </th>
            <td>{listdata.phone}</td>
          </tr>
          <tr>
            <th>
              <Icon type="IoIosTime" color="#d13030" />
              영업시간
            </th>
            <td>{listdata.hour}</td>
          </tr>
        </tbody>
      </TABLE>
    </DIV>
  );
};

export default ListItem;
