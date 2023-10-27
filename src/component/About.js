import React from 'react'

const About = () => {
  return (
    <>
<div className="my-4 px-4">
  <h2 className="fw-bold h-font text-center">About Us</h2>
  
  
  <p className="text-center mt-2 fw-bold">Disco Noor Music band is Started in 1985 <br/>
  By Mr. Noor Mohammed In Early  Age</p>
</div>

<div className="container">
  <div className="row justify-content-between align">
  <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
    <h3 className="mb-3 h-font">Music</h3>
    <p>
    Noor Mohammed's family had no connection with music but then he founded Noor Band in the early 90s and ran it well.
In the year 2000, his 3 sons took over the shop and took it to great heights, which still exists today.
      
      </p>
      </div>
 <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
        <img src="images/noor.jpg" className="noor"/>

      </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-4 px-4">
      <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
        <img src="abo/customers.svg" width="70px"/>
        <h4 className="mt-3">5000+ Customers</h4>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4 px-4">
      <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
        <img src="abo/rating.svg" width="70px"/>
        <h4 className="mt-3">210 + Reviews</h4>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4 px-4">
      <div className="bg-white rounded shadow p-4 border-top border-4 text-center box">
        <img src="abo/staff.svg" width="70px"/>
        <h4 className="mt-3">300 + Staff</h4>
      </div>
    </div>
  </div>
</div>

<h3 className="my-5 fw-bold h-font text-center">MANAGEMENT TEAM</h3>
<div className="container">
  <div className="row ">
      <div class="col-lg-12 bg-white shadow p-4 rounded d-lg-flex d-sm-block text-center">
            <div class="col-lg-4 mb-3">
                  <img src="images/shakir.Jpeg"className="pic2" alt="" />  
                  <h5 class="mt-2 h-font">Shakir Mohammed</h5>  
           </div>
            <div class="col-lg-4 mb-3">
                  <img src="images/zakir.Jpeg"className="pic2" alt="" />   
                  <h5 class="mt-2 h-font">Mohammed Zakir</h5> 
           </div>
            <div class="col-lg-4 mb-3">
                  <img src="images/zahir.Jpeg"className="pic2" alt="" /> 
                  <h5 class="mt-2 h-font">Mohammed Zahir</h5>   
           </div>
        
        </div>
 </div>


</div>

<div class="container-fluid bg-white mt-5 text-center shadow">
    <div class="row">   

        <div class="col-lg-4 p-4">
         <h3 class="h-font fw-bold fs-3 mb-2">Disco Noor Music Band</h3>
            <p> Disco Noor Music Band Offering  Our Talented Musicians and Voaclists Are Here to Set the Perfect Mood For Your Wedding. From Smoothing Meloadies During The Ceremony to Upbeat Tunes For reception, We Cover It All </p>
         </div>

        <div class="col-lg-4 p-4">
        <h5 class="mb-3">Links</h5>
        <a href="/" class="d-inline-block mb-2 text-dark text-decoration-none">Home</a><br/>
        <a href="/" class="d-inline-block mb-2 text-dark text-decoration-none">Facilities</a><br/>
        <a href="/" class="d-inline-block mb-2 text-dark text-decoration-none">Contact Us</a><br/>
        <a href="/" class="d-inline-block mb-2 text-dark text-decoration-none">About</a>
        </div>

        <div class="col-lg-4 p-4">
             <h5 class="mb-3">Follow us </h5>
             <a  href="/" class="d-inline-block text-dark text-decoration-none mb-2 "><i class="bi bi-twitter me-1"></i>  Twitter</a><br/>
             <a  href="https://www.facebook.com/p/Disco-Noor-Music-Band-100064898140080/" class="d-inline-block text-dark text-decoration-none mb-2 "><i class="bi bi-facebook me-1"></i>  Facebook</a><br/>
             <a  href="https://www.instagram.com/disconoorbandkota/?igshid=MzRlODBiNWFlZA%3D%3D" class="d-inline-block text-dark text-decoration-none mb-2 "><i class="bi bi-instagram me-1"></i>  Instagram</a><br/>
             <a  href="https://www.youtube.com/@TheFarhannazir" class="d-inline-block text-dark text-decoration-none"><i class="bi bi-youtube me-1"></i>  Youtube</a>
         </div>
</div>
</div>   


<h6 class="text-center bg-dark text-white p-3 m-0">&copy;All Right Reserved Disco Noor Music Band</h6>
  
    </>
  )
}

export default About
