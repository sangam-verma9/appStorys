// const blogPosts = {
//     '5-Ways-to-Increase-App-Retention': {
//         title: '5 Ways to Increase App Retention',
//         content: 'This is the content of Blog Post 1.'
//     },
//     '5-Ways-Stories-Can-Help-You-Increase-App-Engagement': {
//         title: '5 Ways Stories Can Help You Increase App Engagement',
//         content: 'This is the content of Blog Post 2.'
//     },
//     '5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies': {
//         title: '5 Causes and Symptoms of Customer Churn in SaaS Companies',
//         content: 'This is the content of Blog Post 3.'
//     }
// };

// export async function generateStaticParams() {
//     return [
//         { slug: '5-Ways-to-Increase-App-Retention' },
//         { slug: '5-Ways-Stories-Can-Help-You-Increase-App-Engagement' },
//         { slug: '5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies' }
//     ];
// }

// export default async function BlogPost({ params }) {
//     const resolvedParams = await params;
//     const slug = resolvedParams.slug;

//     const post = blogPosts[slug];

//     if (!post) {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-screen">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Blog Not Found</h1>
//                 <p className="text-gray-600">The requested blog post could not be found.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <article>
//                 <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
//                 <div className="prose prose-lg">
//                     <p className="text-gray-700 leading-relaxed">{post.content}</p>
//                 </div>
//             </article>
//         </div>
//     );
// }

// File: src/app/blogs/[slug]/page.js

const blogPosts = {
    '5-Ways-to-Increase-App-Retention': {
        title: '5 Ways to Increase App Retention',
        content: 'In today\'s competitive mobile app landscape, retaining users is as crucial as acquiring them. This comprehensive guide will walk you through 5 proven strategies to keep your users engaged and coming back to your app.',
        date: '20 October 2023',
        readTime: 5
    },
    '5-Ways-Stories-Can-Help-You-Increase-App-Engagement': {
        title: '5 Ways Stories Can Help You Increase App Engagement',
        content: 'In today\'s fast-paced digital world, grabbing and holding users\' attention is more challenging than ever. Stories provide a powerful way to create emotional connections with your audience.',
        date: '20 October 2023',
        readTime: 5
    },
    '5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies': {
        title: '5 Causes and Symptoms of Customer Churn in SaaS Companies',
        content: 'Customer churn is a critical issue for SaaS (Software as a Service) companies, impacting revenue and growth. Understanding the root causes can help you prevent it.',
        date: '20 October 2023',
        readTime: 5
    }
};

export async function generateStaticParams() {
    return [
        { slug: '5-Ways-to-Increase-App-Retention' },
        { slug: '5-Ways-Stories-Can-Help-You-Increase-App-Engagement' },
        { slug: '5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies' }
    ];
}

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    console.log('Requested slug:', slug); // Debug log
    console.log('Available posts:', Object.keys(blogPosts)); // Debug log

    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Blog Post Not Found</h2>
                    <p className="text-gray-500 mb-8">The blog post "{slug}" could not be found.</p>
                    <a
                        href="/blogs"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Blogs
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-8 py-12">
                        <header className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center text-gray-600 text-sm">
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime} min read</span>
                            </div>
                        </header>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {post.content}
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <a
                                href="/blogs"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                            >
                                ← Back to all blogs
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}