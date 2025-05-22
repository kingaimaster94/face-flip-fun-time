
import React from 'react';

interface ExampleItem {
  id: number;
  source: string;
  target: string;
  result: string;
}

const examples: ExampleItem[] = [
  {
    id: 1,
    source: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    target: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=300&h=300&fit=crop",
    result: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    source: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    target: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    result: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    source: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    target: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=300&h=300&fit=crop",
    result: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=300&h=300&fit=crop",
  },
];

const ExampleGallery = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Example Face Swaps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {examples.map((example) => (
          <div key={example.id} className="bg-card rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={example.source} 
                    alt="Source face"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={example.target} 
                    alt="Target image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="image-container rounded-lg overflow-hidden">
                <img 
                  src={example.result} 
                  alt="Result"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleGallery;
