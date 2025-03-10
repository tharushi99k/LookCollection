import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url, index) => (
          <div key={index} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
                <Button onClick={() => onRemove(url)} className="size-sm bg-red-1 text-white">
                    <Trash className="h-4 w-4"/>
                </Button>
            </div>
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="uploadimg" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button
              type="button"
              onClick={() => open()}
              className="bg-grey-1 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
