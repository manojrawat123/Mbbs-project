import { useState } from "react";
import { POSTAPI } from "../../API/api";

function useMultiForm(allForms) {

    const [currentFormIndex, setCurrentFormIndex] = useState(0)
    const [currentFormError, setCurrentFormError] = useState(null)


    function next(allFormValues) {
        const currentForm = allForms[currentFormIndex];
        const value = allFormValues[currentForm.key][currentForm.nestedKey]
        const type = currentForm.type

        //Type: text || minlengththree || email || imgfile || phone || date || number
        switch (type) {

            case 'text':

                if (value.length <= 0) {
                    setCurrentFormError("Cannot Be Empty")
                    return;
                }
                break;

            case 'minlengththree':
                if (value.length < 3) {
                    setCurrentFormError("Length must be greater than 3")
                    return;
                }
                break;
            case 'email':
                if (!value.endsWith('.com') || !value.includes('@') || value.split('@')[0].length < 0) {
                    setCurrentFormError("Invalid Email")
                    return;
                }
                break;
            case 'imgfile':
                if (!value) {
                    setCurrentFormError("Select an Image")
                    return;
                }
                else if (!["image/png", "image/jpeg"].includes(value.type)) {
                    setCurrentFormError("Invalid image format (png or jpg)")
                    return;
                }
                break;
            case 'phone':
                if (!value.startsWith('+91') || value.length !== 13 || isNaN(value.split('1')[1])) {
                    setCurrentFormError("Invalid Phone number : +91XXXXXXXXXX")
                    return;
                }
                break;
            case 'confirm_password':
                if (allFormValues['user']['password'] !== value) {
                    setCurrentFormError("Password Does not match")
                    return;
                }
                else {
                    if (!sessionStorage.getItem('saved_user_id') || allFormValues["user"]["email"] !== sessionStorage.getItem('saved_user_email')) {

                        POSTAPI('accounts/', allFormValues, setCurrentFormError)
                            .then(response => {

                                sessionStorage.setItem('saved_user_id', response.data.id)
                                sessionStorage.setItem('saved_user_email', response.data.user.email)

                                const email = allFormValues["user"]["email"]
                                const password = allFormValues["user"]["password"]

                                POSTAPI('token', { email, password }).then(({ data }) => {
                                    sessionStorage.setItem('saved_user_token', data.access)
                                })
                            })
                    }

                    if(currentFormError)
                    return;


                }

                break;
            case 'number':
                if (value.length <= 0 || isNaN(Number(value))) {
                    setCurrentFormError("Invalid Number")
                    return;
                }
                break;
            default:

        }

        setCurrentFormIndex(i => {
            return i >= allForms.length - 1 ? i : i + 1;
        })
        setCurrentFormError(null)
    }

    function back() {
        setCurrentFormIndex(i => {
            return i <= 0 ? i : i - 1;
        })
        setCurrentFormError(null)
    }

    return {
        currentFormIndex,
        next,
        back,
        isFirstForm: currentFormIndex === 0,
        isLastForm: currentFormIndex === allForms.length - 1,
        allForms,
        currentForm: allForms[currentFormIndex],
        error: currentFormError

    }
}

export default useMultiForm;