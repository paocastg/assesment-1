import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setInfo(res.data));
  }, []);

  return (
    <div className="container mx-auto py-3">
      <div>
        <div className="row">
          <div className="col">
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <p> ${info.price}</p>
          </div>
          <div className="col-md-7">
            <img
              alt=""
              width={300}
              height={400}
              src={info.image}
              class="img-responsive img-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
