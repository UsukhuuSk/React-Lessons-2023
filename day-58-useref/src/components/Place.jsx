import PlaceImage from "./PlaceImage";
export default function Place({ place, imageSize }) {
  return (
    <div>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {":" + place.description}
      </p>
    </div>
  );
}
