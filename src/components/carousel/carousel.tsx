import React, { Component } from "react";
import "./carousel.scss";
import Carousel from "react-elastic-carousel";

export default class CarouselComponent extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Slide 1",
      },
      {
        id: 2,
        title: "Slide #2",
      },
      {
        id: 3,
        title: "Slide #3",
      },
      {
        id: 4,
        title: "Slide #4",
      },
      {
        id: 5,
        title: "Slide #5",
      },
    ],
  };
  render() {
    const { items } = this.state;

    return (
      <Carousel
        className="carousel"
        enableAutoPlay
        autoPlaySpeed={2500}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {items.map((item) => (
          <div className="carousel-item" key={item.id}>
            <div className="center carousel-label">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}
