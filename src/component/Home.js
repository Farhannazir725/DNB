import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/autoplay';



const Home = () => {
   
  return (
    <>
    <div className='container-fluid col-lg-12 d-block my-0 px-lg-4 mt-1 mb-2  '>
      
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
    spaceBetween={30}
    effect="fade"
    loop= "true"
    autoplay= {true}
    disbleOnInteraction = {false} 
  >
    <SwiperSlide><img src="images/bg.jpg" alt="" className="w-100 p-4 rounded d-block  " /></SwiperSlide>
    <SwiperSlide><img src="images/bg1.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
    <SwiperSlide><img src="images/bg3.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
    <SwiperSlide><img src="images/bg4.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
    <SwiperSlide><img src="images/bg6.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
  </Swiper>
  </div>
  
   
  <div class="container-fluid bg-white shadow mt-2 text-center">
    <div class="row">   

        <div class="col-lg-4 p-4">
         <h3 class="h-font fw-bold fs-3 mb-2">Disco Noor Music Band</h3>
            <p>Disco Noor Music Band Offering  Our Talented Musicians and Voaclists Are Here to Set the Perfect Mood For Your Wedding. From Smoothing Meloadies During The Ceremony to Upbeat Tunes For reception, We Cover It All </p>
         </div>

        <div class="col-lg-4 p-4">
        <h5 class="mb-3">Links</h5>
        <a href="/" className="d-inline-block mb-2 text-dark text-decoration-none">Home</a><br/>
        <a href="/" className="d-inline-block mb-2 text-dark text-decoration-none">Facilities</a><br/>
        <a href="/" className="d-inline-block mb-2 text-dark text-decoration-none">Contact Us</a><br/>
        <a href="/" className="d-inline-block mb-2 text-dark text-decoration-none">About</a>
        </div>

        <div className="col-lg-4 p-4">
             <h5 className="mb-3">Follow us </h5>
             <a  href="/" class="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-twitter me-1"></i>  Twitter</a><br/>
             <a  href="https://www.facebook.com/p/Disco-Noor-Music-Band-100064898140080/" className="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-facebook me-1"></i>  Facebook</a><br/>
             <a  href="https://www.instagram.com/disconoorbandkota/?igshid=MzRlODBiNWFlZA%3D%3D" className="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-instagram me-1"></i>  Instagram</a><br/>
             <a  href="https://www.youtube.com/@TheFarhannazir" className="d-inline-block text-dark text-decoration-none"><i className="bi bi-youtube me-1"></i>  Youtube</a>
         </div>
</div>
</div>   


{/* <!-- Reach Us --> */}
 <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">Reach Us</h2>

 <div class="container">
    <div className="col-lg-12 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
    <iframe className="w-100 rounded" height="320" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221.384232858402!2d75.8270037174225!3d25.179871776249087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84d55924ba33%3A0x906794d3a9ebe47b!2sDisco%20Noor%20Band%20kota!5e0!3m2!1sen!2sae!4v1697800887664!5m2!1sen!2sae"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   </div>

    

  <h6 class="text-center bg-dark text-light p-3 m-0">&copy;All Right Reserved Disco Noor Music Band</h6>

 </>
  )
}

export default Home
