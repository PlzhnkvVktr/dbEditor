import React from 'react'
import { Carousel } from 'react-bootstrap';

type Props = {

}

export const SliderPage: React.FC<Props> = () => {

  
    return (
        <Carousel data-bs-theme="dark" className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w-dog.ru/wallpapers/9/15/475932951179676/pole-zelen-neo-oblaka-sledy-vesna.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://proprikol.ru/wp-content/uploads/2020/11/kartinki-pshenichnoe-pole-46.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w-dog.ru/wallpapers/9/14/528250715388431/shveciya-pole-yachmen-solnce-vecher-zakat.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}