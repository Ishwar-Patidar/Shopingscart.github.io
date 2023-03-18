import React from 'react'
import Arr from './Myjson';
const myResult = () => {

  let Total = 0;

  Arr.map((e) => {
    Total += e.Theory + e.Practical;
    return
  })


  let MaxMarksTotal = 0;
  Arr.map((e) => {
    MaxMarksTotal += e.MaxMarks
  })



  return (
    <div>
      <table className='table table-bordered'>
        <tbody>
          {
            Arr.map((e) => {
              return (<>
                <tr key={e.id}>
                  <td> {e.id}</td>
                  <td> {e.name}</td>
                  <td> {e.MaxMarks}</td>
                  <td> {e.MinThoery}</td>
                  <td> {e.MinPractical}</td>
                  <td> {e.Theory}</td>
                  <td> {e.Practical}</td>
                  <td> {e.Theory + e.Practical} </td>
                </tr>

              </>
              )

            })
          }
          <tr>
            <td colSpan={2}> Maximum Marks </td>
            <td>{MaxMarksTotal}</td>
            <td colSpan={4}></td>
            <td >{Total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default myResult