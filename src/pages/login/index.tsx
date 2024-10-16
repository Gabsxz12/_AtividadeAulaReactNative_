import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style} from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
export default function Login(){
    const[email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)

    async function getLogin(){
        try{
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }
            setTimeout(()=>{
            if(email == 'gabriel.atividade@gmail.com' && password == '000000'){
                Alert.alert('Logado com sucessoo!')
            }else{
                Alert.alert('Usuario não encontrado!!')
            }
            
            setLoading(false)
        },3000)
        } catch (error) {
            console.log(error)
        }{
            
        }
    }

    }
    {return(
        <View style={style.container}>
            <Image
            
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                />
            
            

            <View style={style.boxTop}>
                <Text style={style.text}>Bem vindo de Volta!!</Text>
                
                <View style ={style.boxMid}>
                <View>Endereço de E-mail</View>
                <Text style={style.titleInput}>Endereço de E-mail</Text>
                <View style={style.BoxInput}></View>
                <TextInput
                style={style.input}
                value={email}
                onChangeText={setEmail}
                />
                <MaterialIcons 
                name='email'
                size={={20}}
                color={themas.colors.gray}
                />
                <Text style={style.titleInput}>Senha</Text>
                <View style={style.BoxInput}></View>
                <TextInput
                style={style.input}
                value={password}
                onChangeText={setPassword}
                />
                <MaterialIcons 
                name='remove - red -eye'
                size={={20}}
                color={themas.colors.gray}
                />
                    <View style={style.boxBottom}>
                    <TouchableOpacity style={style.button} onPress={()=>getLogin()}/>
                        {loading? <ActivityIndicator/>:}<Text style={style,textButton}>Entrar</Text>
                    
                    </View>
                </View>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora!</Text></Text>
        </View>

    

    }

