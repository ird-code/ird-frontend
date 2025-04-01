import React from 'react'
import Image from 'next/image'
import Button from './Button'

const NewsInside = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-[#f7c2c1] text-[#850d09] px-3 py-1 rounded-full">Technology</span>
              <span className="mx-2">•</span>
              <span>March 15, 2024</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              The Future of Artificial Intelligence: A Comprehensive Look at Recent Developments
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Senior Technology Reporter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          
          <div className="relative h-[500px]">
            <Image
              src="/assets/images/Hero_BG.png"
              alt="AI Technology"
              fill
              className="object-cover"
            />
          </div>

       
          <div className="p-8">
          
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                In recent years, artificial intelligence has made unprecedented strides, transforming industries and reshaping our daily lives. From advanced language models to autonomous systems, the pace of innovation continues to accelerate.
              </p>
            </div>

           
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rise of Large Language Models</h2>
              <p>
                The development of large language models has been one of the most significant breakthroughs in AI technology. These models, trained on vast amounts of text data, have demonstrated remarkable capabilities in understanding and generating human-like text.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact on Various Industries</h2>
              <p>
                The influence of AI extends across multiple sectors, from healthcare to finance. In healthcare, AI-powered diagnostic systems are helping doctors make more accurate diagnoses. In finance, algorithmic trading and risk assessment systems are becoming increasingly sophisticated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ethical Considerations</h2>
              <p>
                As AI technology advances, ethical considerations become increasingly important. Issues such as bias in AI systems, privacy concerns, and the potential impact on employment need to be carefully addressed.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Prospects</h2>
              <p>
                Looking ahead, the future of AI appears both exciting and challenging. Researchers are working on developing more efficient and environmentally sustainable AI models, while also exploring new applications in areas such as climate change and space exploration.
              </p>
            </div>

         
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Deep Learning</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Neural Networks</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">AI Ethics</span>
              </div>
            </div>

        
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">About the Author</h3>
                  <p className="text-gray-600">
                    John Doe is a senior technology reporter with over 10 years of experience covering AI and emerging technologies. He has written extensively about the impact of AI on society and industry.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="mt-8 flex items-center gap-4">
              <Button/>
              <Button/>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default NewsInside