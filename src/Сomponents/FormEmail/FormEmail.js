import React, {Component} from 'react';
import classes from './FormEmail.module.scss';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {withTranslation} from 'react-i18next';
import is from 'is_js';
import axios from 'axios'

class FormEmail extends Component {
    state = {
        showEmailForm: true,
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'e-mail',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            }
        }
    };

    registerHandler = async () => {
        if (!this.state.isFormValid) {
            return;
        }
        const authData = {
            email: this.state.formControls.email.value
        };
        try {
            const response = await axios.post('https://cyberbetcup.com/api/email', authData);
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('email_cb', authData.email);
                this.setState({
                    showEmailForm: false
                })
            }
            // Notification.requestPermission().then(function (result) {
            //     console.log(result);
            // });
        } catch (e) {
            console.log(e)
        }
    };

    submitHandler = event => {
        event.preventDefault()
    };

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        // console.log(`${controlName}: `, event.target.value);

        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    touched={control.touched}
                    label={control.label}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                    styleClass={'FormEmail'}
                />
            )
        })
    }

    render() {
        const {t} = this.props;
        return (
            <div className={classes.FormEmail}>
                {
                    this.state.showEmailForm
                        ? <>
                            <h2>Get <span>live</span> matches data ON TIME!</h2>
                            <form
                                className={classes.AuthForm}
                                onSubmit={this.submitHandler}>

                                {this.renderInputs()}

                                <Button
                                    type="subscribe"
                                    onClick={this.registerHandler}
                                    // disabled={!this.state.isFormValid}
                                >
                                    {t('Subscribe')}!
                                </Button>
                            </form>
                        </>
                        : <p style={{textAlign: 'center', textTransform: 'uppercase'}}>{t('You_subscribed')}</p>
                }

            </div>
        );
    }
}

export default withTranslation()(FormEmail)
