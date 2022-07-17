import * as React from "react";
import {Button, Image, View, Platform} from "react-native";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions";

export default class PickImage extends React.Component{
    state = {
        image: null,
    }
    render()
    {
        let { image } =this.state;

        return(
            <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
            <Button
            title="Pick an image from camera roll"
            onPress={this.pickImage}
            />
            </View>

        )
    }
    getPermissionAsync = async () => {
        if(Plartform.OS !== "web") {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== "granted"){
                alert("Sorry, we need camera roll permissions to make this work")
            }
        }
        
    }
    componentDidMount(){
        this.getPermissionAsync();
    }
}

