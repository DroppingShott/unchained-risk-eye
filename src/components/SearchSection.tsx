
import React, { useState } from 'react';
import { Search, CircleCheck, CircleX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';

type SearchType = 'wallet' | 'transaction' | 'token';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('wallet');
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'safe' | 'suspicious' | 'high-risk' | null>(null);
  
  // Placeholder function to simulate search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Simulate random result for demo purposes
      const outcomes: ('safe' | 'suspicious' | 'high-risk')[] = ['safe', 'suspicious', 'high-risk'];
      const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
      
      setResult(randomResult);
      setIsLoading(false);
      setIsSearched(true);
    }, 1500);
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-unchained-navy mb-4">
              Analyze Blockchain Activity
            </h2>
            <p className="text-lg text-gray-600">
              Enter a wallet address, transaction hash, or token to check for suspicious activity.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex gap-2 mb-6">
              <Button
                type="button"
                variant={searchType === 'wallet' ? 'default' : 'outline'}
                onClick={() => setSearchType('wallet')}
                className={searchType === 'wallet' ? 'bg-unchained-navy text-white' : ''}
              >
                Wallet
              </Button>
              <Button
                type="button"
                variant={searchType === 'transaction' ? 'default' : 'outline'}
                onClick={() => setSearchType('transaction')}
                className={searchType === 'transaction' ? 'bg-unchained-navy text-white' : ''}
              >
                Transaction
              </Button>
              <Button
                type="button"
                variant={searchType === 'token' ? 'default' : 'outline'}
                onClick={() => setSearchType('token')}
                className={searchType === 'token' ? 'bg-unchained-navy text-white' : ''}
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
                  className="search-input pl-12"
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading || !searchQuery.trim()}
                className="w-full mt-4 bg-unchained-navy hover:bg-blue-800 text-white py-6 text-lg"
              >
                {isLoading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </form>
            
            {isSearched && result && (
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Analysis Result:</h3>
                <div className={`p-6 rounded-lg 
                  ${result === 'safe' 
                    ? 'bg-green-50 border border-green-200' 
                    : result === 'suspicious'
                      ? 'bg-yellow-50 border border-yellow-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {result === 'safe' && (
                      <CircleCheck className="h-8 w-8 text-green-500 mr-4" />
                    )}
                    {result === 'suspicious' && (
                      <CircleAlert className="h-8 w-8 text-yellow-500 mr-4" />
                    )}
                    {result === 'high-risk' && (
                      <CircleX className="h-8 w-8 text-red-500 mr-4" />
                    )}
                    
                    <div>
                      <h4 className={`font-bold text-lg
                        ${result === 'safe' 
                          ? 'text-green-700' 
                          : result === 'suspicious'
                            ? 'text-yellow-700'
                            : 'text-red-700'
                        }`}
                      >
                        {result === 'safe' 
                          ? 'Safe' 
                          : result === 'suspicious'
                            ? 'Suspicious Activity Detected'
                            : 'High Risk'
                        }
                      </h4>
                      <p className="text-gray-700 mt-1">
                        {result === 'safe' 
                          ? 'No suspicious activity detected on this blockchain address.' 
                          : result === 'suspicious'
                            ? 'Moderate risk level detected. Some suspicious patterns identified.'
                            : 'This address has been flagged for high-risk activity. Exercise extreme caution.'
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pl-12">
                    <h5 className="font-medium text-gray-800 mb-2">Risk Factors:</h5>
                    <ul className="list-disc pl-5 text-gray-600">
                      {result === 'safe' && (
                        <>
                          <li>Normal transaction patterns</li>
                          <li>No connection to known malicious addresses</li>
                          <li>Consistent with legitimate financial activity</li>
                        </>
                      )}
                      
                      {result === 'suspicious' && (
                        <>
                          <li>Unusual transaction frequency</li>
                          <li>Connection to addresses with moderate risk scores</li>
                          <li>Irregular value transfers</li>
                        </>
                      )}
                      
                      {result === 'high-risk' && (
                        <>
                          <li>Connected to known scam addresses</li>
                          <li>Suspicious fund flows consistent with money laundering</li>
                          <li>Multiple high-risk markers detected</li>
                          <li>Flagged by multiple data providers</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
