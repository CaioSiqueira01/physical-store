const haversine = (lat1, long1, lat2, long2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;

    const R = 6371; // raio da terra em km
    const dLat = toRadians(lat2 - lat1);
    const dLong = toRadians(long2 - long1);

    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLong / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distância em km
};

module.exports = { haversine };