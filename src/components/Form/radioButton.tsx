import { RadioButtonType } from "../../types/RadioButtonType";
const RadioButton = ({label, onChange, proficient, disabled}:RadioButtonType) => {
    return(
        <div>
            <label className={`${proficient === label ? 'text-[#343434]' : 'text-[#979797]'} block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                <input
                    type='radio'
                    value={label}
                    checked={proficient === label}
                    onChange={onChange}
                    className="sr-only"
                    disabled={disabled}
                />
                <span 
                    className={`inline-block h-3 w-3 border mr-2 rounded-full duration-300 ${disabled ? 'border-[#D8D8D8]' : 'border-[#6B47ED]'} ${proficient === label && !disabled ? 'bg-[#6B47ED]' : ''} ${proficient === label && disabled ? 'bg-[#D8D8D8]' : ''} `}
                >
                </span>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;