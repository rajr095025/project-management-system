import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = forwardRef(function Modal(props, ref) {
  const dialogRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogRef.current.showModal();
        },
        close() {
          dialogRef.current.close();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialogRef}>
      <h2>This is Alert</h2>
    </dialog>,
    document.getElementById("modal")
  );
});

export const ConfirmModal = forwardRef(function Modal(
  { title, message, onConfirmClick },
  ref
) {
  const dialogRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogRef.current.showModal();
        },
        close() {
          dialogRef.current.close();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialogRef} className="w-1/6 p-6">
      <header>
        <h2 className="text-xl text-stone-600 mb-4">{title}</h2>
      </header>
      <main className="mb-6">
        <p>{message}</p>
      </main>
      <footer className="flex justify-center gap-4">
        <button
          onClick={onConfirmClick}
          className="py-1 px-4 rounded-md text-stone-200 bg-stone-800 hover:bg-red-700"
        >
          Confirm
        </button>
        <button
          onClick={() => dialogRef.current.close()}
          className="py-1 px-4 rounded-md text-stone-200 bg-stone-800 hover:bg-green-700"
        >
          Cancel
        </button>
      </footer>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
