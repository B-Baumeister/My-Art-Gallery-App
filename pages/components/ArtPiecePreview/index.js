import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <ul>
      <li>
        <Image src={image} width={200} height={200} alt={"test"} />
        <p>
          {title} by {artist}
        </p>
      </li>
    </ul>
  );
}
