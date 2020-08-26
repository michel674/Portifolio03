import React ,{Fragment} from 'react';
import {StandardCard} from '../standardCard/StandardCardStyle';
import {BoxImage, Overlay, HoverCardDiv01, HoverCardDiv02, HoverCardDiv03, HoverCardDiv04, HoverCardDiv05 ,HoverCardDiv06, Tag} from './HoverCardStyle'
import {H4} from '../../typography';



function HoverCard01(){
    return(
        <BoxImage>
            <HoverCardDiv01>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>MIT</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv01>
        </BoxImage>

    )
}

function HoverCard02(){
    return(
        <BoxImage>
            <HoverCardDiv02>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>Yellow Team</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv02>
        </BoxImage>

    )
}

function HoverCard03(){
    return(
        <BoxImage>
            <HoverCardDiv03>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>Brasileiros</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv03>
        </BoxImage>

    )
}

function HoverCard04(){
    return(
        <BoxImage>
            <HoverCardDiv04>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>At Kearney</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv04>
        </BoxImage>

    )
}

function HoverCard05(){
    return(
        <BoxImage>
            <HoverCardDiv05>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>Entrevistas</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv05>
        </BoxImage>

    )
}

function HoverCard06(){
    return(
        <BoxImage>
            <HoverCardDiv06>
                <Overlay>
                    <div>
                        <Tag><H4 color='white'>Vídeos GNP</H4></Tag>
                    </div>
                </Overlay>
            </HoverCardDiv06>
        </BoxImage>

    )
}


export {HoverCard01, HoverCard02,HoverCard03, HoverCard04, HoverCard05, HoverCard06};