import React from "react";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Germany Buses - Berlin Office Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.2091301984643!2d13.389324914731391!3d52.515843847697205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851db30dda3c3%3A0xffe4020d4a9321ec!2sFriedrichstra%C3%9Fe%2083%2C%2010117%20Berlin%2C%20Germany!5e0!3m2!1sen!2sae!4v1762408873409!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
