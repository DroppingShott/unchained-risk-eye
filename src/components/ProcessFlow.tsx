
import React from 'react';
import { 
  User, Database, Filter, Shield, Activity, 
  CircleCheck, CircleX, CircleAlert 
} from 'lucide-react';

const ProcessFlow = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-unchained-navy mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our blockchain monitoring system uses a sophisticated process flow to detect and 
            assess suspicious activity across blockchain networks.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Main flow container with connecting lines */}
          <div className="flow-diagram">
            {/* Row 1: Input Sources */}
            <div className="flex justify-center mb-12 relative animate-fade-in">
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Data Sources</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Law Enforcement, Financial Institutions, Regulators, Data Providers
                </p>
              </div>
              
              {/* Connecting arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-300 mx-auto"></div>
              </div>
            </div>
            
            {/* Row 2: Initial Processing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute bottom-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 left-1/6 w-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 right-1/6 w-0.5 bg-gray-300"></div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-lightblue text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Filter className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Initial Filtering</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Raw data is filtered for relevance
                </p>
              </div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-lightblue text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Dataset Creation</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Curated collection of potentially risky data
                </p>
              </div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-red text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Element Identification</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Suspicious TXs, Wallets, and Tokens
                </p>
              </div>
              
              {/* Connecting arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-300 mx-auto"></div>
              </div>
            </div>
            
            {/* Row 3: Central Processing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute bottom-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 left-1/6 w-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 right-1/6 w-0.5 bg-gray-300"></div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">UnChained DB</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Central repository for suspicious behavior
                </p>
              </div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">AI Processing</h3>
                <p className="text-sm text-gray-500 mt-1">
                  DAO, AI Agents, and AI Judge analysis
                </p>
              </div>
              
              <div className="flow-node shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Blockchain Scan</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Scanning blockchains for suspicious activity
                </p>
              </div>
              
              {/* Connecting arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-300 mx-auto"></div>
              </div>
            </div>
            
            {/* Row 4: Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute bottom-0 left-1/6 right-1/6 h-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 left-1/6 w-0.5 bg-gray-300"></div>
              <div className="hidden md:block absolute top-0 bottom-0 right-1/6 w-0.5 bg-gray-300"></div>
              
              <div className="flow-node border-red-200 bg-red-50 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-red text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <CircleAlert className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-red">Suspicious</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Triggers Human Control Alert
                </p>
              </div>
              
              <div className="flow-node border-unchained-navy bg-blue-50 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Human Verification</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Final review by security experts
                </p>
              </div>
              
              <div className="flow-node border-green-200 bg-green-50 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <CircleCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-green-600">Unsuspicious</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Safe transaction or wallet
                </p>
              </div>
              
              {/* Connecting arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-300 mx-auto"></div>
              </div>
            </div>
            
            {/* Row 5: Final Action */}
            <div className="flex justify-center">
              <div className="flow-node border-unchained-navy shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in" style={{animationDelay: '1s'}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-unchained-navy text-white p-3 rounded-full shadow-lg border-4 border-white z-10">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-unchained-navy">Action Taken</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Risk response based on verification results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for the flow nodes using standard CSS-in-JS approach */}
      <style>
        {`
        .flow-node {
          position: relative;
          padding-top: 2rem;
          padding-bottom: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 0.5rem;
          border-width: 1px;
          background-color: white;
          text-align: center;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .flow-diagram .absolute.top-0.bottom-0.left-1\\/6 {
          left: 16.666%;
        }
        .flow-diagram .absolute.top-0.bottom-0.right-1\\/6 {
          right: 16.666%;
        }
        `}
      </style>
    </section>
  );
};

export default ProcessFlow;
