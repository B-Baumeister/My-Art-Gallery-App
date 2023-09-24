import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          image={piece.imageSource}
          artist={piece.artist}
        />
      ))}
    </ul>
  );
}
