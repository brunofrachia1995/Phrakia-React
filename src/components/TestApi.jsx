import React, { useEffect } from 'react'

export default function TestApi() {
   useEffect(() => {
     fetch('https://api.ipbase.com/v1/json/', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: {id: 128, name:'Bruno'}, 
     })
         .then(response => response.json ())
         .then(data => {
             console.log('Success:', data);
         })
         .catch ((error) => {
             console.error('Error:', error);
         })
         .finally(() => {
             console.log('fin');
         });
         
   }, []);
   

return (
    <div>TestApi</div>
)
}
