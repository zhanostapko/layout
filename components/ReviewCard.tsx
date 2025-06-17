import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  review: {
    text: string;
    photoUrl: string;
    name: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const stars = Array.from({ length: 5 });
  const fallback = review.name.slice(0, 2).toLocaleUpperCase();
  return (
    <Card className="shadow-md h-[250px] p-0 min-w-full md:min-w-80 max-w-[30rem]">
      <CardContent className="p-8 pl-11">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={review.photoUrl} alt="User avatar" />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-neutral-900  text-lg font-bold leading-7">
              {review.name}
            </p>

            <div className="flex gap-4">
              {stars.map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.8185 0L14.1616 7.1459L21.6371 8.2918L16.2278 13.8541L17.5047 21.7082L10.8185 18L4.13231 21.7082L5.40926 13.8541L0 8.2918L7.47542 7.1459L10.8185 0Z"
                    fill="#FFC718"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="line-clamp-4 text-gray-500 font-medium">{review.text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
