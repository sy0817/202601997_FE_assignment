export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  name,
  id,
  autoFocus = false,
  autoComplete = "off",
}) {
  const inputId = id ?? name;
  const isFilled = !disabled && value != null && value !== "";

  const base =
    "flex items-center gap-2.5 w-80 h-12 px-[19px] py-3 rounded-xl body-md outline-none transition-colors text-neutral-500 placeholder:text-neutral-200";

  const stateClass = disabled
    ? "border border-neutral-300 bg-neutral-100 text-neutral-300 placeholder:text-neutral-300 cursor-not-allowed"
    : isFilled
      ? "border border-primary-800 bg-primary-300"
      : "border border-primary-300 bg-white focus:border-2 focus:border-primary-700 focus:bg-white";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="body-md text-neutral-500">
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className={`${base} ${stateClass}`}
      />
    </div>
  );
}
