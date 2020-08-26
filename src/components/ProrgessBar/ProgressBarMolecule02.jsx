import React from 'react';
import ProgressBarMolecule from './ProgressBarMolecule'
import DivBars from './ProgressBarMolStyle'
import {Spacing} from "../box"
import {H3} from '../typography'
import ProgressBar from './ProgressBar'
import ProgressBarColor from './ProgressBarColor'





function ProgressBarMolecule02(props){
    return(
        <DivBars>
            <div>
                <H3 color='blue' side="left">Tecnologia</H3>
                <H3 color='blue' side ="right">70%</H3>
                <Spacing />
                <ProgressBar>
                    <ProgressBarColor type='primary'></ProgressBarColor>
                </ProgressBar>
            </div>
            <Spacing />
            <Spacing />
            
            
            <div>
                <H3 color='blue' side="left">Negócios</H3>
                <H3 color='blue' side ="right">80%</H3>
                <ProgressBar>
                    <ProgressBarColor type='secondary'></ProgressBarColor>
                </ProgressBar>
            </div>
            <Spacing />
            <Spacing />
            <Spacing />
            
            
            
            <div>
                <H3 color='blue' side="left">Pessoas</H3>
                <H3 color='blue' side ="right">90%</H3>
                <ProgressBar>
                    <ProgressBarColor type='tertiary'></ProgressBarColor>
                </ProgressBar>
            </div>
            <Spacing />
            <Spacing />
        </DivBars>
    )
}


export default ProgressBarMolecule02;