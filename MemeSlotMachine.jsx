import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import captions from "./utils/captions";

const GIPHY_API_KEY = "GIPHY_API_KEY";

export default function MemeSlotMachine() {
  const [gifUrl, setGifUrl] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const [customTop, setCustomTop] = useState("");
  const [customBottom, setCustomBottom] = useState("");
  const [useRandom, setUseRandom] = useState(true);

  const fetchMeme = async () => {
    setIsSpinning(true);
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=funny&rating=pg`
        );
        const data = await response.json();
        const url = data.data?.images?.downsized_medium?.url;
        setGifUrl(url || "");

        if (useRandom) {
          const randomTop = captions[Math.floor(Math.random() * captions.length)];
          const randomBottom = captions[Math.floor(Math.random() * captions.length)];
          setTopText(randomTop);
          setBottomText(randomBottom);
        } else {
          setTopText(customTop || "");
          setBottomText(customBottom || "");
        }
      } catch (error) {
        console.error("Error fetching meme:", error);
      } finally {
        setIsSpinning(false);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full text-center">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">🎰 Meme Slot Machine</h1>

      {isSpinning ? (
        <div className="flex flex-col items-center justify-center h-[300px] animate-pulse">
          <div className="text-2xl text-gray-500 mb-2">🎲 Spinning...</div>
          <div className="w-32 h-32 border-8 border-dashed border-purple-300 rounded-full animate-spin"></div>
        </div>
      ) : (
        <MemeCard gifUrl={gifUrl} topText={topText} bottomText={bottomText} />
      )}

      <div className="flex items-center justify-center mt-4 mb-2">
        <label className="text-sm mr-2 font-medium">🎲 Use random captions?</label>
        <input
          type="checkbox"
          checked={useRandom}
          onChange={() => setUseRandom(!useRandom)}
          className="w-4 h-4"
        />
      </div>

      {!useRandom && (
        <div className="space-y-2 mb-4">
          <input
            type="text"
            value={customTop}
            onChange={(e) => setCustomTop(e.target.value)}
            placeholder="Top caption..."
            className="w-full px-3 py-2 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            value={customBottom}
            onChange={(e) => setCustomBottom(e.target.value)}
            placeholder="Bottom caption..."
            className="w-full px-3 py-2 rounded-lg border border-gray-300"
          />
        </div>
      )}

      <button
        onClick={fetchMeme}
        disabled={isSpinning}
        className={`mt-2 px-4 py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition ${
          isSpinning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin Meme"}
      </button>
    </div>
  );
}
