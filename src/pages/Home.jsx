import React from "react";
import Actions from "../components/Actions";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-10 bg-base-200 rounded-2xl shadow-md w-96 flex flex-col justify-center items-center">
        <img
          src="https://cdn.blogo.it/f9J1-WM-De5Yryu6oTUsZ-VJzLY=/1280x720/smart/https://www.blogo.it/app/uploads/sites/5/2024/05/birds-os-a-feather-billie-eilish.png"
          alt="cover"
          className="w-52 h-52 rounded-3xl shadow-2xl"
        />

        <h1 className="font-black text-2xl mt-5">Birds Of A Feather</h1>
        <h2>Bille Eillish</h2>
        <p>Hit me hard and soft</p>

        <Actions />
      </div>
    </div>
  );
}
