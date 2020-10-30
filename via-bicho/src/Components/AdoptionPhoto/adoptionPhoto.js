import React from 'react'
import { Image } from './style'
import Girl from '../../../static/assets/images/girl-dog.jpg'

export default function AdoptionPhoto(){
    return(
        <div>
            <Image src={ Girl } alt="Uma menina abraçando um cachorro." />
        </div>
    )
}