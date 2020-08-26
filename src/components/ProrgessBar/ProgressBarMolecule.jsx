import React from 'react';
import ProgressBar from './ProgressBar'
import ProgressBarColor from './ProgressBarColor'
import {H3, P} from '../typography';
import {Spacing} from '../box'

function ProgressBarMolecule(props){
    return(
        <div>
            <H3 side="left">Tecnologia</H3>
            <H3 side ="right">85%</H3>
            <Spacing />
            <Spacing />
            <Spacing />
            <ProgressBar>
                <ProgressBarColor type={props.type} ></ProgressBarColor>
            </ProgressBar>
        </div>
    )
}


export default ProgressBarMolecule;