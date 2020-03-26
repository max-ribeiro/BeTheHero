import React from 'react';
import{ useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {View,Image,TouchableOpacity,Text} from 'react-native';

import styles from './styles';

import  logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>Value:  </Text>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Value:</Text>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Value:</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Sera o heroi deste caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>
                            Whatapp
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>
                            Email
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}