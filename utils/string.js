export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const truncate = (longString, limit = 12) => {
    if (longString.length > limit) {
        return (longString.substring(0, 5) + '...' + longString.substring(5, limit))
    }

    return longString
}
