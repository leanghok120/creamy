import React from "react";
import { PlayIcon } from "lucide-react";
import { SkipForward } from "lucide-react";
import { SkipBack } from "lucide-react";

export default function Actions() {
  return (
    <div className="flex items-center gap-5 mt-6">
      <button className="bg-base-200 p-2 rounded-full">
        <SkipBack />
      </button>
      <button className="bg-base-200 p-3 rounded-full">
        <PlayIcon />
      </button>
      <button className="bg-base-200 p-2 rounded-full">
        <SkipForward />
      </button>
    </div>
  );
}
