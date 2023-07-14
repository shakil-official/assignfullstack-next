import React from "react";
import {List, ListItem, ListItemText} from "@mui/material";
import {FC} from "react";
import {ListPropsInterface} from "../../../interfaces/ListPropsInterface";

const FieldList: FC<ListPropsInterface> = ({items}) => {
    return (
        <List>
            {items.map((item, index) => (
                <ListItem key={index} disablePadding={true}>
                    <ListItemText primary={item}/>
                </ListItem>
            ))}
        </List>
    );
};
export default FieldList;
