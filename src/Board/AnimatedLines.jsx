import { memo, useCallback } from "react";
import styles from "./AnimatedLines.module.scss";

function AnimatedLines() {
  const renderLines = useCallback(
    ({ className = "", line1ClassName = "", line2ClassName = "" }) => (
      <div
        className={`absolute flex w-full h-full justify-evenly z-0 ${className}`}
      >
        <Line className={line1ClassName} />
        <Line className={line2ClassName} />
      </div>
    ),
    []
  );

  return (
    <>
      {renderLines({
        line1ClassName: styles.delay1,
        line2ClassName: styles.delay2,
      })}
      {renderLines({
        line1ClassName: styles.delay3,
        line2ClassName: styles.delay4,
        className: "rotate-90 -scale-y-100",
      })}
    </>
  );
}

export default memo(AnimatedLines);

const Line = memo(({ className }) => (
  <span
    className={`w-2 h-full bg-slate-900 rounded-full relative -top-full ease-in ${styles.animate} ${className}`}
  ></span>
));
