
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SearchType = 'wallet' | 'transaction' | 'token';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('wallet');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Redirect to analysis page with query parameters
    navigate(`/analysis?query=${encodeURIComponent(searchQuery)}&type=${searchType}`);
  };
  
  const getPlaceholder = () => {
    switch(searchType) {
      case 'wallet':
        return 'Enter wallet address (e.g., 0x1234...)';
      case 'transaction':
        return 'Enter transaction hash';
      case 'token':
        return 'Enter token contract address';
      default:
        return 'Search...';
    }
  };
  
  return (
    <section id="search" className="py-16 bg-unchained-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl font-bold text-unchained-navy mb-4">
              Analyze Blockchain Activity
            </h2>
            <p className="text-lg text-gray-600">
              Enter a wallet address, transaction hash, or token to check for criminal activity and suspicious behavior.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 animate-scale-in">
            <div className="flex gap-2 mb-6">
              <Button
                type="button"
                variant={searchType === 'wallet' ? 'default' : 'outline'}
                onClick={() => setSearchType('wallet')}
                className={`transition-all duration-300 ${searchType === 'wallet' ? 'bg-unchained-navy text-white' : ''}`}
              >
                Wallet
              </Button>
              <Button
                type="button"
                variant={searchType === 'transaction' ? 'default' : 'outline'}
                onClick={() => setSearchType('transaction')}
                className={`transition-all duration-300 ${searchType === 'transaction' ? 'bg-unchained-navy text-white' : ''}`}
              >
                Transaction
              </Button>
              <Button
                type="button"
                variant={searchType === 'token' ? 'default' : 'outline'}
                onClick={() => setSearchType('token')}
                className={`transition-all duration-300 ${searchType === 'token' ? 'bg-unchained-navy text-white' : ''}`}
              >
                Token
              </Button>
            </div>
            
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={getPlaceholder()}
                  className="search-input pl-12 focus:shadow-lg transition-all duration-300"
                />
              </div>
              <Button 
                type="submit"
                disabled={!searchQuery.trim()}
                className="w-full mt-4 bg-unchained-navy hover:bg-blue-800 text-white py-6 text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Analyze
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
