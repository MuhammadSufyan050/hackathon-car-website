export const getCarsQuery = `*[_type == "car"]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }`;
  