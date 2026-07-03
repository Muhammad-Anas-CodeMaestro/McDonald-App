export default function InputField({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  inputClassName = '',
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label ? (
        <label htmlFor={id ?? name} className="font-light text-sm leading-[100%] tracking-[0%] align-middle">
          {label}
        </label>
      ) : null}
      <input
        id={id ?? name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`py-2 pl-4 rounded-lg border border-gray-400 text-sm ${inputClassName}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
