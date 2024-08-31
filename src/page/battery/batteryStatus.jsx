// BatteryStatus.js
import React, { useState, useEffect } from "react";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charging, setCharging] = useState(null);

  useEffect(() => {
    const updateBatteryStatus = (battery) => {
      setBatteryLevel(Math.floor(battery.level * 100));
      setCharging(battery.charging);

      battery.addEventListener("levelchange", () =>
        setBatteryLevel(Math.floor(battery.level * 100))
      );
      battery.addEventListener("chargingchange", () =>
        setCharging(battery.charging)
      );
    };

    navigator.getBattery().then((battery) => {
      updateBatteryStatus(battery);
    });
  }, []);

  return (
    <div className="battery-status">
      {batteryLevel !== null ? (
        <div>
          <p>Battery: {batteryLevel}%</p>
          <p>{charging ? "Charging" : "Not Charging"}</p>
        </div>
      ) : (
        <p>Fetching battery status...</p>
      )}
    </div>
  );
};

export default BatteryStatus;
