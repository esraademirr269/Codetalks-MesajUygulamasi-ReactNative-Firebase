import React from 'react';
import { View, Text } from 'react-native';

import styles from './Login.styles';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
    usermail: '',
    password: '',
};
const Login = ({ navigation }) => {

    const handleSign = () => {
        navigation.navigate('SignPage');
    }

    const handleSubmit = async (formValues) => {
        if(!formValues.usermail || !formValues.password){
            return;
        }
        try {
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            )
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
                    <View>
                        <Input placeholder='e-postanızı giriniz..' value={values.usermail} onType={handleChange('usermail')} />
                        <Input placeholder='şifrenizi giriniz..' value={values.password} onType={handleChange('password')} />
                        <Button text="Giriş Yap" theme="primary" onSubmit={handleSubmit} />
                        <Button text="Kayıt Ol" theme="secondary" onSubmit={handleSign} />
                    </View>
                )
                }
            </Formik>
        </View>
    );
}

export default Login;