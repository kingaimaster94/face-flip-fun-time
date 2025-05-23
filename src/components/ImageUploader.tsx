import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploaderProps {
  title: string;
  description: string;
  onImageSelect: (file: File) => void;
  imagePreview: string | null;
}

const ImageUploader = ({ title, description, onImageSelect, imagePreview }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files?.[0]) {
      onImageSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    onImageSelect(null as any);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {!imagePreview ? (
        <div
          className={`image-upload-area min-h-[200px] flex flex-col items-center justify-center p-6 ${
            isDragging ? 'border-primary bg-secondary/50' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
            <UploadCloud size={28} className="text-primary" />
          </div>
          <p className="text-center mb-2">
            <span className="font-medium">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground text-center">PNG or JPG (max. 5MB)</p>

          <Button variant="outline" type="button" className="mt-4" onClick={handleButtonClick}>
            <ImageIcon className="mr-2 h-4 w-4" />
            Select Image
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative image-container rounded-lg max-w-xs mx-auto">
          <img src={imagePreview} alt={title} className="rounded-lg" />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80 transition-colors"
            aria-label="Remove image"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
