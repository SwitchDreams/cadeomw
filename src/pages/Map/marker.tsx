import * as React from 'react';
import LatLng from 'pigeon-maps/lib';
import { MapMarkerIcon } from './icons';

interface Props {
  anchor: LatLng;

  // these are automatically set by the surrounding Map component from pigeon-map
  left: number;
  top: number;
}

const PersonalMarker: React.FC<Props> = ({ left, top, anchor }: Props) => {
  const PIN_CENTER = {
    x: 15,
    y: 31,
  };

  const MarkerProps = {
    style: {
      position: 'absolute',
      left: left - PIN_CENTER.x,
      top: top - PIN_CENTER.y,
    },
  };

  return <div />;
};
// <MapMarkerIcon {...MarkerProps} />
export default PersonalMarker;
