import React from 'react'
import { Map } from './style'
import GoogleMapReact from 'google-map-react'

export default function Local(){
    return(
        <Map>
            <GoogleMapReact defaultCenter={{
                lat: -29.635760,
                lng: -51.005904
            }}
            defaultZoom={16}>
            </GoogleMapReact>
        </Map>
    )
}