import type {FillLayer} from 'react-map-gl';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer: FillLayer = {
    source: "",
    id: 'data',
    type: 'fill',
    paint: {
        'fill-antialias': true,
        'fill-outline-color': '#3288bd',
        'fill-opacity': 0.8
    }
};