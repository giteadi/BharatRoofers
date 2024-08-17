import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { postId } = useParams();

  const imageArray = [
    {
      id: 1,
      link: "https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=",
      post: {
        id: 1,
        title: "Buying a house is an investment. It's important to make sure that the property you're interested, in is not only visually appealing but also structurally sound. This is where home inspections become crucial in the process of buying a home.",
        content: (
          <>
            <p>The Critical Role of Home Inspections: A Buyer's Guide to Informed Decisions</p>
            
            <ul>
              <li>Revealing Hidden Problems: Description of the first key point.
                <p>Home inspections are assessments carried out by certified inspectors to evaluate the condition of a property. They uncover issues that may not be easily noticeable during a walkthrough, such as structural problems, electrical issues, plumbing concerns, and more.</p>
              </li>
              <li>Making Informed Decisions:
              With the insights provided by an inspection report, buyers gain an understanding of the condition of the property. This knowledge empowers them to make decisions, about whether to proceed with the purchase negotiate repairs, or even reconsider their decision entirely..</li>
              <li>When buyers receive an inspection report that highlights issues it gives them an edge, in negotiation. They can use it as leverage to request repairs or negotiate a sale price. Sellers</li>
              <li>Bullet Point 4: Description of the fourth key point.</li>
            </ul>
            <p>Although inspections come with a price tag they often result in long-term savings. By identifying problems, costly repairs or unexpected maintenance expenses can be avoided in the future.The Importance of Home Inspections for Buyers:
Protecting Your Investment:
Getting a home inspection is a move to protect both your investment and emotional attachment, to the property. It helps you avoid purchasing a home with expensive issues.

Understanding the Property's Condition:
Inspections offer an overview of the property's strengths and weaknesses providing buyers with an understanding beyond just its surface appearance.

Ensuring Safety:
Making sure your future home is safe is important. Inspections help identify safety hazards such as mold, radon, or faulty electrical wiring that could pose risks to the occupants.

Planning, for Repairs or Upgrades:
Inspection reports assist buyers in planning for repairs or upgrades allowing them to allocate funds accordingly after completing the purchase.

Essentially, a home inspection is an important step in the home-buying process. It gives you peace of mind, protects your investment, and gives you the knowledge you need to make an informed decision about a property you are considering buying.</p>
<ul>
  <li>1. How long does a typical home inspection take?
The length of time varies depending on the size of the property, its age, and any specific areas that need to be scrutinized. An average examination can take 2-4 hours.

2. Do I have to attend the inspection?
Buyers are highly recommended to attend the survey. This allows them to ask questions, gain insight directly from the manager, and directly understand the condition of the property.

3. Can a home inspection reveal all possible issues?
Even if correct, investigations may not find any potential issues. However, they provide a comprehensive overview highlighting key areas of concern.

4. Do I need additional specialized care?
Depending on the property manager and findings, radon, pest, mold, architectural inspections or special inspections may be recommended.</li>
</ul>
          </>
        ),
      },
    },
    {
      id: 2,
      link: "https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw=",
      post: {
        id: 2,
        title: "Title for Post 2",
        content: (
          <>
            <p>Paragraph 1. Introductory text explaining the subject matter of the post.</p>
            <p>Paragraph 2. Further elaboration on the topic with more in-depth details.</p>
            <ul>
              <li>Bullet Point 1: Insight into the first significant point.</li>
              <li>Bullet Point 2: Insight into the second significant point.</li>
              <li>Bullet Point 3: Insight into the third significant point.</li>
              <li>Bullet Point 4: Insight into the fourth significant point.</li>
            </ul>
            <p>Paragraph 3. Summary or additional context related to the content.</p>
          </>
        ),
      },
    },
    {
      id: 3,
      link: "https://example.com/image3.jpg",
      post: {
        id: 3,
        title: "Title for Post 3",
        content: (
          <>
            <p>Paragraph 1. Overview of the main ideas or themes of the post.</p>
            <p>Paragraph 2. Detailed discussion of the primary topics covered in the post.</p>
            <ul>
              <li>Bullet Point 1: Explanation of the first key aspect.</li>
              <li>Bullet Point 2: Explanation of the second key aspect.</li>
              <li>Bullet Point 3: Explanation of the third key aspect.</li>
              <li>Bullet Point 4: Explanation of the fourth key aspect.</li>
            </ul>
            <p>Paragraph 3. Final thoughts or additional information on the subject.</p>
          </>
        ),
      },
    },
    {
      id: 4,
      link: "https://example.com/image4.jpg",
      post: {
        id: 4,
        title: "Title for Post 4",
        content: (
          <>
            <p>Paragraph 1. Introduction to the topic, setting the stage for the discussion.</p>
            <p>Paragraph 2. Detailed analysis or information about the topic.</p>
            <ul>
              <li>Bullet Point 1: Key detail or insight about the topic.</li>
              <li>Bullet Point 2: Additional key detail or insight.</li>
              <li>Bullet Point 3: Another important detail or insight.</li>
              <li>Bullet Point 4: Further detail or insight.</li>
            </ul>
            <p>Paragraph 3. Conclusion or final remarks about the topic.</p>
          </>
        ),
      },
    },
    {
      id: 5,
      link: "https://example.com/image5.jpg",
      post: {
        id: 5,
        title: "Title for Post 5",
        content: (
          <>
            <p>Paragraph 1. Brief introduction to the subject of the post.</p>
            <p>Paragraph 2. In-depth discussion and exploration of the main points.</p>
            <ul>
              <li>Bullet Point 1: Description of the first major point.</li>
              <li>Bullet Point 2: Description of the second major point.</li>
              <li>Bullet Point 3: Description of the third major point.</li>
              <li>Bullet Point 4: Description of the fourth major point.</li>
            </ul>
            <p>Paragraph 3. Summary of the post and any additional remarks.</p>
          </>
        ),
      },
    },,
    {
      id: 6,
      link: "https://example.com/image6.jpg",
      post: {
        id: 6,
        title: "Title for Post 6",
        content: (
          <>
            <p>Paragraph 1. Brief introduction to the subject of the post.</p>
            <p>Paragraph 2. In-depth discussion and exploration of the main points.</p>
            <ul>
              <li>Bullet Point 1: Description of the first major point.</li>
              <li>Bullet Point 2: Description of the second major point.</li>
              <li>Bullet Point 3: Description of the third major point.</li>
              <li>Bullet Point 4: Description of the fourth major point.</li>
            </ul>
            <p>Paragraph 3. Summary of the post and any additional remarks.</p>
          </>
        ),
      },
    },
    {
      id: 7,
      link: "https://example.com/image7.jpg",
      post: {
        id: 7,
        title: "Title for Post 7",
        content: (
          <>
            <p>Paragraph 1. Brief introduction to the subject of the post.</p>
            <p>Paragraph 2. In-depth discussion and exploration of the main points.</p>
            <ul>
              <li>Bullet Point 1: Description of the first major point.</li>
              <li>Bullet Point 2: Description of the second major point.</li>
              <li>Bullet Point 3: Description of the third major point.</li>
              <li>Bullet Point 4: Description of the fourth major point.</li>
            </ul>
            <p>Paragraph 3. Summary of the post and any additional remarks.</p>
          </>
        ),
      },
    },
    {
      id: 8,
      link: "https://example.com/image8.jpg",
      post: {
        id: 8,
        title: "Title for Post 8",
        content: (
          <>
            <p>Paragraph 1. Brief introduction to the subject of the post.</p>
            <p>Paragraph 2. In-depth discussion and exploration of the main points.</p>
            <ul>
              <li>Bullet Point 1: Description of the first major point.</li>
              <li>Bullet Point 2: Description of the second major point.</li>
              <li>Bullet Point 3: Description of the third major point.</li>
              <li>Bullet Point 4: Description of the fourth major point.</li>
            </ul>
            <p>Paragraph 3. Summary of the post and any additional remarks.</p>
          </>
        ),
      },
    },
    
 
    
  ];

  const post = imageArray.find(item => item.post.id === Number(postId));

  if (!post) {
    return <div className="text-center text-red-500 text-lg font-semibold">Post not found</div>;
  }

  return (
    <div>
      <div className="p-6 max-w-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden sm:mt-20 md:mt-20 mt-5">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{post.post.title}</h2>
          {/* Render subtitle if available */}
          <div className="text-sm text-gray-500 mb-6">{post.post.subtitle || ''}</div>
        </header>
        <div className={`flex flex-col items-center mb-10 ${post.post.imagePosition === 'center' ? 'items-center' : 'items-start'}`}>
          <img 
            src={post.link} 
            alt={post.post.title} 
            className="object-fit rounded-lg w-full max-w-4xl h-96 mb-8"
          />
          
        </div>
        <div className="text-gray-800 text-lg leading-relaxed max-w-4xl px-4">
            {/* Render content as JSX */}
            {typeof post.post.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: post.post.content }} />
            ) : (
              post.post.content
            )}
          </div>
      </div>
    </div>
  );
};

export default SinglePage;