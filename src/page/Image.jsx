import Card from "../component/Card";
import { ImageIcon, ListIcon } from "../component/Icons";

const imageFeature = [
  {
    id: "generate",
    link: "/image/generate",
    title: "Generate Image",
    description: "Transform text into stunning, high-quality visuals with AI",
    icon: <ImageIcon style="w-6 h-6 text-blue-600" />,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "history",
    link: "/image/history",
    title: "Image History",
    description: "Browse and manage your complete visual library",
    icon: <ListIcon style="w-6 h-6 text-indigo-600" />,
    gradient: "from-indigo-600 to-purple-600",
  },
];

export default function Image() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Visual Creation Studio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bring your imagination to life with AI-powered image generation. 
            Create stunning visuals in any resolution, from thumbnails to high-resolution masterpieces.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {imageFeature.map((feature) => (
            <Card key={feature.id} feature={feature} />
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 p-8 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About CanvasAI Image Tools
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-base">
            CanvasAI's image generation platform harnesses the power of cutting-edge AI models 
            to transform your text descriptions into breathtaking visuals. Choose from multiple 
            resolutions—from compact squares perfect for social media to expansive landscapes 
            ideal for presentations. Every generated image is stored in your personal library, 
            making it easy to revisit, download, and reuse your creations. Whether you need 
            illustrations, concept art, or custom graphics, CanvasAI turns your words into 
            professional-quality images in seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
