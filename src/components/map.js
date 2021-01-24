import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {useData} from "../components/DataProvider"
import rice_cooker from '../assets/pin_1.png';
import kipas_angin from '../assets/pin_2.png';
import strika from '../assets/pin_3.png';
import heater from '../assets/pin_4.png';
import dispenser from '../assets/pin_5.png';

// L.Marker.prototype.options.icon = DefaultIcon;
const icons = [rice_cooker, kipas_angin, strika, heater, dispenser];
export default function Map(){
    const {endpoint} = useData();
    const [items, setItems] = React.useState([])
    const [position, setPosition] = React.useState([])
    React.useEffect(() => {
        fetch(endpoint+"/all")
        .then(data => data.json())
        .then(result => setItems(result.data))
    navigator.geolocation.getCurrentPosition(function(position) {
        setPosition([position.coords.latitude,position.coords.longitude])
        }   
    )
    }, [items])

    console.log(position)
    return (
        <MapContainer center={[-7.3382517, 112.7271652]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(data => {
            let DefaultIcon = L.icon({
                iconUrl: data.y_pred === "rice_cooker" ? (rice_cooker) :
                data.y_pred === "kipas_angin" ? (kipas_angin) :
                data.y_pred === "strika" ? (strika) :
                data.y_pred === "heater" ? (heater) : (dispenser),
                shadowUrl: iconShadow, 
                iconSize: [40, 35],
                shadowAnchor: [10, 23]
            });
            return (
                <>
                <Marker icon={DefaultIcon} position={[data.lat_cord, data.long_cord]}>
                <Popup>
                    {data.y_pred === "rice_cooker" ? (<strong>rice_cooker</strong>) :
                    data.y_pred === "kipas_angin" ? (<strong>kipas_angin</strong>) :
                    data.y_pred === "strika" ? (<strong>strika</strong>) :
                    data.y_pred === "heater" ? (heater) : (<strong>dispenser</strong>)}
                </Popup>
        </Marker>
        </>
            )
        })}
        </MapContainer>
    )      
}
