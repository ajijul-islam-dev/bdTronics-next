import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FcGoogle } from "react-icons/fc";
import "@smastrom/react-rating/style.css";
const ReviewCard = () => {
  return (
    <div className="flex flex-col justify-between p-5 bg-white h-72 shadow rounded-xl my-10">
      <div>
        <div className="flex items-center justify-between">
          <Rating style={{ maxWidth: 100 }} value={3.5} readOnly />
          <span className="text-sm">17 hours ago</span>
          <FcGoogle />
        </div>
        <p className="text-sm my-3">
          Genuine product. Working very good. Thanks BD Tronics for ensure Best
          Quality.{" "}
        </p>
      </div>
      <div className="flex gap-3 items-center align-sub">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold">Azizul Islam</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
