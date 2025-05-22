
import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultPreviewProps {
  resultImage: string | null;
  isProcessing: boolean;
}

const ResultPreview = ({ resultImage, isProcessing }: ResultPreviewProps) => {
  if (isProcessing) {
    return (
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xl font-medium mb-4">Processing...</h3>
        <div className="relative w-full max-w-md aspect-square">
          <Skeleton className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Our AI is hard at work swapping the faces. This might take a few moments...
        </p>
      </div>
    );
  }

  if (!resultImage) {
    return (
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xl font-medium mb-4">Your Result</h3>
        <div className="bg-muted rounded-lg w-full max-w-md aspect-square flex flex-col items-center justify-center p-6">
          <p className="text-center text-muted-foreground">
            Upload a source face and target image to see the result here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-xl font-medium mb-4">Your Result</h3>
      <div className="relative image-container max-w-md mx-auto rounded-lg overflow-hidden">
        <img
          src={resultImage}
          alt="Face swap result"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-4 mt-6">
        <Button variant="default">
          <Download size={18} className="mr-2" />
          Download
        </Button>
        <Button variant="outline">
          <Share2 size={18} className="mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default ResultPreview;
