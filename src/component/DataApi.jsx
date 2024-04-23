import React, { useEffect, useState } from 'react'
import Card from "./card.jsx"


const DataApi = () => {
  const [apiData, setApiData] = useState([])

  const getdataforApi = async () => {
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=Etawah,In&appid=d8bf74400b644252da4465f85ceb6179&units=metric"


    const getData = await fetch(url)
    const data = await getData.json()
    // console.log(data)

    // console.log(data.list)

    let dataList = data.list
    setApiData(dataList)

    console.log(apiData)

    // let a = dataList[0].dt_txt
    // let dates = new Date(1708951353)

    // console.log(dates.getHours())
    // console.log(dates.getMinutes())
    // console.log(dates.getSeconds())



    
    // console.log(dates)
    // console.log(dates.toGMTString())
    // console.log(dates.toLocaleDateString())

    // console.log(dates.getHours()-12)
    // console.log(dates.getMinutes())
    // console.log(dates.getSeconds())








  }

  useEffect(() => {
    getdataforApi()

  }, [])




  return (
    <>
      <div style={{display:"flex" , flexWrap:"wrap" ,gap:"12px" , padding:"12px" }} >
        {
          //  console.log(apiData)

          apiData.map((val,index) => {
            return (
              <div key={index}>
    
                <Card dtText={val.dt_txt} temp={val.main} windSpeed={val.wind} weather={val.weather} />
              </div>

            )
          })

        }
      </div>
    </>
  )
}

export default DataApi
