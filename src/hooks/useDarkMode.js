import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValues => {
    const [values, setValues] = useLocalStorage('darkMode', initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            darkState: !initialValues
        })
    }

    return [values, handleChanges]
}

export default useDarkMode