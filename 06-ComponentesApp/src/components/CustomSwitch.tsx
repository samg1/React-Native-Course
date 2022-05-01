import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
    
    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange( !isEnabled )
    };


    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={(Platform.OS === 'android') ? "#5856D6" : ""}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
