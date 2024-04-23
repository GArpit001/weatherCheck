import React from 'react'

const card = (props) => {

  const { dtText  , weather , temp , windSpeed } = props
  // console.log(weather[0].main)
  // console.log(temp)

  // console.log(weather)

  // let time = new Date(dtText).toGMTString()
  // let hour = time.getHours()

  let time = new Date(dtText)
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  let date = time.toLocaleDateString()



  if (hour > 12) {
    hour = hour - 12
  } else if (hour == 0) {
    hour = 12
  } else {
    hour
  }

  return (
    <div style={{ width: "320px" }}>
      <div className="col">
        <div className="card h-100">
          <div className="img d-flex justify-content-center">

          <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} className="card-img-top" style={{width:"100px"}} alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{weather[0].main}</h5>
            {/* {
              weather.map((val)=>{
                return (
                  <h5 className="card-title" key={val.id}>{val.main}</h5>  
                )
              })
            } */}
            <p className="card-text">{weather[0].description.toUpperCase()}</p>
            <p className="card-text">Temperature -- {temp.temp} <sup>oC</sup></p>
            <p className="card-text">Wind Speed -- {windSpeed.speed}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{`${hour}:${minute == 0 ? '00' : minute}:${second == 0 ? '00' : second} ${date}`}</small>
            {/* <small className="text-body-secondary">{`${hour > 12 ? hour - 12 : hour}:${minute}:${second} -- ${date}`}</small> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default card
