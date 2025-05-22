
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

type SearchType = 'wallet' | 'transaction' | 'token';

// Validation patterns for different blockchain addresses
const validationPatterns = {
  wallet: /^(0x[a-fA-F0-9]{40})$/,
  transaction: /^(0x[a-fA-F0-9]{64})$/,
  token: /^(0x[a-fA-F0-9]{40})$/
};

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('wallet');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const validateInput = (query: string, type: SearchType): boolean => {
    if (!query.trim()) {
      setError('Please enter a value to search');
      return false;
    }
    
    if (!validationPatterns[type].test(query)) {
      const errorMessages = {
        wallet: 'Invalid Ethereum wallet address. Must start with 0x followed by 40 hexadecimal characters.',
        transaction: 'Invalid transaction hash. Must start with 0x followed by 64 hexadecimal characters.',
        token: 'Invalid token contract address. Must start with 0x followed by 40 hexadecimal characters.'
      };
      setError(errorMessages[type]);
      return false;
    }
    
    setError('');
    return true;
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInput(searchQuery, searchType)) {
      // If validation passes, navigate to analysis page
      navigate(`/analysis?query=${encodeURIComponent(searchQuery)}&type=${searchType}`);
    } else {
      toast.error(error || "Invalid input format");
    }
  };
  
  const getPlaceholder = () => {
    switch(searchType) {
      case 'wallet':
        return 'Enter wallet address (e.g., 0x1234abcd...)';
      case 'transaction':
        return 'Enter transaction hash (0x followed by 64 characters)';
      case 'token':
        return 'Enter token contract address (0x...)';
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
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={getPlaceholder()}
                  className={`search-input pl-12 focus:shadow-lg transition-all duration-300 ${error ? 'border-red-500' : ''}`}
                />
                {error && (
                  <div className="mt-2 text-red-500 text-sm flex items-start">
                    <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
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
