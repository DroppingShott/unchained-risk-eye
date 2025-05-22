
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CircleCheck, CircleX, CircleAlert, ArrowLeft, Shield, Activity, Wallet, Database } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

type SearchType = 'wallet' | 'transaction' | 'token';
type ResultType = 'safe' | 'suspicious' | 'high-risk' | null;

// Example Ethereum dataset for demo (using Kaggle dataset information)
const ethDataset = {
  // Some example suspicious wallets from the dataset
  suspiciousWallets: [
    '0x72a5843cc08275c8171e582972aa4fda8c397b2a',
    '0x94f5fbaa000000000000000000000000000000000',
    '0xfc2c4d73fcd3c014d71f10e85f229b9ff6a0d0cd',
    '0x901bb9583b24d97e995513c6778dc6888ab6870e'
  ],
  // Some example high-risk wallets from the dataset
  highRiskWallets: [
    '0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a',
    '0x7657ca877fac31d20528b473162e39b6e152fd2e',
    '0x4df812f6064def1e5e029f1ca858777cc98d2d81',
    '0x4156d3342d5c385a87d264f90653733592000581'
  ]
};

const Analysis = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<ResultType>(null);
  const [searchType, setSearchType] = useState<SearchType>('wallet');
  const [searchQuery, setSearchQuery] = useState('');
  const [detailedData, setDetailedData] = useState<any>(null);
  
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
      // Check against our dataset for wallet addresses
      const queryLower = query.toLowerCase();
      let resultValue: ResultType;
      let details: any = {};
      
      if (type === 'wallet') {
        // Check if wallet is in our suspicious or high-risk lists
        if (ethDataset.highRiskWallets.some(addr => addr.toLowerCase() === queryLower)) {
          resultValue = 'high-risk';
          details = {
            riskScore: Math.floor(Math.random() * 21) + 80, // 80-100
            transactionCount: Math.floor(Math.random() * 200) + 50,
            flaggedTransactions: Math.floor(Math.random() * 40) + 10,
            firstSeen: '2021-06-14',
            associatedWithPhishing: true,
            connectedToSanctionedEntities: true,
            mixerUsage: true,
            fundsFromDarkMarkets: true
          };
        } else if (ethDataset.suspiciousWallets.some(addr => addr.toLowerCase() === queryLower)) {
          resultValue = 'suspicious';
          details = {
            riskScore: Math.floor(Math.random() * 30) + 50, // 50-79
            transactionCount: Math.floor(Math.random() * 100) + 20,
            flaggedTransactions: Math.floor(Math.random() * 10) + 2,
            firstSeen: '2022-03-22',
            associatedWithPhishing: Math.random() > 0.5,
            connectedToSanctionedEntities: false,
            mixerUsage: Math.random() > 0.7,
            fundsFromDarkMarkets: false
          };
        } else {
          resultValue = 'safe';
          details = {
            riskScore: Math.floor(Math.random() * 49) + 1, // 1-49
            transactionCount: Math.floor(Math.random() * 50) + 1,
            flaggedTransactions: 0,
            firstSeen: '2023-01-05',
            associatedWithPhishing: false,
            connectedToSanctionedEntities: false,
            mixerUsage: false,
            fundsFromDarkMarkets: false
          };
        }
      } else {
        // For transactions and tokens, generate random results for demo purposes
        const outcomes: ResultType[] = ['safe', 'suspicious', 'high-risk'];
        resultValue = outcomes[Math.floor(Math.random() * outcomes.length)];
        
        if (resultValue === 'high-risk') {
          details = {
            riskScore: Math.floor(Math.random() * 21) + 80,
            involvedWallets: Math.floor(Math.random() * 5) + 3,
            flaggedWallets: Math.floor(Math.random() * 3) + 1,
            transactionDate: '2022-11-09',
            largeValueTransfer: true,
            obfuscationTechniques: true
          };
        } else if (resultValue === 'suspicious') {
          details = {
            riskScore: Math.floor(Math.random() * 30) + 50,
            involvedWallets: Math.floor(Math.random() * 3) + 2,
            flaggedWallets: 1,
            transactionDate: '2023-05-17',
            largeValueTransfer: Math.random() > 0.5,
            obfuscationTechniques: false
          };
        } else {
          details = {
            riskScore: Math.floor(Math.random() * 49) + 1,
            involvedWallets: 2,
            flaggedWallets: 0,
            transactionDate: '2024-01-28',
            largeValueTransfer: false,
            obfuscationTechniques: false
          };
        }
      }
      
      setResult(resultValue);
      setDetailedData(details);
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
  
  const renderRiskScoreGauge = (score: number) => {
    let bgColor = 'bg-gradient-to-r from-green-500 to-green-300';
    if (score > 50) bgColor = 'bg-gradient-to-r from-yellow-500 to-yellow-300';
    if (score > 80) bgColor = 'bg-gradient-to-r from-red-600 to-red-400';
    
    return (
      <div className="mt-6">
        <h4 className="text-lg font-medium text-gray-800">Risk Score</h4>
        <div className="relative h-6 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full ${bgColor} rounded-full transition-all duration-700 ease-in-out`} 
            style={{ width: `${score}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
            {score}/100
          </div>
        </div>
      </div>
    );
  };
  
  const renderWalletDetails = () => {
    if (!detailedData) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-fade-in">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="h-5 w-5 text-unchained-navy mr-2" />
            <h3 className="text-lg font-medium">Transaction Activity</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Total Transactions</p>
              <p className="text-2xl font-semibold">{detailedData.transactionCount}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Flagged Transactions</p>
              <p className="text-2xl font-semibold text-red-500">{detailedData.flaggedTransactions}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">First Seen</p>
              <p className="text-lg font-semibold">{detailedData.firstSeen}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Risk Level</p>
              <p className={`text-lg font-semibold ${
                result === 'high-risk' ? 'text-red-600' : 
                result === 'suspicious' ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {result === 'high-risk' ? 'High' : 
                 result === 'suspicious' ? 'Medium' : 'Low'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-unchained-navy mr-2" />
            <h3 className="text-lg font-medium">Risk Indicators</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center">
              {detailedData.associatedWithPhishing ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Association with phishing</span>
            </li>
            <li className="flex items-center">
              {detailedData.connectedToSanctionedEntities ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Connection to sanctioned entities</span>
            </li>
            <li className="flex items-center">
              {detailedData.mixerUsage ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Crypto mixer usage detected</span>
            </li>
            <li className="flex items-center">
              {detailedData.fundsFromDarkMarkets ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Funds from dark markets</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const renderTransactionDetails = () => {
    if (!detailedData) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-fade-in">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Wallet className="h-5 w-5 text-unchained-navy mr-2" />
            <h3 className="text-lg font-medium">Transaction Info</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Involved Wallets</p>
              <p className="text-2xl font-semibold">{detailedData.involvedWallets}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Flagged Wallets</p>
              <p className="text-2xl font-semibold text-red-500">{detailedData.flaggedWallets}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Transaction Date</p>
              <p className="text-lg font-semibold">{detailedData.transactionDate}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Risk Level</p>
              <p className={`text-lg font-semibold ${
                result === 'high-risk' ? 'text-red-600' : 
                result === 'suspicious' ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {result === 'high-risk' ? 'High' : 
                 result === 'suspicious' ? 'Medium' : 'Low'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 text-unchained-navy mr-2" />
            <h3 className="text-lg font-medium">Risk Indicators</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center">
              {detailedData.largeValueTransfer ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Large value transfer</span>
            </li>
            <li className="flex items-center">
              {detailedData.obfuscationTechniques ? 
                <CircleX className="h-4 w-4 text-red-500 mr-2" /> : 
                <CircleCheck className="h-4 w-4 text-green-500 mr-2" />
              }
              <span>Obfuscation techniques detected</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-unchained-cream">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="mb-6 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search
          </Button>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
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
                  
                  {detailedData && renderRiskScoreGauge(detailedData.riskScore)}
                  
                  {searchType === 'wallet' ? renderWalletDetails() : renderTransactionDetails()}
                  
                  <div className="mt-8">
                    <Button 
                      onClick={() => navigate('/')} 
                      className="bg-unchained-navy text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      Analyze Another Address
                    </Button>
                  </div>
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
