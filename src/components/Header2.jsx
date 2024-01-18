import React from 'react'

export default function Header2(props) {

  return (
    <>
    

    <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
      <div className="logo d-flex member-img" >
        <div className='d-flex' style={{flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>

       
      <img className="img-fluid"
       style={{alignSelf:"center"}}
        src="https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_icon.png?1704525943"
        alt="Chairman"
        
      />
     <div class="">
       <h4 style={{color:'white',fontSize:7,textAlign:"center"}} >Shri Siddaramaiah</h4>
       <p style={{color:'white',fontSize:7,textAlign:"center",marginTop:-10,fontWeight:"bold"}}> Chairman</p>
</div>
      </div>
      
      <div className='d-flex align-items-center'>
      <a href="/">
        <h1 style={{fontSize:20,marginLeft:20}}>Kolar Nirmithi Kendra<span>.</span></h1>
      </a>
      </div>
    </div>

        
  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/" class="active">Home</a></li>
            <li><a href="about">About</a></li>
            <li class="dropdown"><a href="services"><span>Services</span> <i
              class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="training">Training</a></li>
            
            <li><a href="production">Production</a></li>
            <li><a href="construction">Construction</a></li>
          
          </ul>
        </li>
            <li><a href="projects">Projects</a></li>
            <li><a href="administration">Administration</a></li>
            <li class="dropdown"><a href="departments"><span>Departments</span> <i
                  class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="departments">Civil</a></li>
                
                <li><a href="#">Etc</a></li>
                
              </ul>
            </li>
            <li><a href="rti">RTI</a></li>
            <li><a href="meetings">Meetings</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>
        <div className="logo d-flex member-img" style={{marginLeft:20}}>
        <div className='d-flex' style={{flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>

       
      <img className="img-fluid"
       style={{alignSelf:"center"}}
        src="https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_icon.png?1704525943"
        alt="Chairman"
        
      />
     <div class="">
       <h4 style={{color:'white',fontSize:7,textAlign:"center"}} >Shri Siddaramaiah</h4>
       <p style={{color:'white',fontSize:7,textAlign:"center",marginTop:-10,fontWeight:"bold"}}> Executive Chairman</p>
</div>
      </div>
      
      
    </div>
      </div>
    </header>
      <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-2.jpg")'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>{props.name}</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>{props.name}</li>
          </ol>
        </div>
      </div>
    </main>
    </>
  )
}
