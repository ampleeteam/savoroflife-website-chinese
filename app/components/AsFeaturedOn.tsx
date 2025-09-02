import Image from "next/image";
import Link from "next/link";

const featuredOn = [
  {
    url: "https://eatdrinkkl.blogspot.com/2023/10/savor-restaurant-desa-sri-hartamas.html",
    excerpt:
      "Savor, purveyor of plant-based soul food, is set to soft-launch its physical restaurant this week, after more than four years of dishing out meal deliveries...",
    cover_img: "/landing/FeatureIn_1.jpg",
    width: 150,
    height: 150,
  },
  {
    url: "https://www.buro247.my/lifestyle/food-drink/new-cafes-restaurants-klang-valley-october-2023.html",
    excerpt:
      "After four years of delivering plant-based meals in the Klang Valley, Savor has now opened a brick and mortar store in Desa Sri Hartamas...",
    cover_img: "/landing/FeatureIn_2.jpg",
    width: 150,
    height: 150,
  },
  {
    url: "https://www.theyumlist.net/2023/10/savor-desa-sri-hartamas-plant-based-restaurant.html",
    excerpt:
      "Savor, a plant-based restaurant in Desa Sri Hartamas, has opened to resounding success. It fills a gap in the area for healthy, wholesome...",
    cover_img: "/landing/FeatureIn_3.png",
    width: 300,
    height: 70,
  },
  {
    url: "https://www.tatlerasia.com/dining/food/new-restaurants-cafes-and-bars-malaysia",
    excerpt:
      "For a plant-based foodie fix, Desa Sri Hartamas’ new Savor is the answer to your vegan callings...",
    cover_img: "/landing/FeatureIn_4.png",
    width: 200,
    height: 100,
  },
  {
    url: "https://www.lifestyleasia.com/kl/dining/food/the-best-new-restaurants-in-kl-and-selangor-to-visit-right-now-2023/",
    excerpt:
      "Plant-based meals tend to garner a reputation for being a bit of a hit-or-miss where flavour profiles are concerned,...",
    cover_img: "/landing/FeatureIn_5.png",
    width: 300,
    height: 50,
  },
  {
    url: "https://www.grazia.my/dining/review-savor-restaurant-2023/?fbclid=PAAaaannYm9rrH-evvx3L2vpPdhwm4BQn_ePvDCnftjdjzESs_8oULAkVBqSE_aem_AfXVcmTzHO2EMBYcXy2WUQ8QFgHOrWhitd0aoSYSxucwCJEGFDqDNwCuLYU6tamntqE",
    excerpt: "At Savor, You won’s even notice the lack of meat...",
    cover_img: "/landing/FeatureIn_6.png",
    width: 200,
    height: 80,
  },
  {
    url: "https://harpersbazaar.my/lifestyle/vegan-plant-based-restaurant-vegetarian-malaysia/",
    excerpt: "Discover The Best Plant-Based Restaurant in KL: Savor...",
    cover_img: "/landing/FeatureIn_7.png",
    width: 300,
    height: 50,
  },
  {
    url: "https://www.freemalaysiatoday.com/category/leisure/2023/12/07/savor-tasty-plant-based-dishes-at-this-vegan-eatery/",
    excerpt: "‘Savor’ tasty plant-based dishes at this vegan eatery...",
    cover_img: "/landing/FeatureIn_8.png",
    width: 100,
    height: 30,
  },
  {
    url: "https://www.instagram.com/reel/C26KCXzR6Br/?igsh=eWpibG15dGlpam1j",
    excerpt:
      "Savor of Life is the place you want to be heading to get some of the best vegan dim sum in KL!...",
    cover_img: "/landing/FeatureIn_9.png",
    width: 100,
    height: 30,
  },
];

function AsFeaturedOn() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col max-w-full w-[1197px]">
        <div className="self-center text-4xl font-bold text-center text-gray-800">
          As Featured On
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 mt-10">
          {featuredOn.map((item, index) => (
            <div key={index}>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Featured In ${index + 1}`}
              >
                <div className="h-[130px] flex items-center justify-center">
                  <Image
                    loading="lazy"
                    src={item.cover_img}
                    className="self-center"
                    width={item.width}
                    height={item.height}
                    alt={`Featured In ${index + 1}`}
                  />
                </div>
                <div className="p-2">
                  <p className="mt-9 text-lg font-semibold text-stone-400">
                    {item.excerpt}Read More
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsFeaturedOn;
