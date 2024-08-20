import React from "react";

const MapWidget = () => {
    return (
        <div style={{ textAlign: "center", padding: "0 0" }}>
            <img
                src="location.PNG"
                alt="Map placeholder"
                style={{ maxWidth: "100%", height: "auto" }}
            />
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
                Адрес: Астана, Улица Туркестан, 16<br/>
                <a href="https://go.2gis.com/qrnhh">2gis: https://go.2gis.com/qrnhh</a>
            </p>
        </div>
    );
};

export default MapWidget;
