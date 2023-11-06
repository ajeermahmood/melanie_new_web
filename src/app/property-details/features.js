"use client";

const FeaturesPropDetails = ({ features }) => {
  const allFeatures = JSON.parse(features.features);
  var new_arr = [];
  for (const key in allFeatures) {
    new_arr.push(allFeatures[key]);
  }
  return new_arr.map((f, index) => (
    <p key={index} className="m-0 lh-base color-gold fw500">
      {f}
    </p>
  ));
};

export default FeaturesPropDetails;
