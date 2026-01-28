
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  Palette, 
  Type, 
  ChevronRight, 
  Gift, 
  Mail, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

const App = () => {
  // Navigation & Page State
  const [activePage, setActivePage] = useState('home');
  
  // Customization Logic State
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

  // Our Product Catalog
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

  const handleCustomizeClick = (product: any) => {
    setSelectedProduct(product);
    setActivePage('customize');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    alert(`Added to Bag! Your custom ${selectedProduct.name} will be crafted soon.`);
  };

  const renderHome = () => (
    <div className="animate-fade">
      <section className="hero">
        <div className="hero-content">
          <h1>Craft Gifts as <br /><span style={{color: 'var(--primary)'}}>Unique</span> as They Are.</h1>
          <p>Unforgettable moments deserve unforgettable tokens. Choose a piece from our atelier and leave your personal signature.</p>
          <button className="cta-button" onClick={() => setActivePage('shop')}>
            Browse Studio <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <div className="main-container">
        <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem'}}>Studio Favourites</h2>
        <div className="product-grid">
          {products.slice(0, 3).map(p => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>
              <div className="card-buttons">
                <button onClick={() => handleCustomizeClick(p)}>
                  <Sparkles size={16} /> Personalise
                </button>
              </div>
            </div>
          ))}
        </div>

        <section style={{marginTop: '6rem', padding: '4rem', background: '#fff', borderRadius: '40px', textAlign: 'center', border: '1px solid #f0f0f0'}}>
          <div style={{display: 'inline-block', padding: '15px', background: 'var(--light)', borderRadius: '20px', marginBottom: '20px'}}>
             <Gift size={40} color="var(--primary)" />
          </div>
          <h2 style={{marginBottom: '1.5rem', fontSize: '2.2rem'}}>The Gifting Process</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginTop: '2rem'}}>
            <div style={{flex: 1, minWidth: '220px'}}>
              <div style={{width: '50px', height: '50px', background: 'var(--secondary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 700}}>1</div>
              <h4 style={{marginBottom: '8px'}}>Select a Canvas</h4>
              <p style={{fontSize: '0.95rem', color: '#777'}}>Choose from our curated collection of high-quality items.</p>
            </div>
            <div style={{flex: 1, minWidth: '220px'}}>
              <div style={{width: '50px', height: '50px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 700}}>2</div>
              <h4 style={{marginBottom: '8px'}}>Add Your Message</h4>
              <p style={{fontSize: '0.95rem', color: '#777'}}>Use our live editor to preview your custom text instantly.</p>
            </div>
            <div style={{flex: 1, minWidth: '220px'}}>
              <div style={{width: '50px', height: '50px', background: 'var(--accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 700}}>3</div>
              <h4 style={{marginBottom: '8px'}}>Arrives Gift-Wrapped</h4>
              <p style={{fontSize: '0.95rem', color: '#777'}}>We ship your creation in a beautiful, presentation-ready box.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="main-container animate-fade" style={{padding: '4rem 0'}}>
      <div style={{textAlign: 'center', marginBottom: '4rem'}}>
        <h2 style={{fontSize: '2.8rem', marginBottom: '10px'}}>The Full Collection</h2>
        <p style={{color: '#888', maxWidth: '500px', margin: '0 auto'}}>Everything you need to create a one-of-a-kind surprise for your loved ones.</p>
      </div>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <div className="card-buttons">
              <button onClick={() => handleCustomizeClick(p)}>
                <Sparkles size={16} /> Customise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomize = () => (
    <div className="main-container animate-fade" style={{padding: '4rem 0'}}>
      <button 
        onClick={() => setActivePage('shop')} 
        style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '1rem'}}
      >
        <ArrowLeft size={18} /> Back to Collection
      </button>

      <div className="custom-section">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem'}}>
           <div style={{padding: '10px', background: 'var(--light)', borderRadius: '12px'}}>
              <Palette size={24} color="var(--primary)" />
           </div>
           <h2 style={{margin: 0, fontSize: '2rem'}}>Design Lab: <span style={{color: 'var(--primary)'}}>{selectedProduct.name}</span></h2>
        </div>
        
        <div className="custom-layout">
          {/* Live Preview Pane */}
          <div className="preview-pane">
            <img src={selectedProduct.img} alt="Product Preview" />
            <div 
              className="live-text" 
              style={{ color: customColor, fontFamily: customFont }}
            >
              {customText || "Your Name Here"}
            </div>
            <div style={{marginTop: '1.5rem', fontSize: '0.85rem', color: '#bbb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
              <CheckCircle2 size={14} /> Real-time 3D Preview
            </div>
          </div>

          {/* Interaction Pane */}
          <div className="editor-pane">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
              <h3 style={{margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <Type size={20} /> Content Editor
              </h3>
              <button 
                onClick={() => setIsPanelVisible(!isPanelVisible)}
                style={{fontSize: '0.8rem', background: '#f5f5f5', border: 'none', padding: '6px 14px', borderRadius: '10px', cursor: 'pointer', fontWeight: 600}}
              >
                {isPanelVisible ? 'Hide Editor' : 'Show Editor'}
              </button>
            </div>

            {isPanelVisible && (
              <div className="animate-fade">
                <div className="form-group">
                  <label>Personal Message</label>
                  <input 
                    type="text" 
                    value={customText} 
                    onChange={(e) => setCustomText(e.target.value)} 
                    maxLength={25}
                    placeholder="Enter names, dates, or messages..."
                  />
                  <div style={{textAlign: 'right', fontSize: '0.75rem', color: '#bbb', marginTop: '5px'}}>
                    {customText.length}/25 characters
                  </div>
                </div>

                <div className="form-group">
                  <label>Typography Style</label>
                  <select value={customFont} onChange={(e) => setCustomFont(e.target.value)}>
                    <option value="'Poppins', sans-serif">Modern Bold (Poppins)</option>
                    <option value="'Quicksand', sans-serif">Soft & Friendly (Quicksand)</option>
                    <option value="'Serif', Times New Roman">Classic Serif</option>
                    <option value="'Monospace', Courier New">Minimalist Monospace</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Ink or Stitch Color</label>
                  <div className="color-options">
                    {[
                      { hex: '#ffffff', label: 'Snow' }, 
                      { hex: '#ffcb74', label: 'Gold' }, 
                      { hex: '#ff8a71', label: 'Coral' }, 
                      { hex: '#333d42', label: 'Slate' }, 
                      { hex: '#64d8cb', label: 'Mint' }
                    ].map(color => (
                      <div 
                        key={color.hex}
                        className={`color-dot ${customColor === color.hex ? 'active' : ''}`}
                        style={{ background: color.hex }}
                        onClick={() => setCustomColor(color.hex)}
                        title={color.label}
                      />
                    ))}
                  </div>
                </div>

                <div style={{marginTop: '3rem', borderTop: '1px solid #f5f5f5', paddingTop: '2rem'}}>
                  <button className="cta-button" style={{width: '100%'}} onClick={handleAddToCart}>
                    <ShoppingBag size={20} /> Add to Bag — {selectedProduct.price}
                  </button>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '1.5rem', opacity: 0.5}}>
                    <Heart size={16} /> <span>Hand-crafted in 48h</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="main-container animate-fade" style={{padding: '6rem 0', maxWidth: '650px'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <div style={{display: 'inline-block', padding: '15px', background: 'var(--white)', borderRadius: '20px', marginBottom: '20px', boxShadow: 'var(--shadow)'}}>
           <Mail size={32} color="var(--secondary)" />
        </div>
        <h2 style={{fontSize: '2.5rem'}}>Bespoke Concierge</h2>
        <p style={{color: '#888'}}>Need bulk orders or specific artistic designs? Send our studio a message.</p>
      </div>

      <div className="custom-section">
        <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent! We will reply within 24 hours.'); setActivePage('home'); }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Full Name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="hello@example.com" required />
          </div>
          <div className="form-group">
            <label>How can we help?</label>
            <textarea 
              rows={5} 
              style={{width: '100%', padding: '1rem', borderRadius: '15px', border: '2px solid #f0f0f0', outline: 'none', fontFamily: 'inherit'}} 
              placeholder="Describe your project or question..."
              required
            ></textarea>
          </div>
          <button className="cta-button" style={{width: '100%', background: 'var(--dark)'}} type="submit">
            Send Inquiry
          </button>
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
          <h3 style={{marginBottom: '1rem', fontSize: '1.5rem'}}>GiftCustom Studio</h3>
          <p>The original destination for artisanal personalisation.</p>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Contact</a>
          </div>
          <div style={{marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem'}}>
            <p>&copy; 2024 GiftCustom. Part of the Student Designer Network.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
