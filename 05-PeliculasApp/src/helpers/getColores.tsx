import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri: string) => {


    const colors = await ImageColors.getColors(uri, {})

    let primary
    let secondary
    let third
    
    switch (colors.platform) {
        case 'android':
            // android colors properties
            primary = colors.darkVibrant
            secondary = colors.vibrant
            third = colors.lightVibrant
            break
        case 'ios':
            // iOS colors properties
            primary = colors.primary
            secondary = colors.secondary
            third = colors.detail
            break
        default:
            throw new Error('Unexpected platform key')

    }

    return [primary, secondary, third]

}