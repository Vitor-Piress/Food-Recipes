import React from "react";
import Card from "../components/Card";

const home = () => {
  return (
    <div>
      <main className="grid grid-cols-1 mx-1 gap-[2%] sm:grid-cols-[repeat(auto-fit,minmax(440px,1fr))]">
        <Card category="blue" />
        <Card category="red" />
        <Card category="green" />
        <Card category="blue" />
        <Card category="blue" />
        <Card category="red" />
        <Card category="red" />
        <Card category="red" />
        <Card category="blue" />
        <Card category="blue" />
        <Card category="blue" />
        <Card category="blue" />
        <Card category="green" />
        <Card category="green" />
        <Card category="green" />
      </main>
    </div>
  );
};

export default home;
