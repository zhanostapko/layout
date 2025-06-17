"use client";
import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { TestimonialItem } from "@/types/content";
import { fallbackReviews } from "@/data/fallbackContent";

type Props = {
  items: TestimonialItem[];
};

const ReviewSlider = ({ items }: Props) => {
  const reviewData =
    items?.map((item) => ({
      name: item.name,
      text: item.message,
      photoUrl: item.avatar.url,
    })) || [];

  let fallbackIndex = 0;

  while (reviewData.length < 6 && fallbackIndex < fallbackReviews.length) {
    reviewData.push({
      name: fallbackReviews[fallbackIndex].name,
      text: fallbackReviews[fallbackIndex].text,
      photoUrl: "",
    });
    fallbackIndex++;
  }

  const topReviews = reviewData.slice(0, 3);
  const bottomReviews = reviewData.slice(3, 6);
  // For mobile view, pause the animation on touch
  useEffect(() => {
    const scrollEls = document.querySelectorAll(
      ".animate-scroll-left, .animate-scroll-right"
    );

    scrollEls.forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      const pause = () => (el.style.animationPlayState = "paused");
      const resume = () => (el.style.animationPlayState = "running");

      el.addEventListener("touchstart", pause);
      el.addEventListener("touchend", resume);
      el.addEventListener("touchcancel", resume);

      return () => {
        el.removeEventListener("touchstart", pause);
        el.removeEventListener("touchend", resume);
        el.removeEventListener("touchcancel", resume);
      };
    });
  }, []);
  return (
    <>
      {" "}
      <div className="block md:hidden  overflow-hidden">
        <div className="overflow-hidden w-full mt-8">
          <div className="flex gap-6 animate-scroll-right min-w-max ">
            {[...reviewData, ...reviewData].map((review, index) => (
              <div
                key={`bottom-${index}`}
                className="min-w-[300px] flex-shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block  overflow-hidden">
        <div className="overflow-hidden w-full flex mt-18 ">
          <div className="flex gap-6 animate-scroll-left min-w-max ">
            {[...topReviews, ...topReviews].map((review, index) => (
              <div key={`top-${index}`} className="min-w-[300px] flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full mt-8">
          <div className="flex gap-6 animate-scroll-right min-w-max ">
            {[...bottomReviews, ...bottomReviews].map((review, index) => (
              <div
                key={`bottom-${index}`}
                className="min-w-[300px] flex-shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
