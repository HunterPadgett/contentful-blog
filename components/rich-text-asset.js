import Image from "next/image";

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    // console.log(asset);
    return (
      <Image
        src={asset.url}
        width={700}
        height={1400}
        alt={asset.description}
        loader={() => asset.url}
      />
    );
  }

  return null;
}
