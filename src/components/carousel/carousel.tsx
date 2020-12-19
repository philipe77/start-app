import React, { Component } from "react";
import "./carousel.scss";
import Carousel from "react-elastic-carousel";

export default class CarouselComponent extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "item #1",
      },
      {
        id: 2,
        title: "item #2",
      },
      {
        id: 3,
        title: "item #3",
      },
      {
        id: 4,
        title: "item #4",
      },
      {
        id: 5,
        title: "item #5",
      },
    ],
  };
  render() {
    const { items } = this.state;

    return (
      <Carousel
        className="carousel"
        /* enableAutoPlay
        autoPlaySpeed={1500} */

        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {items.map((item) => (
          <div className="center carousel-item" key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}
