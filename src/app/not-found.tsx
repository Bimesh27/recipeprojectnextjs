import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-w-full min-h-screen flex-col gap-5">
      <div>Hey! Dumbass, Lose Your Way Again?</div>
      <Link href={"/"}>Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
