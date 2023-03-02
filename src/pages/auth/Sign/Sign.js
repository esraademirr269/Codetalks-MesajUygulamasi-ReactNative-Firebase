import React from 'react';
import { View, Text } from 'react-native';

import styles from './Sign.styles';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};

const Sign = ({ navigation }) => {
    const handleLogin = () => {
        navigation.goBack();
    }

    const handleSubmit = async (formValues) => {
        try {
            
            await auth()
                .createUserWithEmailAndPassword(
                    formValues.usermail,
                    formValues.password,
                )
                handleLogin();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>codetalks</Text>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                    <View>
                        <Input placeholder='e-postanızı giriniz..' value={values.usermail} onType={handleChange('usermail')} />
                        <Input placeholder='şifrenizi giriniz..' value={values.password} onType={handleChange('password')} />
                        <Input placeholder='şifrenizi tekrar giriniz..' value={values.repassword} onType={handleChange('repassword')} />
                        <Button text="Kayıt Ol" theme="primary" onSubmit={handleSubmit} />
                    </View>
                    </>
                )}
            </Formik>
            <Button text="Geri Dön" theme="secondary" onSubmit={handleLogin} />
        </View>
    );
}

export default Sign;