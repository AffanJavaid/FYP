import React from 'react'
import { List, Datagrid , TextField, EditButton, DeleteButton } from 'react-admin';

const StoreList = (props) => {
    return (
        <div>
            <List {...props}>
                <Datagrid>
                    <TextField source ='sid' />
                    <TextField source ='sname' />
                    <TextField source ='slocation' />
                    <TextField source = 'bid' />
                    <EditButton basePath='/Store' />
                    <DeleteButton basePath='/Store' />
                </Datagrid>

            </List>
        </div>
    )
}

export default  StoreList