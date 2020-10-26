import React from 'react'
import { Image } from './style'
import Girl from '../../../static/assets/images/girl-dog.jpg'
import Quote from '../Quote/quote'

export default function AdoptionPhoto(){
    return(
        <div>
            <Image src={ Girl } alt="Uma menina abraçando um cachorro." />
            <Quote />
        </div>
    )
}