type FormInputProps = {
    label:   string,
    type:    string,
    name:    string,
    value:   string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
}


const FormInput = (
    {   label,
        type,
        name,
        value,
        onChange,
        placeholder,
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