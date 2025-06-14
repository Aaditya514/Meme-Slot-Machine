export default function MemeCard({ gifUrl, topText, bottomText }) {
  return (
    <div className="relative w-full aspect-[4/3] mb-4 border-4 border-black rounded-xl overflow-hidden">
      {gifUrl && (
        <img
          src={gifUrl}
          alt="Meme"
          className="object-cover w-full h-full"
        />
      )}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-extrabold drop-shadow-md">
        {topText}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-extrabold drop-shadow-md">
        {bottomText}
      </div>
    </div>
  );
}
