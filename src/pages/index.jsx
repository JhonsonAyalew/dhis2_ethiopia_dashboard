import { useState, useEffect } from "react";
import { FiHeart, FiSearch, FiMoon, FiSun, FiLink } from "react-icons/fi";
import "./index.css";

const channelsData = [
  {
    id: 1,
    name: "Crypto Ethiopia",
    category: "Crypto",
    description: "Latest crypto updates and market trends in Ethiopia.",
    platform: "Telegram",
    link: "https://t.me/cryptoethiopia",
    members: 1200,
    trending: true,
  },
  {
    id: 2,
    name: "NFT Addis Creators",
    category: "NFT",
    description: "Explore NFT art and digital collectibles from Ethiopia.",
    platform: "Telegram",
    link: "https://t.me/nftaddis",
    members: 850,
    trending: false,
  },
  {
    id: 3,
    name: "Tech & Startup News",
    category: "Tech",
    description: "Updates on startups and technology in Ethiopia.",
    platform: "Telegram",
    link: "https://t.me/techstartup",
    members: 950,
    trending: true,
  },
  {
    id: 4,
    name: "Blockchain Developers",
    category: "Crypto",
    description: "Community for blockchain enthusiasts and developers.",
    platform: "Telegram",
    link: "https://t.me/blockchaindevs",
    members: 700,
    trending: false,
  },
  {
    id: 5,
    name: "AI & ML Ethiopia",
    category: "Tech",
    description: "Discussions about Artificial Intelligence & Machine Learning.",
    platform: "Telegram",
    link: "https://t.me/ai_ml_ethiopia",
    members: 540,
    trending: false,
  },
  {
    id: 6,
    name: "NFT Artists Hub",
    category: "NFT",
    description: "Collaborate and showcase Ethiopian NFT art.",
    platform: "Telegram",
    link: "https://t.me/nftartistshub",
    members: 600,
    trending: true,
  },
  {
    id: 7,
    name: "Crypto Trading Signals",
    category: "Crypto",
    description: "Receive crypto trading signals and tips.",
    platform: "Telegram",
    link: "https://t.me/cryptosignals",
    members: 1500,
    trending: true,
  },
  {
    id: 8,
    name: "Tech Careers Ethiopia",
    category: "Tech",
    description: "Find tech job updates, internships, and career guidance.",
    platform: "Telegram",
    link: "https://t.me/techcareers",
    members: 400,
    trending: false,
  },
  // Add more channels if needed
];

function App() {
  const [channels, setChannels] = useState(channelsData);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredChannels = channels.filter((c) => {
    const matchesCategory = filter === "All" || c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
          Ethiopian Crypto & Social Directory
        </h1>
        <div className="flex items-center mt-2 sm:mt-0 space-x-2 w-full sm:w-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <input
            type="text"
            placeholder="Search channels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white flex-1"
          />
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {["All", "Crypto", "NFT", "Tech"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filter === cat
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-blue-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Channels Grid */}
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredChannels.map((channel) => (
          <div
            key={channel.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-start p-4 relative">
              <h2 className="font-bold text-lg dark:text-white">{channel.name}</h2>
              <button
                onClick={() => toggleFavorite(channel.id)}
                className="favorite-btn absolute top-4 right-4"
              >
                <FiHeart
                  size={20}
                  fill={favorites.includes(channel.id) ? "red" : "none"}
                  className={favorites.includes(channel.id) ? "text-red-500" : "text-gray-400"}
                />
              </button>
              {channel.trending && (
                <span className="trending">Trending</span>
              )}
            </div>
            <p className="card-desc flex-1">{channel.description}</p>
            <div className="px-4 pb-2 text-gray-500 dark:text-gray-400 text-sm">
              {channel.members} members
            </div>
            <a
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="open-btn flex items-center justify-center gap-2"
            >
              <FiLink /> Open in {channel.platform}
            </a>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 dark:text-gray-400">
        &copy; 2025 Ethiopian Crypto Directory. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
