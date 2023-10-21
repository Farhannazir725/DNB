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
    <SwiperSlide><img src="images/bg3.jpg" alt="" className='w-100 p-4 roundedd-block' /></SwiperSlide>
    <SwiperSlide><img src="images/bg4.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
    <SwiperSlide><img src="images/bg6.jpg" alt="" className='w-100 p-4 rounded d-block' /></SwiperSlide>
  </Swiper>
  </div>
  
   
  <div class="container-fluid bg-white shadow mt-2 text-center">
    <div class="row">   

        <div class="col-lg-4 p-4">
         <h3 class="h-font fw-bold fs-3 mb-2">Disco Noor Music Band</h3>
            <p>Disoc Noor Music Band Offering  Our Talendted Musicians and Voaclists Are Here to Set the Perfect Moood For Your Wedding. From Smoothing Meloadies During The Ceremony to Upbeat Tunes For reception, We Cover It All </p>
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


<h6 class="text-center bg-dark text-white p-3 m-0">All Right Reserved Disco Noor Music Band</h6>
</>
 
  )
}

export default Home
