import Image from "next/image";
import SavorIntroductionViewMenu from "./SavorIntroductionViewMenu";
function SavorIntroduction() {
  return (
    <div className="contents justify-center items-center max-md:max-h-screen bg-white max-md:px-5">
      <div className="flex-col max-w-full h-inherit">
        <div className="flex justify-center items-center gap-5 max-md:flex-col max-md:gap-0 h-inherit">
          <div className="flex flex-col pt-[12vh] w-[39%] max-md:ml-0 max-md:w-full h-inherit pb-[12vh] max-md:pl-[10vw] max-md:pr-[10vw]">
            <div className="flex flex-col self-stretch my-auto text-xl font-bold text-gray-800 max-md:mt-10 h-inherit">
              <div className="text-4xl">Savor 餐厅</div>
              <div className="mt-[3vh] max-md:mt-10 font-normal max-md:text-lg text-sm leading-normal">
                <p className="mb-5">
                  在
                  Savor，我们用心呈现纯素料理的独特魅力，不断突破味觉与创意的界限，让您体验前所未有的美食享受。
                </p>
                <p className="mb-5">
                  我们的厨师团队将国际特色与本地风味巧妙融合，用心烹调每一道菜，带您踏上一场难忘的味觉之旅，满足您所有的感官期待！
                </p>
                <p className="mb-5">
                  无论是享受浪漫晚餐、与亲友聚会，还是通过我们的线上外送服务在家细细品味纯素佳肴，Savor
                  都是您度过美好时光的理想之选
                </p>
                <p className="mb-5">
                  Savor
                  不只是用餐，而是一段值得回味的体验——无论是特别的夜晚，还是专属的活动，我们的纯素食料理都会在您的味蕾和记忆中留下深刻印象。
                </p>
                <p className="mb-5">
                  我们相信纯素饮食有改变生活的力量，并始终坚持以可持续与健康为原则，引领我们走好美食旅程的每一步。
                </p>
                <SavorIntroductionViewMenu />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full h-inherit max-md:h-[100vh] max-md:pl-[0px] max-md:pr-[0px]">
            <Image
              width={350}
              height={150}
              alt="Description of the image"
              loading="lazy"
              src="/landing/Intro_1.png"
              className="w-full aspect-[0.67] max-md:mt-10 max-md:max-w-full max-md:object-cover h-inherit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavorIntroduction;
