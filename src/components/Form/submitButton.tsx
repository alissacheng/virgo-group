import { SubmitButtonType } from "../../types/SubmitButtonType";

const SubmitButton = ({label, disabled, submitForm}:SubmitButtonType) => {
    return(
        <div className='flex justify-center pt-5'>
            <button 
                type='submit' 
                className='w-[200px] rounded-[80px] py-4 px-6 bg-[#6B47ED] text-white hover:opacity-[0.6] duration-300 disabled:bg-[#D4CCF7] disabled:hover:opacity-[100] font-semibold text-lg disabled:cursor-not-allowed'
                disabled={disabled}
                onClick={submitForm}
            >
                {label}
            </button>
        </div>
    )
}

export default SubmitButton;