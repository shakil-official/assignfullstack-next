import {useEffect, useState} from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {Layer, Source} from 'react-map-gl';
import {dataLayer} from "../../interfaces/MapStyle";


const MpaViewSection = () => {

    const [geoJson, setGeoJson] = useState(null);
    const geoJsonUrl = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson';
    const mapStyle = 'mapbox://styles/mapbox/streets-v9';
    const initialViewState = {
        latitude: 40.33,
        longitude: -100.10,
        zoom: 2,
    };


    useEffect(() => {
        fetch(geoJsonUrl)
            .then((response) => response.json())
            .then((data) => {
                setGeoJson(() => data)
            }).catch((data) => {
            console.log(data)
        });
    }, [])


    return (
        <>
            <Map
                mapLib={import('mapbox-gl')}
                style={{width: "100%", height: "385px"}}
                initialViewState={initialViewState}
                mapStyle={mapStyle}
                mapboxAccessToken={process.env.mapboxAccessToken}
            >
                {geoJson && (
                    <Source id="my-data"
                            type="geojson"
                            data={geoJson}>
                        <Layer {...dataLayer} />
                    </Source>
                )}
            </Map>

        </>
    )


}
export default MpaViewSection;