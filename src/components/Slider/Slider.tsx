import React,{
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Slider.module.scss";
import classNames from "classnames";

type Variant = "enabled" | "disabled";

interface SliderProps {
  variant?: Variant;
  min: number;
  max: number;
  step: number;
  value: number;
  onClick?: () => void;
}

export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
const percent = (props.value/props.max)*100;
let color = "#1d4ed8"; 
    if (props.variant==="disabled") color = "#475569";
  const className = classNames({
    [styles[`Slider_variant_${props.variant}`]]: props.variant,
  });
  const [val, setVal] = useState(props.value);
  const handleVal = (e: any) => {
    if (props.variant === "disabled") return;
    setVal(e.target.value);
    const valPercent = (e.target.value / props.max) * 100;
    e.target.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  };
  return (
    <div className={className} >
      <input
      style={{background: `linear-gradient(to right, ${color} ${percent}%, #d5d5d5 ${percent}%)`}}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={val}
        className="slider"
        onChange={handleVal}
        id="myRange"
      />
    </div>
  );
};
