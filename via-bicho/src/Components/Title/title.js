import React from 'react'
import { Image } from './style'
import TitleImage from '../../../static/assets/images/adoption-fair.jpg'

export default function Title(){
    return(
        <div>
            <Image src={ TitleImage } alt="Local e horário da feira de adoção" />
        </div>
    )
}