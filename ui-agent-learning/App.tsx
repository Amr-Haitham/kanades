
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';
import { Product, CartItem, Category } from './types';
import { PRODUCTS, NAV_ITEMS, MASCOT_URL } from './constants';
import { getCraftRecommendation } from './services/geminiService';

// --- Home Page ---
const HomePage: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-accent-brown">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5zKLu7-1KNNJ9Ho086sqwCDsJQL1ZqRpUeUF6BVjTzRRS3MjpJKXY_Fu4iuhJdkDuT81gdFZSnf5hG6Ujoyx4WrvaLxClErxQmdzGjWevhGynKmqWRHpTc5Cpg_yMTAdZ1y7mFe3fYLOdQrcXNjJPv6MsJm1HvZ20-phfuPxPl9yGH6uNlSW3cmaCiCgpfpE9pXp7QI2YH7BJqocK4ILZcm5uuDzn2dnkIA8gAsAYZU6KmEVP4VsZ_fxZHNfTHjfXmzbWflFo0OM" 
            className="w-full h-full object-cover opacity-30" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-accent-brown via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              استكشف <br/>
              <span className="text-primary">كنوز يدوية أصيلة</span> <br/>
              مميزة
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              ادعم الحرفيين المحليين وأضف جمالاً فريداً مصنوعاً بحب إلى حياتك. من فن الماندالا المعقد إلى التصاميم المخصصة والتطريز التقليدي.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                تسوق الآن
                <span className="material-icons-round rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-accent-brown dark:text-white mb-2">إبداعات مميزة</h2>
            <p className="text-gray-500 dark:text-gray-400">تحف منتقاة من مجتمعنا الموهوب من الحرفيين</p>
          </div>
          <button className="text-primary font-bold hover:underline flex items-center gap-1">
            عرض الكل <span className="material-icons-round rotate-180 text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary/10 py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-4xl overflow-hidden aspect-video shadow-2xl">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyHB_wlOOOxr-NjMkj23VU49Zh2pottA8KHHwRxi9Btzs93VyhOsv3DFmGAMu0f6sXFZVo7EwVPTsghikGjoYZVt6bKM4gat7meKDp04jGb4x9vUvtkeIyXJwq5P8H8t_feYTZmVbUGsu8XJmGQmy4YRm1G9Z0TsipiYW9KKrSA3nmYvJKeOwFOkBj6uIDkKur_swbPgkc_mP8XAwNWKiSk0DkawV4c22g2amjuOYmGc9IQ0jrqru6DzYKIqhtrpRJRYJwwaqyGzhS" 
                 alt="Crafting" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-gray-100 dark:border-zinc-700">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <span className="material-icons-round">verified</span>
                 </div>
                 <h4 className="font-bold">جودة مضمونة</h4>
               </div>
               <p className="text-xs text-gray-500">نضمن لك أفضل الخامات المصنوعة يدوياً بكل إتقان.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-accent-brown dark:text-white">من نحن؟</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              فنانون متخصصون في صناعة المنتجات اليدوية الفريدة والإبداعية. نؤمن بأن الحرف اليدوية ليست مجرد منتجات، بل هي تعبير عن الهوية والإبداع.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">+10</div>
                <div className="text-sm text-gray-400">سنوات الخبرة</div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-400">صناعة يدوية</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Products Page ---
const ProductsPage: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 relative">
         <div className="bg-primary/10 inline-block px-12 py-4 rounded-3xl relative z-10">
            <h1 className="text-4xl font-extrabold text-primary">منتجاتنا</h1>
         </div>
         <p className="mt-4 text-gray-500">استكشف مجموعتنا من الكنوز الأصيلة المصنوعة يدوياً.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["all", "mandala", "wood", "gift-wrap", "costumes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as Category)}
            className={`px-6 py-3 rounded-2xl font-medium transition ${
              filter === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white dark:bg-zinc-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-700'
            }`}
          >
            {cat === "all" ? "الكل" : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

// --- Product Detail Page ---
const ProductDetail: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [qty, setQty] = useState(1);
  const [aiRec, setAiRec] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (product) {
      setLoadingAi(true);
      getCraftRecommendation(product.name, product.description).then(res => {
        setAiRec(res);
        setLoadingAi(false);
      });
    }
  }, [product]);

  if (!product) return <div className="p-20 text-center">المنتج غير موجود</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-4xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-soft">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition cursor-pointer border border-gray-100 dark:border-zinc-800">
                <img src={product.image} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block">
              {product.tags[0]}
            </span>
            <h1 className="text-4xl font-extrabold text-accent-brown dark:text-white mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
               <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-lg">star</span>)}
               </div>
               <span className="font-bold">{product.rating}</span>
               <span className="text-gray-400 text-sm">({product.reviews}+ تقييم)</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* AI Helper Card */}
          <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <span className="material-icons-round">auto_awesome</span>
              <h4 className="font-bold">رأي خبير قندس الذكي</h4>
            </div>
            {loadingAi ? (
              <div className="animate-pulse flex space-y-2 flex-col">
                <div className="h-2 bg-secondary/10 rounded w-full"></div>
                <div className="h-2 bg-secondary/10 rounded w-3/4"></div>
              </div>
            ) : (
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{aiRec}"</p>
            )}
            <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-20 transition">
              <span className="material-icons-round text-8xl">spa</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-6 border-y border-gray-100 dark:border-zinc-800">
            <span className="text-3xl font-bold text-primary">{product.price} EGP</span>
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-2xl p-2 border border-gray-100 dark:border-zinc-700">
              <button 
                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl font-bold transition"
              >
                -
              </button>
              <span className="w-8 text-center font-bold text-lg">{qty}</span>
              <button 
                onClick={() => setQty(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl font-bold transition"
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-white font-bold py-4 rounded-2xl hover:bg-gray-50 transition shadow-sm">
              شراء الآن
            </button>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2"
            >
              <span className="material-icons-round">shopping_cart</span>
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Cart Page ---
const CartPage: React.FC<{ 
  cart: CartItem[], 
  onUpdateQty: (id: string, delta: number) => void,
  onRemove: (id: string) => void
}> = ({ cart, onUpdateQty, onRemove }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 30;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-16">
        <div className="w-32 mb-[-20px] relative z-10">
          <img src={MASCOT_URL} alt="Mascot" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div className="bg-primary/10 rounded-3xl px-12 py-6 text-center shadow-sm w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-primary">عربة التسوق</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart List */}
        <div className="lg:col-span-8 space-y-6">
          {cart.length === 0 ? (
            <div className="bg-white dark:bg-zinc-800 rounded-4xl p-20 text-center shadow-sm">
              <span className="material-icons-round text-6xl text-gray-200 mb-4">shopping_basket</span>
              <p className="text-gray-400">سلتك فارغة حالياً</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-gray-50 dark:border-zinc-700">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-center sm:text-right">
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{item.tags[0]}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center bg-gray-50 dark:bg-zinc-900 rounded-xl p-1">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="w-8 h-8 hover:bg-white dark:hover:bg-zinc-800 rounded-lg transition font-bold">-</button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="w-8 h-8 hover:bg-white dark:hover:bg-zinc-800 rounded-lg transition font-bold">+</button>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl transition">
                      <span className="material-icons-round text-sm">delete_outline</span>
                    </button>
                  </div>
                </div>
                <div className="text-lg font-bold text-primary">
                  {item.price * item.quantity} EGP
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white dark:bg-zinc-800 rounded-4xl shadow-xl p-8 border border-gray-100 dark:border-zinc-700">
            <h2 className="text-2xl font-bold text-accent-brown dark:text-white mb-8 border-b pb-4">ملخص الطلب</h2>
            <div className="space-y-4 text-sm mb-8">
              <div className="flex justify-between text-gray-500">
                <span>المجموع الفرعي ({cart.length} منتجات)</span>
                <span className="font-bold text-gray-800 dark:text-white">{subtotal.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>الشحن</span>
                <span className="font-bold text-gray-800 dark:text-white">{shipping.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>الضريبة المقدرة (10%)</span>
                <span className="font-bold text-gray-800 dark:text-white">{tax.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t">
                <span>الإجمالي المقدر</span>
                <span>{total.toFixed(2)} EGP</span>
              </div>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition shadow-lg mb-4">
              إتمام الطلب
            </button>
            <button className="w-full bg-gray-50 dark:bg-zinc-700 text-gray-600 dark:text-gray-200 font-bold py-4 rounded-2xl hover:bg-gray-100 transition">
              متابعة التسوق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---
const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const handleUpdateQty = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  }, []);

  const handleRemove = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <Router>
      <Layout cartCount={cart.reduce((s, i) => s + i.quantity, 0)}>
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<ProductsPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} onUpdateQty={handleUpdateQty} onRemove={handleRemove} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
