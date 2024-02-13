import React, { useEffect, useState } from 'react';

function AsyncRequest() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch('/kotik.jpeg') //корень - это директория public!!!
      .then((response) => setImage(response));
  }, []);

  return (
    <div>{image ? <img src={image.url} alt="" /> : <h2>Нет картинок</h2>}</div>
  );
}

export default AsyncRequest;
