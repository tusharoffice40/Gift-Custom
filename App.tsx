
import React, { useState, useEffect } from 'react';

const App = () => {
  // Website State
  const [activePage, setActivePage] = useState('home');
  
  // Customization State
  const [selectedProduct, setSelectedProduct] = useState({
    id: 1,
    name: 'Classic Gift Mug',
    price: '$14.99',
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600'
  });
  
  const [customText, setCustomText] = useState('Happy Birthday!');
  const [customColor, setCustomColor] = useState('#ffffff');
  const [customFont, setCustomFont] = useState("'Poppins', sans-serif");
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  // Product List
  const products = [
    { 
      id: 1, 
      name: 'Classic Gift Mug', 
      price: '$14.99', 
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 2, 
      name: 'Leather Journal', 
      price: '$28.50', 
      img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 3, 
      name: 'Executive Pen', 
      price: '$39.00', 
      img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 4, 
      name: 'Canvas Tote Bag', 
      price: '$19.99', 
      img: 'https://images.unsplash.com/photo-1544816153-097305547ca6?auto=format&fit=crop&q=80&w=600' 
    }
  ];

  const handleCustomize = (product: any) => {
    setSelectedProduct(product);
    setActivePage('customize');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    alert(`Excellent choice! Your custom ${selectedProduct.name} has been added to your bag.`);
  };

  const renderHome = () => (
    <div className="animate-fade">
      <section className="hero">
        <h1>Bespoke Gifts Made Simple</h1>
        <p>Choose a beautiful product, add your unique touch, and we'll handle the rest. Perfect for birthdays, weddings, or just because!</p>
        <button className="cta-button" onClick={() => setActivePage('shop')}>Browse Our Collection</button>
      </section>

      <div className="main-container">
        <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Our Trending Favourites</h2>
        <div className="product-grid">
          {products.slice(0, 3).map(p => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>
              <button onClick={() => handleCustomize(p)}>Personalise Now</button>
            </div>
          ))}
        </div>

        <section style={{marginTop: '4rem', padding: '3rem', background: '#fff', borderRadius: '30px', textAlign: 'center'}}>
          <h2 style={{marginBottom: '1rem'}}>How It Works</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
            <div style={{flex: 1, minWidth: '200px'}}>
              <div style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '10px'}}>Step 1</div>
              <p>Pick a high-quality product from our curated store.</p>
            </div>
            <div style={{flex: 1, minWidth: '200px'}}>
              <div style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '10px'}}>Step 2</div>
              <p>Use our real-time editor to add names or messages.</p>
            </div>
            <div style={{flex: 1, minWidth: '200px'}}>
              <div style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '10px'}}>Step 3</div>
              <p>We craft and ship your one-of-a-kind gift with care.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="main-container animate-fade" style={{padding: '3rem 0'}}>
      <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Atelier Selection</h2>
      <p style={{textAlign: 'center', color: '#888', marginBottom: '3rem'}}>Hand-picked items ready for your personal signature.</p>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button onClick={() => handleCustomize(p)}>Start Designing</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomize = () => (
    <div className="main-container animate-fade" style={{padding: '3rem 0'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem'}}>
        <button 
          onClick={() => setActivePage('shop')} 
          style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontWeight: 600}}
        >
          &larr; Back to Shop
        </button>
      </div>

      <div className="custom-section">
        <h2 style={{marginBottom: '2rem'}}>Personalising: <span style={{color: 'var(--primary)'}}>{selectedProduct.name}</span></h2>
        
        <div className="custom-layout">
          {/* Live Preview Pane */}
          <div className="preview-pane">
            <img src={selectedProduct.img} alt="Product Preview" />
            <div 
              className="live-text" 
              style={{ color: customColor, fontFamily: customFont }}
            >
              {customText || "Your Message Here"}
            </div>
            <div style={{marginTop: '1rem', fontSize: '0.8rem', color: '#bbb'}}>
              * Preview is an approximation
            </div>
          </div>

          {/* Interaction Pane */}
          <div className="editor-pane">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
              <h4 style={{margin: 0}}>Design Controls</h4>
              <button 
                onClick={() => setIsPanelVisible(!isPanelVisible)}
                style={{fontSize: '0.8rem', background: '#f0f0f0', border: 'none', padding: '4px 10px', borderRadius: '5px', cursor: 'pointer'}}
              >
                {isPanelVisible ? 'Hide Controls' : 'Show Controls'}
              </button>
            </div>

            {isPanelVisible && (
              <div className="animate-fade">
                <div className="form-group">
                  <label>Your Message (max 25 chars)</label>
                  <input 
                    type="text" 
                    value={customText} 
                    onChange={(e) => setCustomText(e.target.value)} 
                    maxLength={25}
                    placeholder="Type something sweet..."
                  />
                </div>

                <div className="form-group">
                  <label>Font Style</label>
                  <select value={customFont} onChange={(e) => setCustomFont(e.target.value)}>
                    <option value="'Poppins', sans-serif">Modern & Clean</option>
                    <option value="'Quicksand', sans-serif">Soft & Friendly</option>
                    <option value="'Serif', Times New Roman">Classic & Elegant</option>
                    <option value="'Monospace', Courier New">Retro & Typewriter</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Ink Color</label>
                  <div className="color-options">
                    {['#ffffff', '#ffcb74', '#ff8a71', '#333d42', '#64d8cb'].map(color => (
                      <div 
                        key={color}
                        className={`color-dot ${customColor === color ? 'active' : ''}`}
                        style={{ background: color }}
                        onClick={() => setCustomColor(color)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{marginTop: '2.5rem'}}>
                  <button className="cta-button" style={{width: '100%', padding: '1.2rem'}} onClick={handleAddToCart}>
                    Add Custom Gift to Bag — {selectedProduct.price}
                  </button>
                  <p style={{textAlign: 'center', marginTop: '1rem', color: '#888', fontSize: '0.9rem'}}>
                    Hand-crafted and shipped within 3-5 business days.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="main-container animate-fade" style={{padding: '5rem 0', maxWidth: '600px'}}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Need Help? We're Here!</h2>
      <div className="custom-section">
        <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent! Our gifting specialists will be in touch soon.'); setActivePage('home'); }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" required />
          </div>
          <div className="form-group">
            <label>How can we help?</label>
            <textarea 
              rows={5} 
              style={{width: '100%', padding: '0.8rem', borderRadius: '12px', border: '2px solid #eee'}} 
              placeholder="Tell us about your custom order ideas..."
              required
            ></textarea>
          </div>
          <button className="cta-button" style={{width: '100%'}} type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="app-shell">
      <header>
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>
            <span style={{color: 'var(--secondary)'}}>Gift</span>Custom
          </a>
          <nav>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('shop'); }}>All Gifts</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('customize'); }}>Design Lab</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {activePage === 'home' && renderHome()}
        {activePage === 'shop' && renderShop()}
        {activePage === 'customize' && renderCustomize()}
        {activePage === 'contact' && renderContact()}
      </main>

      <footer>
        <div className="main-container footer-content">
          <h3 style={{marginBottom: '1rem'}}>GiftCustom Studio</h3>
          <p>Hand-crafting memories, one gift at a time.</p>
          <div style={{margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '20px'}}>
            <a href="#" style={{color: 'white', opacity: 0.5}}>Instagram</a>
            <a href="#" style={{color: 'white', opacity: 0.5}}>Pinterest</a>
            <a href="#" style={{color: 'white', opacity: 0.5}}>Facebook</a>
          </div>
          <p style={{marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem'}}>
            &copy; 2024 GiftCustom Beginner Project. No real orders will be processed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
