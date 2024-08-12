"use client";
import CountUp from "react-countup";

interface propsType {
  amount: number;
}

const AnimatedCounter = ({ amount }: propsType) => {
  return (
    <div>
      <CountUp decimals={2} decimal="," prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
