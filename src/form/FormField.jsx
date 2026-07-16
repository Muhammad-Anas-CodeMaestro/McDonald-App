export default function FormField({ field, value, onChange, className = '', inputClassName = '', error = '' }) {
  const {
    id,
    name,
    label,
    type = 'text',
    placeholder = '',
    required = false,
    options = [],
    rows = 3,
    autoComplete,
    disabled = false,
  } = field || {};

  const sharedProps = {
    id: id ?? name,
    name,
    value,
    onChange,
    required,
    placeholder,
    autoComplete,
    disabled,
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label ? (
        <label htmlFor={id ?? name} className="font-light text-sm leading-[100%] tracking-[0%] align-middle">
          {label}
        </label>
      ) : null}

      {type === 'select' ? (
        <select
          {...sharedProps}
          className={`p-2 rounded-lg border border-gray-400 text-sm bg-white ${inputClassName}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          {...sharedProps}
          rows={rows}
          className={`p-2 border border-gray-400 text-sm resize-none ${inputClassName}`}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          className={`p-2 rounded-lg border border-gray-400 text-sm ${inputClassName}`}
        />
      )}

      {error ? <p className="text-red-500 text-xs">{error}</p> : null}
    </div>
  );
}