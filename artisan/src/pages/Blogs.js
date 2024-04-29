import React, { useState, useEffect } from 'react';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const sampleBlogs = [
      {
        id: 1,
        title: 'The Importance of Quality in Products',
        author: 'John Doe',
        content:
          "In this blog post, I delve into the significance of quality in products and how it impacts customer satisfaction and loyalty. Discover why we prioritize excellence in everything we offer."
      },
      {
        id: 2,
        title: 'Enhancing the Online Shopping Experience',
        author: 'Jane Smith',
        content:
          "Explore our vision for redefining the online shopping experience. Learn about the innovative features and personalized touchpoints we're implementing to make every interaction delightful."
      },
      {
        id: 3,
        title: '10 Tips for Productivity While Working Remotely',
        author: 'Alex Johnson',
        content:
          "Remote work has become more common than ever. In this blog, I share my top 10 tips for staying productive and maintaining a healthy work-life balance while working from home."
      },
      {
        id: 4,
        title: 'The Future of Artificial Intelligence in Healthcare',
        author: 'Emily Chen',
        content:
          "Discover how artificial intelligence is revolutionizing the healthcare industry. From diagnosis to treatment, AI is poised to make significant advancements in improving patient outcomes and reducing costs."
      }
    ];

    setBlogs(sampleBlogs);
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-[#97644E] mb-6">Our Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id} className="mb-8 border-b border-gray-300 pb-8">
          <h3 className="text-2xl font-semibold text-[#97644E] mb-4">{blog.title}</h3>
          <p className="text-[#666666] leading-relaxed">By {blog.author}</p>
          <p className="text-[#666666] leading-relaxed">{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
