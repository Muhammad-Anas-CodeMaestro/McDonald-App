import { useState, useCallback } from 'react';

/**
 * useFormState
 *
 * A generic form-state hook that provides controlled input handling
 * and a reset helper.
 *
 * @param {Record<string, any>} initialValues - Initial field values.
 * @returns {{
 *   formData: Record<string, any>,
 *   handleChange: (fieldName: string) => (e: React.ChangeEvent) => void,
 *   setFormData: React.Dispatch,
 *   resetForm: () => void,
 * }}
 *
 * @example
 *   const { formData, handleChange, resetForm } = useFormState({ mainCategory: '' });
 */
export function useFormState(initialValues = {}) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = useCallback(
    (fieldName) => (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialValues);
  }, []);

  return { formData, handleChange, setFormData, resetForm };
}
