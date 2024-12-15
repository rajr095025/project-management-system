import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classes =
    "w-full p-1 bg-stone-300 border-b-2 border-stone-600 whitespace-break-spaces focus:border-x-0 focus:border-0 focus:border-stone-100";
  return (
    <ssection className="flex flex-col">
      <label className="text-base font-semibold uppercase text-stone-600 ">
        {label}
      </label>
      {isTextArea ? (
        <textarea {...props} ref={ref} className={classes} />
      ) : (
        <input {...props} ref={ref} className={classes} />
      )}
    </ssection>
  );
});

export default Input;
