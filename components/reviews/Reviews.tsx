"use client";
import Script from "next/script";

const Reviews = () => {
  return (
    <div className="md:py-[5%] py-[12%] px-5 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">顾客评价</h1>
      {/* Widget container */}
      <div
        className="embedsocial-hashtag"
        data-ref={process.env.NEXT_PUBLIC_EMBED_SOCIAL_DATA_REF}
      />
      {/* EmbedSocial initialization script */}
      <Script
        src="https://embedsocial.com/cdn/ht.js"
        strategy="lazyOnload"
        onError={(e) => console.error("Failed to load EmbedSocial script", e)}
      />
    </div>
  );
};

export default Reviews;
