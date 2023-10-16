import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

export default function FacebookLiteLoginScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Logging in with login:', login, 'and password:', password);
    
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Facebook </Text>
      <Text style={styles.mvalue}> Mobile number or email </Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <Text style={styles.pvalue}> Password </Text>
      <TextInput
        style={styles.input}
        placeholder=""
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <Text style={styles.space}> ----------or---------- </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccount}>
        <Text style={styles.createAccountText}>Create New Account</Text>
      </TouchableOpacity>
      <Text style={styles.languageOption}> English(US)
       </Text>

      <Text style={styles.languageOptions}> Filipino 
      </Text>

      <Text style={styles.languageOptions}> Bisaya
       </Text>

      <Text style={styles.languageOptions}> More Languages...
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textcolor: 'gray',
  },
  input: {
    width: '20%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    
  },
  forgotPassword: {
    marginTop: 10,
    
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 14,
    alignItems: 'left',

  },
  createAccount: {
    marginTop: 10,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'green',
  },
  languageOptions: {
    color: 'blue',
    fontSize: 16,
    
  },
  mvalue:{
    flexDirection: 'row',
    marginLeft: '10px',
   
  },
});
