import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import gifImg from './../../img/7h1H.gif'

const mapState = { center: [47.214360, 39.703972], zoom: 15 };

const LocalMap = () => {
    return (
        <div className='local-map'>
            <YMaps >
                <Map state={mapState}>

                    <Placemark
                        geometry={[47.214360, 39.703972]}
                        properties={{
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: gifImg,
                            iconImageSize: [30, 42],
                            iconImageOffset: [-3, -42]
                        }}
                    />

                </Map>
            </YMaps>
        </div>
    );
}

export default LocalMap;