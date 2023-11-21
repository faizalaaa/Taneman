import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <Carousel controls>
      <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="src\assets\tanaman-hias-bunga-mawar.jpeg"
            className="d-block w-100"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Mawar</h5>
              <p>
              Bunga mawar adalah salah satu jenis bunga yang sangat populer dan sering kali dikaitkan 
              dengan romantika. Mawar berasal dari keluarga Rosaceae dan genus Rosa. dengan nama latin Rosaceae 
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="src\assets\greekorchids_49_20210128154947jygvef.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Anggrek</h5>
              <p>
              Bunga anggrek adalah kelompok tanaman yang sangat beragam dan ditemukan di berbagai belahan dunia. 
              Anggrek termasuk dalam keluarga tumbuhan Orchidaceae dan merupakan salah satu keluarga tumbuhan berbunga terbesar. 
              dengan nama latin Orchidaceae.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className="jumbotron-mask  bg-image rounded-3">
          <img
            src="/images/articWolf.jpg"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="mask">
            <div class="carousel-caption d-none d-md-block">
              <h5>Artic Wolf</h5>
              <p>
                Arctic wolves (or Canis lupus arctos) are a large canid species
                that live in Northern Canada and Greenland. Also known as white
                wolves, they are large pack predators that feed primarily on
                muskoxen and arctic hares, although they may also eat foxes,
                birds and bear cubs, as well as occasionally scavenging carrion.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
}
