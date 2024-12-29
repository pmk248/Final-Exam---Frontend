import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  data: { _id: string; casualties: number }[];
}

const Map: React.FC<MapProps> = ({ data }) => {
  const regionCoordinates: { [key: string]: [number, number] } = {
    'South Asia': [28.0, 84.0],
    'Middle East & North Africa': [26.0, 50.0],
    'Sub-Saharan Africa': [-2.5, 23.6],
    'Southeast Asia': [13.0, 100.0],
    'Central America': [15.5, -90.0],
  };

  const defaultCoordinates: [number, number] = [0, 0]; // Fallback position

  if (!data || data.length === 0) {
    return <p>Loading map data...</p>;
  }

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {data.map((region) => {
        const coordinates = regionCoordinates[region._id] || defaultCoordinates;
        return (
          <Marker key={region._id} position={coordinates}>
            <Popup>
              <strong>{region._id}</strong> <br /> Casualties: {region.casualties}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
