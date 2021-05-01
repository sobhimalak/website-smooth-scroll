import React from 'react'
import { 
    Container,
    FormInput, 
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormButton,
    Text,
    Icon
} from './SigninElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>Dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='password'>password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn 
