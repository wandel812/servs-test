import clsx from "clsx";

export const Button = ({
  onClick,
  text,
  disabled,
}: {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={clsx(
        disabled
          ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
        "min-w-28 w-1/6 h-10"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
