import FormField from './FormField.jsx';

export default function TicketFormFields({ fields = [], formData = {}, onFieldChange, className = '' }) {
  return (
    <div className={`grid grid-cols-1 gap-2 ${className}`}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name] ?? ''}
          onChange={onFieldChange(field.name)}
          className={field.gridClassName}
          inputClassName={field.inputClassName}
        />
      ))}
    </div>
  );
}
