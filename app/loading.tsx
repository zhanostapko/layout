import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
