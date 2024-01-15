import React from 'react'
import { FirstWordStyle, SecondWordStyle, WelcomeWrapper } from '../WelcomeComponent/Welcome.styled'
import { CustomInput, CustomLabel, InputWrapper, TitleForm, WrapperForm, WrapperInformation } from './FormSection.styled'

const FormSection = () => {
    return (
        <WelcomeWrapper>
            <TitleForm>
                <FirstWordStyle>Get a project in </FirstWordStyle>
                <SecondWordStyle>mind?</SecondWordStyle>
            </TitleForm>
            <WrapperForm>
                <WrapperInformation>
                    <InputWrapper>
                        <CustomLabel>Your name</CustomLabel>
                        <CustomInput />
                    </InputWrapper>
                    <InputWrapper>
                        <CustomLabel>Your email</CustomLabel>
                        <CustomInput />
                    </InputWrapper>
                </WrapperInformation>
                <InputWrapper>
                    <CustomLabel>Your message</CustomLabel>
                    <CustomInput />
                </InputWrapper>
            </WrapperForm>

        </WelcomeWrapper>
    )
}

export default FormSection