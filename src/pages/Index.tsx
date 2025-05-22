
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import ResultPreview from '@/components/ResultPreview';
import ExampleGallery from '@/components/ExampleGallery';

const Index = () => {
  const [sourceFace, setSourceFace] = useState<File | null>(null);
  const [targetImage, setTargetImage] = useState<File | null>(null);
  const [sourceFacePreview, setSourceFacePreview] = useState<string | null>(null);
  const [targetImagePreview, setTargetImagePreview] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSourceFaceSelect = (file: File | null) => {
    if (!file) {
      setSourceFace(null);
      setSourceFacePreview(null);
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setSourceFace(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSourceFacePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleTargetImageSelect = (file: File | null) => {
    if (!file) {
      setTargetImage(null);
      setTargetImagePreview(null);
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setTargetImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setTargetImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSwapFaces = () => {
    if (!sourceFace || !targetImage) {
      toast.error("Please upload both a source face and a target image");
      return;
    }

    setIsProcessing(true);
    setResultImage(null);

    // In a real application, we would send the images to a server for processing
    // For this demo, we'll simulate a delay and use the target image as the result
    setTimeout(() => {
      setResultImage(targetImagePreview);
      setIsProcessing(false);
      toast.success("Face swap completed successfully!");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-6xl mx-auto py-8 px-4">
        <section className="mb-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">
              AI Face Swap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instantly swap faces in your photos using our advanced AI technology.
              Upload two images and see the magic happen in seconds!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ImageUploader
              title="Source Face"
              description="Upload a clear, front-facing portrait"
              onImageSelect={handleSourceFaceSelect}
              imagePreview={sourceFacePreview}
            />
            
            <ImageUploader
              title="Target Image"
              description="Upload the image where you want to swap the face"
              onImageSelect={handleTargetImageSelect}
              imagePreview={targetImagePreview}
            />

            <div className="flex flex-col">
              <h3 className="text-lg font-medium mb-2">Swap Face</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Click the button below to start the face swap process
              </p>
              
              <div className="flex-1 flex items-center justify-center">
                <Button 
                  onClick={handleSwapFaces}
                  disabled={!sourceFace || !targetImage || isProcessing}
                  className="gradient-bg border-0 text-white"
                  size="lg"
                >
                  <Wand2 className="mr-2 h-5 w-5" />
                  {isProcessing ? "Processing..." : "Swap Faces"}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <ResultPreview 
              resultImage={resultImage}
              isProcessing={isProcessing}
            />
          </div>
        </section>

        <div className="border-t py-12">
          <ExampleGallery />
        </div>
      </main>
      
      <footer className="bg-muted py-6">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 FaceSwap AI. All rights reserved. This is a demo project and no actual face swapping is performed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
