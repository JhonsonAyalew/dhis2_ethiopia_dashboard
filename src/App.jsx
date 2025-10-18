import { useState, useEffect } from "react";
import { FiHeart, FiMoon, FiSun, FiLink, FiUsers, FiSearch, FiStar, FiLock, FiCheck, FiX } from "react-icons/fi";
import { FaTelegram, FaEthereum, FaBitcoin } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import "./App.css";

const channelsData = [
  { id: 1, name: "Crypto Ethiopia", category: "Crypto", description: "Latest crypto updates and market trends in Ethiopia.", platform: "Telegram", link: "https://t.me/cryptoethiopia", members: 1200, trending: true, avatar: "https://images.unsplash.com/photo-1620336655055-bd87c1e4d981?w=100&h=100&fit=crop&crop=face" },
  { id: 2, name: "NFT Addis Creators", category: "NFT", description: "Explore NFT art and digital collectibles from Ethiopia.", platform: "Telegram", link: "https://t.me/nftaddis", members: 850, trending: false, avatar: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=100&h=100&fit=crop&crop=face" },
  { id: 3, name: "Tech & Startup News", category: "Tech", description: "Updates on startups and technology in Ethiopia.", platform: "Telegram", link: "https://t.me/techstartup", members: 950, trending: true, avatar: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop&crop=face" },
  { id: 4, name: "Blockchain Developers", category: "Crypto", description: "Community for blockchain enthusiasts and developers.", platform: "Telegram", link: "https://t.me/blockchaindevs", members: 700, trending: false, avatar: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=face" },
  { id: 5, name: "AI & ML Ethiopia", category: "Tech", description: "Discussions about Artificial Intelligence & Machine Learning.", platform: "Telegram", link: "https://t.me/ai_ml_ethiopia", members: 540, trending: false, avatar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=face" },
  { id: 6, name: "NFT Artists Hub", category: "NFT", description: "Collaborate and showcase Ethiopian NFT art.", platform: "Telegram", link: "https://t.me/nftartistshub", members: 600, trending: true, avatar: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop&crop=face" },
  { id: 7, name: "Crypto Trading Signals", category: "Crypto", description: "Receive crypto trading signals and tips.", platform: "Telegram", link: "https://t.me/cryptosignals", members: 1500, trending: true, avatar: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=100&h=100&fit=crop&crop=face" },
  { id: 8, name: "Tech Careers Ethiopia", category: "Tech", description: "Find tech job updates, internships, and career guidance.", platform: "Telegram", link: "https://t.me/techcareers", members: 400, trending: false, avatar: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=100&h=100&fit=crop&crop=face" },
  // VIP Channels
  { id: 9, name: "Crypto Signals VIP", category: "Crypto", description: "Premium crypto trading signals and expert analysis. Get daily profitable signals.", platform: "Telegram", members: 89, trending: true, avatar: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop&crop=face", isVIP: true, price: 299, features: ["Daily Trading Signals", "Market Analysis", "Private Group Access", "24/7 Support"] },
  { id: 10, name: "NFT Alpha Club", category: "NFT", description: "Exclusive NFT drops and early access to Ethiopian NFT projects.", platform: "Telegram", members: 45, trending: false, avatar: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&h=100&fit=crop&crop=face", isVIP: true, price: 199, features: ["Early NFT Access", "Artist Collaborations", "Whitelist Spots", "Community Events"] },
  { id: 11, name: "Tech Mastermind", category: "Tech", description: "Advanced tech discussions and mentorship from industry experts.", platform: "Telegram", members: 67, trending: true, avatar: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=face", isVIP: true, price: 399, features: ["Expert Mentorship", "Job Opportunities", "Project Reviews", "Networking"] },
];

const paymentMethods = {
  TELEBIRR: {
    name: "Telebirr",
    icon: "📱",
    instructions: "Send payment to 2519 12 34 567 and upload receipt below",
    number: "2519 12 34 567"
  },
  CHAPA: {
    name: "Chapa",
    icon: "💳", 
    instructions: "Secure online payment with card or mobile banking",
    number: null
  },
  CBE: {
    name: "CBE Bank",
    icon: "🏦",
    instructions: "Transfer to Account: 1000 2345 6789 (Ethio Social Directory)",
    number: "1000 2345 6789"
  }
};

function App() {
  const [channels, setChannels] = useState(channelsData);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [receiptImage, setReceiptImage] = useState(null);
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
      const btn = document.querySelector(`[data-id="${id}"]`);
      if (btn) {
        btn.classList.add("pulse");
        setTimeout(() => btn.classList.remove("pulse"), 600);
      }
    }
  };

  const handleVIPJoin = (channel) => {
    setSelectedChannel(channel);
    setShowPaymentModal(true);
    setPaymentStep(1);
    setSelectedPayment(null);
    setReceiptImage(null);
    setPaymentSuccess(false);
  };

  const handlePaymentSubmit = () => {
    // Simulate payment processing
    setPaymentStep(2);
    setTimeout(() => {
      setPaymentSuccess(true);
      setPaymentStep(3);
    }, 2000);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedChannel(null);
    setSelectedPayment(null);
    setReceiptImage(null);
    setPaymentStep(1);
    setPaymentSuccess(false);
  };

  const sortedChannels = [...channels].sort((a, b) => {
    if (sortBy === "members") return b.members - a.members;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "trending") return b.trending - a.trending;
    return 0;
  });

  const filteredChannels = sortedChannels.filter(c => {
    const matchesCategory = filter === "All" || c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                         c.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryIcons = {
    Crypto: <FaBitcoin />,
    NFT: <SiHandshake />,
    Tech: <FaEthereum />
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <FaTelegram className="logo-icon" />
            <h1>Ethio Social Directory</h1>
          </div>
          <div className="header-controls">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search channels..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
              />
            </div>
            <button className="mode-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">{channels.length}</span>
          <span className="stat-label">Channels</span>
        </div>
        <div className="stat">
          <span className="stat-number">{favorites.length}</span>
          <span className="stat-label">Favorites</span>
        </div>
        <div className="stat">
          <span className="stat-number">{channels.filter(c => c.trending).length}</span>
          <span className="stat-label">Trending</span>
        </div>
        <div className="stat">
          <span className="stat-number">{channels.filter(c => c.isVIP).length}</span>
          <span className="stat-label">VIP</span>
        </div>
      </div>

      <div className="controls">
        <div className="filters">
          {["All", "Crypto", "NFT", "Tech"].map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat !== "All" && <span className="category-icon">{categoryIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>
        <div className="sort-container">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
            <option value="default">Sort by</option>
            <option value="members">Most Members</option>
            <option value="name">Name</option>
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>

      <main className="channels-grid">
        {filteredChannels.length > 0 ? (
          filteredChannels.map(channel => (
            <div key={channel.id} className={`card ${channel.isVIP ? 'vip-card' : ''}`}>
              {channel.isVIP && (
                <div className="vip-badge">
                  <FiStar className="vip-star" />
                  VIP
                </div>
              )}
              <div className="card-header">
                <div className="avatar-container">
                  <img src={channel.avatar} alt={channel.name} className="avatar"/>
                </div>
                <div className="card-title">
                  <h2>{channel.name}</h2>
                  <div className="card-title-in">
                    <span className="category">
                      {categoryIcons[channel.category]} {channel.category}
                    </span>
                    {channel.trending && <span className="trending-badge"><FiStar /> Trending</span>}
                  </div>
                </div>
                <button 
                  className={`favorite-btn ${favorites.includes(channel.id) ? "favorited" : ""}`}
                  onClick={() => toggleFavorite(channel.id)}
                  data-id={channel.id}
                >
                  <FiHeart />
                </button>
              </div>
              <p className="card-desc">{channel.description}</p>

              {channel.isVIP && (
                <div className="vip-features">
                  <div className="vip-price-tag">
                    <span className="price">{channel.price} ETB</span>
                    <span className="period">/month</span>
                  </div>
                  <div className="features-list">
                    {channel.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FiCheck className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-footer">
                <div className="members"><FiUsers /> {channel.members.toLocaleString()} members</div>
                {channel.isVIP ? (
                  <button 
                    className="vip-join-btn"
                    onClick={() => handleVIPJoin(channel)}
                  >
                    <FiLock /> Join VIP
                  </button>
                ) : (
                  <a href={channel.link} target="_blank" rel="noopener noreferrer" className="open-btn">
                    <FaTelegram /> Join
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No channels found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Payment Modal */}
      {showPaymentModal && selectedChannel && (
        <div className="modal-overlay">
          <div className="payment-modal">
            <div className="modal-header">
              <h2>Join {selectedChannel.name}</h2>
              <button className="close-btn" onClick={closePaymentModal}>
                <FiX />
              </button>
            </div>

            {paymentStep === 1 && (
              <div className="payment-step">
                <div className="channel-summary">
                  <img src={selectedChannel.avatar} alt={selectedChannel.name} className="summary-avatar" />
                  <div className="summary-info">
                    <h3>{selectedChannel.name}</h3>
                    <div className="vip-price-tag large">
                      <span className="price">{selectedChannel.price} ETB</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                </div>

                <div className="payment-methods">
                  <h4>Select Payment Method</h4>
                  {Object.entries(paymentMethods).map(([key, method]) => (
                    <div 
                      key={key}
                      className={`payment-option ${selectedPayment === key ? 'selected' : ''}`}
                      onClick={() => setSelectedPayment(key)}
                    >
                      <div className="payment-icon">{method.icon}</div>
                      <div className="payment-info">
                        <div className="payment-name">{method.name}</div>
                        <div className="payment-instruction">{method.instructions}</div>
                      </div>
                      <div className="radio-circle">
                        {selectedPayment === key && <div className="radio-dot"></div>}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedPayment && (
                  <div className="payment-actions">
                    <button className="pay-now-btn" onClick={handlePaymentSubmit}>
                      Pay {selectedChannel.price} ETB
                    </button>
                  </div>
                )}
              </div>
            )}

            {paymentStep === 2 && (
              <div className="payment-step processing">
                <div className="processing-spinner"></div>
                <h3>Processing Payment</h3>
                <p>Please wait while we process your payment...</p>
              </div>
            )}

            {paymentStep === 3 && (
              <div className="payment-step success">
                <div className="success-icon">
                  <FiCheck />
                </div>
                <h3>Payment Successful!</h3>
                <p>You now have access to {selectedChannel.name}</p>
                <div className="success-actions">
                  <button className="success-btn" onClick={closePaymentModal}>
                    Continue Browsing
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Ethiopian Crypto & Social Directory</p>
          <p>Built for Telegram Community</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
