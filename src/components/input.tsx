type InputProps = {
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  fieldValue: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  name,
  placeholder,
  icon,
  fieldValue,
  onChange,
}: InputProps) => {
  return (
    <div className={`flex items-center w-full`}>
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          type="text"
          autoComplete="on"
          onChange={onChange}
          className={`border rounded-lg  py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit pl-10 h-10 w-full`}
        />
        <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-start pointer-events-none justify-center">
          {icon}
        </div>
        <label
          htmlFor={name}
          className={`z-1 absolute cursor-text peer-focus:left-7 peer-focus:text-xs peer-focus:-top-2 transition-all
                ${
                  fieldValue.length > 0
                    ? "-top-2 left-7 text-xs "
                    : "left-11 top-2"
                }`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default SearchInput;
