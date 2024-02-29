import React, { useState, ChangeEvent } from 'react';
import { Switch, Checkbox, GetProp } from 'antd';
import RadioButton from './radioButton';
import TextInput from './textInput';
import SubHeading from './subHeading';
import SubmitButton from './submitButton';

const Form = () => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const [data, setData] = useState<{ isProficient:boolean, toolsUsed:string, firstName:string}>({
        isProficient: false,
        toolsUsed: "0,2,3,4",
        firstName: ''
    })
    const toolOptions:[string, string, string, string, string] = [
        'Redux', 
        'Lodash', 
        'Ant design', 
        'Webpack', 
        'Other'
    ]

    const updateDisabled = (checked: boolean) => {
        setDisabled(!checked)
      }
    
      const updateName = (e: ChangeEvent<HTMLInputElement>) => {
        setData((newData)=>{
            return {...newData, firstName: e.target.value}
        })
      }

      const updateProficient = (e: ChangeEvent<HTMLInputElement>) => {
        const isProficient:boolean = e.target.value === 'Yes' ? true : false
        setData((newData)=>{
            return {...newData, isProficient}
        })
      };

      const updateTools: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues:any) => {
        const toolsUsed:string = checkedValues.reduce((acc:string, value:string)=>{
            return acc + "," + toolOptions.indexOf(value)
        }, "").slice(1)
        setData((newData)=>{
            return {...newData, toolsUsed}
        })
      };

      const submitForm = (e: SubmitEvent) => {
        e.preventDefault()
        console.log(data)
      }

    return(
        <form className='bg-white rounded-[20px] h-full p-8 w-[380px] flex flex-col space-y-5 text-[#343434]'>
            <div className='flex justify-between'>
                <p className='font-[500]'>Editable</p>
                <Switch 
                    defaultChecked 
                    onChange={updateDisabled}
                />
            </div>
            <TextInput
                id={"first-name"}
                label={"First Name"}
                value={data.firstName}
                updateInput={updateName}
                disabled={disabled}
            />
            <SubHeading
                subheading={"Are you proficient in ReactJS development?"}
                instructions=''
            />
            <div className='flex flex-col space-y-[10px]'>
            {["No", "Yes"].map((label:string)=>{
                return(
                <RadioButton
                    label={label}
                    onChange={updateProficient}
                    proficient={data.isProficient ? 'Yes' : 'No'}
                    disabled={disabled}
                    key={label}
                />
                )
            })}
            </div>
            <SubHeading
                subheading={"Which tools do you use?"}
                instructions="Please select all that apply."
            />
            <Checkbox.Group 
                options={toolOptions} 
                onChange={updateTools}
                className='flex flex-col text-[16px]'
                disabled={disabled}
                defaultValue={data.toolsUsed.split(",").map((item:string)=>toolOptions[parseInt(item)])}
            />
            <SubmitButton
                label="Process"
                disabled={disabled}
                submitForm={submitForm}
            />
        </form>
    )
}

export default Form;