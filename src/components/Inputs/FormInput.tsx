type FormInputProps = {
    label:   string,
    type:    string,
    name:    string,
    value:   string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error:   string,
    touched: boolean,
    placeholder: string,
    className: string,
    required: boolean,
    disabled: boolean,
    autoComplete: string,
    autoFocus: boolean,
    maxLength: number,
    minLength: number,
    pattern: string,
    size: number,
}


const FormInput = (
    {   label,
        type,
        name,
        value,
        onChange,
        error,
        touched,
        placeholder,
        className,
        required,
        disabled,
        autoComplete,
        autoFocus,
        maxLength,
        minLength,
        pattern,
        size,
    }: FormInputProps) => {
  return (
    <div className="space-y-2 flex flex-col">
        <label htmlFor={name} className='text-sm font-semibold'>{label}</label>
        
        <input type={type} 
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}        
        className='h-12 w-full border-2 px-2 rounded-md' />
    </div>
  )
}

export default FormInput