
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
          {/* Main flow container */}
          <div className="flex flex-col gap-10">
            {/* Row 1: Input Sources */}
            <div className="flex justify-center">
              <div className="node w-64">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Data Sources</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Law Enforcement, Financial Institutions, Regulators, Data Providers
                </p>
              </div>
            </div>
            
            {/* Row 2: Initial Processing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="node">
                <div className="node-icon bg-unchained-lightblue text-white p-2 rounded-full">
                  <Filter className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Initial Filtering</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Raw data is filtered for relevance
                </p>
              </div>
              
              <div className="node">
                <div className="node-icon bg-unchained-lightblue text-white p-2 rounded-full">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Dataset Creation</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Curated collection of potentially risky data
                </p>
              </div>
              
              <div className="node">
                <div className="node-icon bg-unchained-red text-white p-2 rounded-full">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Element Identification</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Suspicious TXs, Wallets, and Tokens
                </p>
              </div>
            </div>
            
            {/* Row 3: Central Processing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="node">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">UnChained DB</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Central repository for suspicious behavior
                </p>
              </div>
              
              <div className="node">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">AI Processing</h3>
                <p className="text-xs text-gray-500 mt-1">
                  DAO, AI Agents, and AI Judge analysis
                </p>
              </div>
              
              <div className="node">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Blockchain Scan</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Scanning blockchains for suspicious activity
                </p>
              </div>
            </div>
            
            {/* Row 4: Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="node border-red-200 bg-red-50">
                <div className="node-icon bg-unchained-red text-white p-2 rounded-full">
                  <CircleAlert className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold text-unchained-red">Suspicious</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Triggers Human Control Alert
                </p>
              </div>
              
              <div className="node border-unchained-navy bg-blue-50">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold text-unchained-navy">Human Verification</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Final review by security experts
                </p>
              </div>
              
              <div className="node border-green-200 bg-green-50">
                <div className="node-icon bg-green-600 text-white p-2 rounded-full">
                  <CircleCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold text-green-600">Unsuspicious</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Safe transaction or wallet
                </p>
              </div>
            </div>
            
            {/* Row 5: Final Action */}
            <div className="flex justify-center">
              <div className="node w-64 border-unchained-navy">
                <div className="node-icon bg-unchained-navy text-white p-2 rounded-full">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mt-2 font-semibold">Action Taken</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Risk response based on verification results
                </p>
              </div>
            </div>
          </div>
          
          {/* Adding connecting lines with CSS would make this complex, 
              so I'm leaving them out for simplicity in this implementation */}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
