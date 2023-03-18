import React from 'react'
import Data from './Data.json';
const JSoops = () => {

  console.log(Data.string);
  const tData = Data.map(event => {
    const gHobbies = event.Game.map((e) => {
      return e.Best;
    })
    return <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.Name}</td>
      <td>{event.Age}</td>
      <td>{event.Class}</td>
      <td>{event.language}</td>
      <td>{gHobbies}</td>
    </tr>
  })

  return (
    <>
      <div className="container">
        <table className='table table-striped text-center'>
          <thead>
            <tr>
            <th className='bg-warning text-danger' colSpan={6}>Student Detail</th>
            </tr>
          </thead>
          <thead>
            <tr>
            <th>Sno</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SUBJECT</th>
            <th>LANGUAGE</th>
            <th>GAME</th>
            </tr>
          </thead>
          <tbody>
            {tData}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default JSoops