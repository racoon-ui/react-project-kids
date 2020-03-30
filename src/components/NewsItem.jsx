import React from 'react';

const NewsItem = ({ article }) => {
  const { name, address, phone, hour } = article;
  return (
    <div>
      {name}
      {address}
      {phone}
      {hour}
    </div>
  );
};

export default NewsItem;
