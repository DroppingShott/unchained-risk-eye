
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CircleCheck, CircleX, CircleAlert } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type SearchType = 'wallet' | 'transaction' | 'token';
type ResultType = 'safe' | 'suspicious' | 'high-risk' | null;

const Analysis = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<ResultType>(null);
  const [searchType, setSearchType] = useState<SearchType>('wallet');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Get query parameters
    const query = searchParams.get('query');
    const type = searchParams.get('type') as SearchType || 'wallet';
    
    if (!query) {
      navigate('/');
      return;
    }
    
    setSearchQuery(query);
    setSearchType(type);
    
    // Simulate analysis with loading state
    setIsLoading(true);
    
    const analyzeData = setTimeout(() => {
      // Simulate random result for demo purposes
      // In a real application, this would be an actual API call
      const outcomes: ResultType[] = ['safe', 'suspicious', 'high-risk'];
      const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
      
      setResult(randomResult);
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(analyzeData);
  }, [searchParams, navigate]);

  const getResultDetails = () => {
    if (result === 'safe') {
      return {
        title: 'Safe',
        description: 'No suspicious activity detected on this blockchain address.',
        color: 'text-green-700',
        bgColor: 'bg-green-50 border-green-200',
        icon: <CircleCheck className="h-8 w-8 text-green-500 mr-4" />
      };
    } else if (result === 'suspicious') {
      return {
        title: 'Suspicious Activity Detected',
        description: 'Moderate risk level detected. Some suspicious patterns identified.',
        color: 'text-yellow-700',
        bgColor: 'bg-yellow-50 border-yellow-200',
        icon: <CircleAlert className="h-8 w-8 text-yellow-500 mr-4" />
      };
    } else {
      return {
        title: 'High Risk',
        description: 'This address has been flagged for high-risk activity. Exercise extreme caution.',
        color: 'text-red-700',
        bgColor: 'bg-red-50 border-red-200',
        icon: <CircleX className="h-8 w-8 text-red-500 mr-4" />
      };
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-unchained-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-unchained-navy mb-6">Analysis Results</h1>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <span className="font-semibold text-gray-700 mr-2">Type:</span>
                <span className="py-1 px-3 bg-unchained-navy text-white rounded-full text-sm capitalize">
                  {searchType}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 mr-2">Address:</span>
                <span className="font-mono bg-gray-100 py-1 px-2 rounded text-sm break-all">
                  {searchQuery}
                </span>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 border-4 border-unchained-navy border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium text-unchained-navy">Analyzing blockchain data...</p>
                <p className="text-gray-500 mt-2">This may take a moment as we scan for suspicious activities</p>
              </div>
            ) : result && (
              <div className="mt-8 animate-scale-in">
                <h3 className="font-semibold text-lg mb-4">Analysis Result:</h3>
                <div className={`p-6 rounded-lg border ${getResultDetails().bgColor}`}>
                  <div className="flex items-center">
                    {getResultDetails().icon}
                    
                    <div>
                      <h4 className={`font-bold text-lg ${getResultDetails().color}`}>
                        {getResultDetails().title}
                      </h4>
                      <p className="text-gray-700 mt-1">
                        {getResultDetails().description}
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
                
                <div className="mt-8">
                  <button 
                    onClick={() => navigate('/')} 
                    className="bg-unchained-navy text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Analyze Another Address
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
