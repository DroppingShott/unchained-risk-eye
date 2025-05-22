
import React from 'react';
import { Shield, Database, Filter, Activity, Bell } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-unchained-red" />,
    title: "Advanced Threat Detection",
    description: "Identify suspicious blockchain activity using our multi-layered AI analysis system."
  },
  {
    icon: <Database className="h-10 w-10 text-unchained-red" />,
    title: "UnChained Database",
    description: "Our proprietary database tracks and stores suspicious wallets, transactions, and tokens."
  },
  {
    icon: <Filter className="h-10 w-10 text-unchained-red" />,
    title: "Smart Filtering",
    description: "Initial filtering and pattern recognition to process high volumes of blockchain data."
  },
  {
    icon: <Activity className="h-10 w-10 text-unchained-red" />,
    title: "Real-time Monitoring",
    description: "Continuous scanning of blockchain activity to detect suspicious behavior as it happens."
  },
  {
    icon: <Bell className="h-10 w-10 text-unchained-red" />,
    title: "Alert System",
    description: "Escalation of high-risk activities for human verification and action when needed."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-unchained-navy mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our blockchain monitoring framework combines cutting-edge AI with human oversight
            to deliver comprehensive risk assessment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 h-16">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-unchained-navy mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
