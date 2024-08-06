import { useState, useRef, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Login from '../../(auth)/login/page';
import Signup from '../../(auth)/Signup/page';

const Header: React.FC = () => {
  const [currency, setCurrency] = useState<string>('INR ₹');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      if (searchRef.current && !searchRef.current.contains(mouseEvent.target as Node)) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTabSwitch = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  return (
    <>
      <header className="bg- #2C4456" style={{ backgroundColor: '#9F7F7E' }}>
        <div className="text-center py-4 text-base font-normal text-white">
          Free Shipping on all domestic orders - Shop Now
        </div>
        <div className="py-1 px-5 flex items-center justify-between" style={{ backgroundColor: '#ececec' }}>
          <div className="flex items-center">
            <Image src="/Firrki_Logo.png" alt="Firki Logo" width={250} height={350} />
            <nav className="ml-8 flex items-center space-x-6 text-base" style={{ marginLeft: '17.5rem' }}>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Home</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Our Story</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Shop</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold flex items-center">
                <Image src="/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={48} height={58} />
              </a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4" style={{ marginRight: '20px' }}>
            <div className="relative" ref={searchRef} style={{ marginLeft: '-50px' }}>
              <FaSearch
                onClick={toggleSearch}
                className="w-6 h-6 cursor-pointer"
              />
              {searchOpen && (
                <div className="absolute mt-2 left-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500"
                    style={{ backgroundColor: '#d9e2d6' }}
                  />
                </div>
              )}
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-sm border border-gray-300 py-2 px-3 rounded-full focus:outline-none focus:border-pink-500"
              style={{ backgroundColor: '#d9e2d6' }}
            >
              <option value="INR ₹">INR ₹</option>
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#AD8C87]">
                <FaHeart className="w-6 h-6 " />
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                <FaShoppingCart className="w-6 h-6 " />
              </a>
              <a href="#" className="hover:text-[#AD8C87]" onClick={toggleModal}>
                <FaUser className="w-6 h-6 " />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of your component */}
      
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-end mb-4">
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => handleTabSwitch('login')}
                className={`px-4 py-2 ${activeTab === 'login' ? 'bg-gray-200' : 'bg-white'}`}
              >
                Login
              </button>
              <button
                onClick={() => handleTabSwitch('register')}
                className={`px-4 py-2 ${activeTab === 'register' ? 'bg-gray-200' : 'bg-white'}`}
              >
                Register
              </button>
            </div>
            {activeTab === 'login' ? <Login /> : <Signup />}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
