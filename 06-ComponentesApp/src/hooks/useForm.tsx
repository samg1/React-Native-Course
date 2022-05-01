import { useState } from "react"

export const useForm = <T extends Object>( initState: T ) => {

    const [form, setForm] = useState(initState)

    const onChange = <K extends Object>(value: K, field: keyof T ) => {
        setForm({
            ...form,
            [field]: value
        })
    }

  return {
      ...form,
      form,
      onChange
  }
}
