# 🎰 Meme Slot Machine

Welcome to the **Meme Slot Machine** — the dangerously unproductive app your boss warned you about.

Every spin delivers a random meme powered by:
- 🎲 A chaotic GIF (from Giphy)
- 🧠 Two suspiciously random captions
- ✍️ Or your own custom captions (if you're feeling witty)

> ⚠️ Caution: This app may cause excessive laughter, procrastination, and existential crises.

---

## 🧪 How It Works

1. Press the **"Spin Meme"** button.
2. Watch a dramatic spin animation.
3. Receive a totally unhinged meme.
4. Repeat until you're out of responsibilities.

---

## 📁 File Structure

```bash
src/
├── App.jsx                      # 🧠 Renders the main MemeSlotMachine component
├── components/
│   ├── MemeSlotMachine.jsx      # 🎰 Core logic: spinning, state, Giphy fetch
│   └── MemeCard.jsx             # 🖼 Displays the meme image with captions
├── utils/
│   └── captions.js              # 💬 Random captions to generate nonsense
```

---

## 🛠 Tech Stack

- React + TailwindCSS for that slick modern chaos
- Giphy API for infinite meme juice
- `useState` + `useEffect` because we're cool like that

---

## 🧑‍💻 Setup

```bash
git clone https://github.com/your-username/meme-slot-machine.git
cd meme-slot-machine
npm install
npm run dev
```

Open your browser to `http://localhost:5173` and enjoy the nonsense.

---

## 🔑 Giphy API Key

This app uses the [Giphy API](https://developers.giphy.com/).  
Get your API key and replace this line in `MemeSlotMachine.jsx`:

```js
const GIPHY_API_KEY = "GIPHY_API_KEY";
```

---

## 📸 Coming Soon

- Meme download button (so you can weaponize your creations)
- Meme history (so you can regret your past decisions)
- Sound effects (yes, slot machine *ding!*s are in scope)

---

## 👀 Preview

![funny meme](https://media.giphy.com/media/l0MYKDrmHd0Z4V7pu/giphy.gif)

---

## 🧊 Built With Love & Low Attention Span

> A side project by procrastinators, for procrastinators.
