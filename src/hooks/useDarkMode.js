import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValues => {
    const [values, setValues] = useLocalStorage('darkMode', initialValues);

    const handleChanges = change => {
        setValues(change)
    }

    return [values, handleChanges]
}

export default useDarkMode