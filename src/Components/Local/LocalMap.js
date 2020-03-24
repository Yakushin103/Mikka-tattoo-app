import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import gifImg from './../../img/7h1H.gif'

const mapState = { center: [47.22, 39.71], zoom: 12 };

const LocalMap = () => {
    return (
        <div className='local-map'>
            <YMaps >
                <Map state={mapState}>

                    <Placemark
                        geometry={[47.226142, 39.717178]}
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