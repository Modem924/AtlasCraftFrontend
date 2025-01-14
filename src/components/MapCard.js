import {ListItem, IconButton} from "@mui/material";
import {Visibility, FileCopy, Download, Edit, ThumbUp, ThumbDown} from '@mui/icons-material';
const style = {
    cardContainer: {
        width: "90%",
        height:"20%",
        backgroundColor:"#1C353D",
        left:"5%",
        position:"relative",
        borderRadius:"25px",
        marginTop:"1rem",
        display: "flex",
    },
    topDivContainer:{
        width:"96%",
        top:"7%",
        left:"2%",
        height:"50%",
        position:"absolute"
    },
    bottomDivContainer:{
        width:"96%",
        top:"50%",
        left:"2%",
        height:"50%",
        position:"absolute"
    },
    leftDivContainer:{
        height:"100%", 
        width:"50%", 
        position:"absolute",
        fontSize: "24px",
        color: "#F5DEB3",
        // backgroundColor:"black"
    },
    rightDiveContainer:{
        height:"100%", 
        width:"50%", 
        left:"50%", 
        position:"absolute",
        fontSize: "24px",
        color: "#F5DEB3",
        textAlign:"right"
    },
    iconButtons:{
        transform:"scale(1.2)",
        color: "#F5DEB3"
    }

}
export default function MapCard(props){
    const ownedUser = props.ownedUser;
    const mapName = props.mapName;
    console.log(ownedUser)
    return(
        <ListItem style={style.cardContainer}>
            <div style={style.topDivContainer}>
                <div style={style.leftDivContainer}>
                    {mapName}
                </div>
                <div style={style.rightDiveContainer}>
                    {ownedUser}
                </div>
            </div>
            <div style={style.bottomDivContainer}>
                <div style={style.leftDivContainer}>
                    <IconButton>
                        <Visibility style={style.iconButtons}/>
                    </IconButton>
                    <IconButton>
                        <FileCopy style={style.iconButtons}/>
                    </IconButton>
                    <IconButton>
                        <Download style={style.iconButtons}/>
                    </IconButton>
                    <IconButton>
                        <Edit style={style.iconButtons}/>
                    </IconButton>
                </div>
                <div style={style.rightDiveContainer}>
                    <IconButton>
                        <ThumbUp style={style.iconButtons}/>
                    </IconButton>
                    <IconButton>
                        <ThumbDown style={style.iconButtons}/>
                    </IconButton>
                </div>
            </div>
        </ListItem>
    );
}