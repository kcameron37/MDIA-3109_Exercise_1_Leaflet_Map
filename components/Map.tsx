import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [30, 30]
});

const iconBlue = L.icon({
    iconUrl: "/images/iconBlue.png",
    iconSize: [30, 30]
  });

const stationExpo: { coordinates: [number, number], name: string }[][] = [
    [
        {coordinates: [49.285252, -123.114058], name: 'Waterfront' },
        {coordinates: [49.285616, -123.120157], name: 'Burrard' },
        {coordinates: [49.282750, -123.116639], name: 'Granville' },
        {coordinates: [49.279839, -123.109960], name: 'Stadium–Chinatown' },
        {coordinates: [49.273114, -123.100348], name: 'Main Street–Science World' },
        {coordinates: [49.262951, -123.069468], name: 'Commercial–Broadway' },
        {coordinates: [49.248184, -123.055640], name: 'Nanaimo' },
        {coordinates: [49.244084, -123.045931], name: '29th Avenue' },
        {coordinates: [49.238354, -123.031704], name: 'Joyce–Collingwood' },
        {coordinates: [49.229670, -123.003182], name: 'Patterson' },
        {coordinates: [49.226289, -123.000961], name: 'Metrotown' },
        {coordinates: [49.2201, -122.9885], name: 'Royal Oak' },
        {coordinates: [49.2123, -122.9592 ], name: 'Edmonds' },
        {coordinates: [49.2000, -122.9490], name: '22nd street' },
        {coordinates: [49.201354, -122.912716], name: 'New Westminster' },
        {coordinates: [49.204760, -122.906161], name: 'Columbia' },
        {coordinates: [49.224430, -122.889640], name: 'Sapperton' },
        {coordinates: [49.204760, -122.906161], name: 'Columbia' },
        {coordinates: [49.198945, -122.850559], name: 'Gateway' },
        {coordinates: [49.189200, -122.847300], name: 'Surrey Central' },
        {coordinates: [49.182700, -122.844600], name: 'King George' },
            
      ], 

      [
        { coordinates: [49.2049509, -122.90605564], name: 'Columbia Station' },
        { coordinates: [49.2248531, -122.889439074], name: 'Sapperton Station' },
        { coordinates: [49.2334009, -122.8828945898], name: 'Braid Station' },
        { coordinates: [49.24861176, -122.8969842], name: 'Lougheed Station' },
        { coordinates: [49.2486117, -122.8969842028], name: 'Production Way–University Station' }
    ]
]

const stationMillennium: { coordinates: [number, number], name: string }[][] = [
    [
        { coordinates: [49.26583, -123.07914], name: 'VCC–Clark' },
        { coordinates: [49.262951, -123.069468], name: 'Commercial–Broadway' },
        { coordinates: [49.25895, -123.04526], name: 'Renfrew' },
        { coordinates: [49.26079, -123.03288], name: 'Rupert' },
        { coordinates: [49.265, -123.01342], name: 'Gilmore' },
        { coordinates: [49.2664, -123.00172], name: 'Brentwood Town Centre' },
        { coordinates: [49.26473, -122.98195], name: 'Holdom' },
        { coordinates: [49.25879, -122.96399], name: 'Sperling–Burnaby Lake' },
        { coordinates: [49.25461, -122.93928], name: 'Lake City Way' },
        { coordinates: [49.25342, -122.91815], name: 'Production Way–University' },
        { coordinates: [49.24769, -122.89512], name: 'Lougheed Town Centre' },
        { coordinates: [49.26133, -122.88994], name: 'Burquitlam' },
        { coordinates: [49.27794, -122.84551], name: 'Lougheed Town Centre' },
        { coordinates: [49.27719, -122.82799], name: 'Production Way–University' },
        { coordinates: [49.27388, -122.79999], name: 'Lake City Way' },
        { coordinates: [49.28037, -122.79402], name: 'Sperling–Burnaby Lake' },
        { coordinates: [49.28547, -122.79174], name: 'Holdom' }
             
      ]
]








const purpleOptions = { color:'purple'}

const blueOptions = {color: 'blue'}

const center: [number, number] = [49.232813, -122.996996]

const Map = () => {
    return(

       
    
        <MapContainer
            style={{height: "100vh"}}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={false}
        >
            <TileLayer
            attribution='&copy; <a href="https://github.com/kcameron37/-MDIA-3109_Exercise_1_Leaflet_Map"> By Kaitlyn Cameron </a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
          
                     




            {stationExpo.map((expoLine, index) => (
                <div key={index}> 
                    {expoLine.map((station, index) => (
                        <Marker key={index} position={station.coordinates} icon={icon}>
                            <Popup>
                                {station.name}
                            </Popup>
                        </Marker>
                    ))}
                    {expoLine.length > 1 && <Polyline pathOptions={purpleOptions} positions={expoLine.map(station => station.coordinates)} />}
                </div>
            ))}

{stationMillennium.map((millenniumLine, index) => (
                <div key={index}>
                    {millenniumLine.map((station, index) => (
                        <Marker key={index} position={station.coordinates} icon={iconBlue}>
                            <Popup>
                                {station.name}
                            </Popup>
                        </Marker>
                    ))}
                    {millenniumLine.length > 1 && <Polyline pathOptions={blueOptions} positions={millenniumLine.map(station => station.coordinates)} />}
                </div>
            ))}
        </MapContainer>
    );
};

export default Map;