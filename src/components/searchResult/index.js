import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity } from 'react-native';
import api from '../../api/googleSearch';

import style from './style';

function Result (props) {

    const navigation = useNavigation();

    async function loadAvatars(){
      const response = await api.get();

      const resItem = response.data.items[0];

      const avatar = resItem.pagemap.cse_image.cse_image[0].src;

      console.log(avatar);
    }

    loadAvatars();

    return (
        <TouchableOpacity style={style.btnItem}>
          <Image style={style.avatarItem} source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/LukeTatooine.jpg/200px-LukeTatooine.jpg'}}/>
          <Text style={style.nameItem}>{props.itemMap}</Text>
        </TouchableOpacity>
    );
}

export default Result;







