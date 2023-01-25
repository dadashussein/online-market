import React from "react";
import css from "./Testimionals.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>

        <img src={Hero} alt="hero" />

        <div className={css.container}>
          <span>100k</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carusal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarusel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="test" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
