const displayMeasurement = (measurement) => {
  if (measurement === 'KILOGRAMS') {
    return 'kg';
  }

  if (measurement === 'GRAMS') {
    return 'g';
  }

  return measurement.toLowerCase();
};

export default displayMeasurement;
