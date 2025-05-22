
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <Sparkles size={24} className="text-primary animate-pulse" />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">FaceSwap AI</h1>
      </div>
      <div>
        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Free Version</span>
      </div>
    </header>
  );
};

export default Header;
