import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">HC</span>
      </div>
      <span className="font-semibold text-lg text-foreground">HubSpot CRM</span>
    </div>
  );
};
