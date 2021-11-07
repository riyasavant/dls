import {
  ChangeEvent,
  FunctionComponent,
  ReactNode,
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
  value?: number;
  onClick?: () => void;
}

const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
  const className = classNames({
    [styles[`Slider_variant_${props.variant}`]]: props.variant,
  });
  const [val, setVal] = useState(props.value);

  const handleVal = (e: any) => {
    setVal(e.target.value);
    const valPercent = (e.target.value / props.max) * 100;
    e.target.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  };
  return (
    <div className={className}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        className="slider"
        onChange={handleVal}
        id="myRange"
      />
    </div>
  );
};

export default Slider;