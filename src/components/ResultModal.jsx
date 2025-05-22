import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset} open>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You are Score: {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the Timer with{" "}
        <strong>{formattedRemainingTime}second Left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button> Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
