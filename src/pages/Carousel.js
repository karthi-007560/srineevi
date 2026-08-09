import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Carouselimg1 from '../image/Carouselimg1.png';
import Carouselimg2 from '../image/Carouselimg2.png';
import Carouselimg3 from '../image/Carouselimg3.png';
import Container from 'react-bootstrap/esm/Container';

function Carous() {
  return (
    <Container className='carousel-container mt-4 mb-5'>
    <Carousel>
      <Carousel.Item>
        <img src={Carouselimg1}  className='Carousel-img' alt="First slide" />
     
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carouselimg2}  className='Carousel-img'  alt="Second slide" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img src={Carouselimg3}  className='Carousel-img'  alt="Third slide" />
     
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carous;