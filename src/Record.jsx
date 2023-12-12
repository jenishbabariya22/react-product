import React, { useState } from 'react'


function Record({ allrecord }) {

  const [record, setRecord] = useState([]);


  const mobile = () => {
    let ans = allrecord.filter((val) => {
      return val.category === 'mobile'
    })
    {
      setRecord(ans)
      ans.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
          </tr>
        )
      })
    }
    console.log(ans)
  }
  const electronic = () => {
    let ans = allrecord.filter((val) => {
      return val.category === 'electronics'
    })
    {
      setRecord(ans)
      ans.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
          </tr>
        )
      })
    }
    console.log(ans)
  }
  const cloth = () => {
    let ans = allrecord.filter((val) => {
      return val.category === 'cloth'
    })
    {
      setRecord(ans)
      ans.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
          </tr>
        )
      })
    }
    console.log(ans)
  }
  const food = () => {
    let ans = allrecord.filter((val) => {
      return val.category === 'food'
    })
    {
      setRecord(ans)
      ans.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
          </tr>
        )
      })
    }
    console.log(ans)
  }
  const all = () => {
    let ans = allrecord.filter((val) => {
      return val
    })
    {
      setRecord(ans)
      ans.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
          </tr>
        )
      })
    }
  }


  return (
    <center>
      <h1>All Record</h1>
      <button type="button" className="btn btn-primary" onClick={mobile} style={{ margin: "20px" }}>mobile</button>
      <button type="button" className="btn btn-secondary" onClick={electronic} style={{ margin: "20px" }}>electronics</button>
      <button type="button" className="btn btn-success" onClick={cloth} style={{ margin: "20px" }}>cloth</button>
      <button type="button" className="btn btn-danger" onClick={food} style={{ margin: "20px" }}>food</button>
      <button type="button" className="btn btn-warning" onClick={all} style={{ margin: "20px" }}>all</button>
      <br></br><br></br>
      <table className='table' >
        <thead >
          <tr key={1}  >
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((item) => {
              return (
                <tr key={item.id} >
                  <td style={{ background: item.color }} >{item.id}</td>
                  <td style={{ background: item.color }}>{item.name}</td>
                  <td style={{ background: item.color }}>{item.price}</td>
                  <td style={{ background: item.color }}>{item.qty}</td>
                  <td style={{ background: item.color }}>{item.category}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </center>
  )
}
export default Record
