import { ChangeEvent } from "react"

export type TextInputType = {
    updateInput: (e: ChangeEvent<HTMLInputElement>)=>void, 
    value: string, 
    id: string, 
    label: string, 
    disabled: boolean
}