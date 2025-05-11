import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: 'benefits-of-private-limited-company',
    title: 'Top 10 Benefits of Registering a Private Limited Company',
    excerpt: 'Discover the key advantages of registering your business as a Private Limited Company in India and how it can help your business grow.',
    date: 'May 10, 2025',
    author: 'Rahul Sharma',
    category: 'Business Registration',
    image: 'https://via.placeholder.com/600x400',
    readTime: '5 min read'
  },
  {
    id: 2,
    slug: 'llp-vs-private-limited',
    title: 'LLP vs Private Limited Company: Which is Better for Your Business?',
    excerpt: 'A comprehensive comparison between Limited Liability Partnership and Private Limited Company structures to help you make the right choice.',
    date: 'May 5, 2025',
    author: 'Priya Patel',
    category: 'Business Structure',
    image: 'https://via.placeholder.com/600x400',
    readTime: '7 min read'
  },
  {
    id: 3,
    slug: 'gst-registration-guide',
    title: 'Complete Guide to GST Registration for New Businesses',
    excerpt: 'Everything you need to know about GST registration process, requirements, and compliance for your new business venture.',
    date: 'April 28, 2025',
    author: 'Vikram Singh',
    category: 'Taxation',
    image: 'https://via.placeholder.com/600x400',
    readTime: '6 min read'
  },
  {
    id: 4,
    slug: 'startup-funding-options',
    title: '5 Funding Options for Indian Startups in 2025',
    excerpt: 'Explore the best funding options available for Indian startups and how to approach investors for your business idea.',
    date: 'April 20, 2025',
    author: 'Neha Gupta',
    category: 'Startup Funding',
    image: 'https://via.placeholder.com/600x400',
    readTime: '8 min read'
  },
  {
    id: 5,
    slug: 'msme-registration-benefits',
    title: 'MSME Registration: Benefits and Process Explained',
    excerpt: 'Learn about the advantages of MSME registration and the step-by-step process to register your business as an MSME in India.',
    date: 'April 15, 2025',
    author: 'Arun Kumar',
    category: 'Business Registration',
    image: 'https://via.placeholder.com/600x400',
    readTime: '5 min read'
  },
  {
    id: 6,
    slug: 'business-compliance-checklist',
    title: 'Annual Compliance Checklist for Indian Businesses',
    excerpt: 'A comprehensive checklist of annual compliances that every Indian business must follow to avoid penalties and legal issues.',
    date: 'April 8, 2025',
    author: 'Sanjay Mehta',
    category: 'Compliance',
    image: 'https://via.placeholder.com/600x400',
    readTime: '6 min read'
  }
];

const BlogListingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Business Registration Blog | Expert Insights & Guides | PCIS-Service</title>
        <meta name="description" content="Read expert insights, guides, and tips on business registration, compliance, taxation, and more for entrepreneurs and business owners in India." />
        <meta name="keywords" content="business blog, company registration, business tips, startup guides, compliance, taxation" />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="Business Registration Blog | Expert Insights & Guides | PCIS-Service" />
        <meta property="og:description" content="Read expert insights, guides, and tips on business registration, compliance, taxation, and more for entrepreneurs and business owners in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blog" />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="bg-primary-50 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6">Business Registration Blog</h1>
              <p className="text-lg text-neutral-600 mb-8">Expert insights, guides, and tips to help you navigate the world of business registration and compliance</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">All Posts</button>
                <button className="bg-white hover:bg-gray-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Business Registration</button>
                <button className="bg-white hover:bg-gray-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Taxation</button>
                <button className="bg-white hover:bg-gray-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Compliance</button>
                <button className="bg-white hover:bg-gray-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Startup Guides</button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Post */}
        <motion.section 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img className="h-full w-full object-cover" src="https://via.placeholder.com/800x600" alt="Featured blog post" />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold mb-1">{blogPosts[0].category}</div>
                  <Link to={`/blog/${blogPosts[0].slug}`} className="block mt-1 text-2xl leading-tight font-bold text-neutral-900 hover:text-primary-600 transition-colors">
                    {blogPosts[0].title}
                  </Link>
                  <p className="mt-2 text-neutral-500">{blogPosts[0].date} • {blogPosts[0].readTime}</p>
                  <p className="mt-4 text-neutral-600">{blogPosts[0].excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/100x100" alt={blogPosts[0].author} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-neutral-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-neutral-500">Content Writer</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to={`/blog/${blogPosts[0].slug}`} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      Read Full Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                  <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold mb-1">{post.category}</div>
                    <Link to={`/blog/${post.slug}`} className="block mt-1 text-xl leading-tight font-bold text-neutral-900 hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                    <p className="mt-2 text-neutral-500">{post.date} • {post.readTime}</p>
                    <p className="mt-3 text-neutral-600 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-5 flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/100x100" alt={post.author} />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-neutral-900">{post.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="bg-primary-50 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-neutral-600 mb-8">Get the latest business registration tips, compliance updates, and industry insights delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-neutral-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default BlogListingPage;
