import React, { useEffect, useState } from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { googleMapApiKey } from "../../../../../apiProvider";
import CommonLoader from "../../../../layout/Loader/CommonLoader";

type Props = {
    hospitalDetails: any;
};

const PHospitalMap: React.FC<Props> = ({ hospitalDetails }) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: googleMapApiKey });

    const [center, setCenter] = useState({
        lat: 51.49056885,
        lng: -0.17262143336605104,
    }); // Initialize with a default center. Default center is 0
    // const [address, setAddress] = useState(hospitalDetails.location);
    const address = hospitalDetails?.location;

    useEffect(() => {
        if (isLoaded) {
            // Use the Geocoding API to convert the address to coordinates
            const geocoder = new window.google.maps.Geocoder();
            console.log("Geocoding Started", geocoder);
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK" && results![0]) {
                    console.log("Geocoding OK", results);

                    setCenter({
                        lat: results![0].geometry.location.lat(),
                        lng: results![0].geometry.location.lng(),
                    });
                } else {
                    console.error("Geocoding failed for the provided address.");
                }
            });
        }
    }, [isLoaded, address]);

    return (
        <div className="w-full h-full">
            {isLoaded ? (
                <GoogleMap
                    zoom={15}
                    center={center}
                    mapContainerClassName="w-full h-full min-h-[60vh]"
                >
                    <Marker position={center} />
                </GoogleMap>
            ) : (
                <CommonLoader />
            )}
        </div>
    );
};

export default PHospitalMap;
