import { TextInputType } from "../../types/TextInputType";

const TextInput = ({updateInput, value, id, label, disabled}:TextInputType) => {
     return(
        <div className="relative">
            <input 
                type="text" 
                id={id}
                name={id}
                value={value}
                onChange={updateInput}
                disabled={disabled}
                className={`block rounded-[8px] w-full text-[16px] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#6B47ED] focus:outline-none focus:ring-0 focus:border-[#6B47ED] peer border border-[#D8D8D8] px-4 ${value.length ? 'pt-5' : 'pt-[18px]'} pb-1 hover:border-[#6B47ED] focus:pt-5 disabled:bg-white disabled:border-[#f5f5f5] disabled:hover:border-[#f5f5f5] disabled:text-[#f5f5f5]`}
                placeholder=" " 
            />
            <label 
                htmlFor={id}
                className={`absolute text-[#979797] dark:text-[#979797] duration-300 transform -translate-y-4 top-3 z-10 origin-[0] start-4 peer-focus:text-[#979797] peer-focus:dark:text-[#979797] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-[14px] peer-focus:top-[10px] peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${disabled ? 'text-[#f5f5f5]' : ''} ${value.length ? 'text-[14px] top-[18px]' : 'text-[16px]'}`}
            >
                {label}
            </label>
        </div>
     )
}

export default TextInput;