import React from 'react'
// import video1 from "../assets/video/video1.mp4"
// import video2 from "../assets/video/video2.mp4"





const Home = () => {






  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{minHeight:"541px"}}>
    <div className="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"30rem"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://plus.unsplash.com/premium_photo-1661963896259-7b183a79005c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"30rem"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"30rem"}} alt="..."/>
      </div> 
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"30rem"}} alt="..."/>
      </div>
      {/* <div className="carousel-item" style={{backgroundColor:"red" , display : "flex" , justifyContent:"center"}}>

      <video id="bannerVideo" style={{height:"30rem"}} autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video> */}

        {/* <video src={video1} style={{height:"30rem"}}  controls="controls" autoplay="true" loop ></video> */}

      {/* </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

    <h2>Check Your City weather</h2>

        <h2>Current Weather</h2>

    {/* <p>5 days-forcast</p> */}

    
  </div>
  )
}

export default Home
