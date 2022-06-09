import React, { useEffect, useState } from 'react'

export default function TestPromise() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {

    setLoading();
    setError();
    setResultado([]);

    const pagara = new Promise((res, rej) => {

      setTimeout(() => {
        res([{id: 'w212' , monto: 150}, 
             {id: 's111' , monto: 50}, 
            ])
        /* rej('no abono') */
      }, 3000);

    });

    pagara.then((result) => {
      setResultado(result);
    })

      .catch((error) => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

    resultado.map(item => (
    <>
    <p> id de pago: {item.id} </p> <p> Monto: {item.monto} </p>
    </>
    ))
    


  return (
    <>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Hubo un error en el pago'}</div>
      <div>
        {/* resultado && 
      (
      <>
      <p>Monto: {resultado.monto}</p> 
      <p>Id: {resultado.id}</p>
      </>
      ) */}
      {resultado && resultado.map(item => (
    <>
    <p> id de pago: {item.id} </p> 
    <p> Monto: {item.monto} </p>
    </>
    ))}
      </div>

    </>
  )
} 
