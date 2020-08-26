import React from 'react';
import {Header} from './HeaderPosition';
import {Profile} from '../../components/profile/Profile';
import {Box} from '../../components/box'

function HeaderItem(){
    return(
        <Header>
            <Profile/>
        </Header>
    

    )
}

export {HeaderItem};