import Card from "../component/Card";
import { ListIcon, WriteIcon } from "../component/Icons";

const contentFeatures = [
  {
    id: "rewrite",
    link: "/content/rewrite",
    title: "Rewrite Content",
    description: "Rewrite your content with AI",
    icon: <WriteIcon style="w-6 h-6 text-blue-600" />,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "expand",
    link: "/content/expand",
    title: "Expand Content",
    description: "Enrich your content with detailed insights and depth",
    icon: <WriteIcon style="w-6 h-6 text-indigo-600" />,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: "shorten",
    link: "/content/shorten",
    title: "Shorten Content",
    description: "Make your content more concise with AI",
    icon: <WriteIcon style="w-6 h-6 text-orange-600" />,
    gradient: "from-orange-600 to-stone-400",
  },
  {
    id: "seo-content",
    link: "/content/seo-content",
    title: "SEO Content",
    description:
      "Generate optimized SEO titles, keywords, and meta descriptions automatically",
    icon: <ListIcon style="w-6 h-6 text-cyan-600" />,
    gradient: "from-cyan-500 to-pink-500",
  },
  {
    id: "generate-article",
    link: "/content/generate-article",
    title: "Generate Article",
    description: "Create a new article with AI",
    icon: <WriteIcon style="w-6 h-6 text-green-600" />,
    gradient: "from-green-600 to-cyan-600",
  },
  {
    id: "history",
    link: "/content/history",
    title: "Content History",
    description: "Access and manage your entire content library",
    icon: <ListIcon style="w-6 h-6 text-purple-600" />,
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Content Creation Studio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your ideas into compelling content with AI-powered tools. 
            Rewrite, expand, optimize, and create articles that engage and inspire.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {contentFeatures.map((feature) => (
            <Card key={feature.id} feature={feature} />
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 p-8 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About CanvasAI Content Tools
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-base">
            CanvasAI's content creation suite empowers you with intelligent, AI-driven tools 
            designed to elevate your writing. Whether you're crafting blog posts, optimizing 
            for SEO, expanding ideas, or refining existing content, our advanced algorithms 
            understand context, tone, and intent. Transform rough drafts into polished pieces, 
            generate complete articles from topics, and optimize every word for maximum impact. 
            Your creative vision, enhanced by artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
