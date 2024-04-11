import logo from './icon/catIcon.png'
import './App.css'
import Card from './components/Card'

import CatPic from './project/Cats_Life/Cats_Life_00.jpg'
import LearnPic from './project/LearnWhat/LearnWhat_00.png'
import StockPic from './project/NCCU_Stock/NCCU_stock_00.png'
import WavePic from './project/Ocean_Wave/Ocean_Wave_00.png'
import RWPic from './project/VR_RW/VR_RW_00.png'
import UniPic from './project/Uni_Rankings/Uni_Rankings_00.png'
import LifePic from './project/Kill_Life/Kill_Life_00.png'
//import Banner from "./components/Banner";
//import Navbar from "./components/Navbar";

function App() {
  const StockTags = ["Node.js","React.js"];
  return (
    <div className="App">
      <header class="text-slate-50 bg-lakeblue body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-slate-50 mb-4 md:mb-0">
            <img src={logo} class="w-6 h-6" />
            <span class="ml-3 text-xl text-white">Faust's Portfolio</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center"></nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            V
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Hi! I'm Faust!
              </h1>
              <p class=" sm:text-lg text-base leading-relaxed text-gray-400	">
                歡迎來到我的作品集網站！
                <br />
                \(*°▽°*)/
              </p>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500	text-left">
              喜歡遊戲、動畫的菜鳥工程師一枚。
              <br />
              雖然本科是工程師，但也喜歡接觸與遊戲、網頁、人機互動領域相關的技術，
              <br />
              所以在UI/UX、動畫、平面設計領域也都有所涉獵。
              <br />
              <br />
              希望將來能活用自己的所學所知，為自己所愛的多媒體領域貢獻一己之力。
            </p>
          </div>
          <div class="flex flex-wrap -m-4 bg-gray-50">
            <Card
              title="殺死社畜"
              subtitle="Unity / AR"
              tags=""
              describe="用 Unity 開發的 AR 遊戲互動敘事遊戲。以取⾃「Life」⾳譯的「萊夫」角色為主軸，希望透或與萊夫和華山環境的互動，喚醒⼈們內在原始的對於「⽣」的⽕花與渴望。"
              pic={LifePic}
            />
            <Card
              title="NCCU Stock Market"
              subtitle="Web / DBMS"
              tags={StockTags}
              describe="模擬政大股市交易系統，使用者可以登入、儲值、 買賣股票及查看各股票近期漲跌。"
              pic={StockPic}
            />
            <Card
              title="World University Rankings"
              subtitle="Web / Information Visualization"
              tags="b"
              describe="世界大學排名的視覺化圖表，可客製化指定地區、調整各項指標的權重及排序。"
              pic={UniPic}
            />
            <Card
              title="鵝啥 - 技能交換平台"
              subtitle="UI/UX Design"
              tags="b"
              describe="從產品定位開始分析目標客群及使用場合，根據目標客群的性格與年齡層做吉祥物設計， 以及可能的使用場合做資訊階層與介面設計。"
              pic={LearnPic}
            />
            <Card
              title="VR重定向行走研究"
              subtitle="Unity / VR"
              tags="b"
              describe="透過規劃智慧型生物移動位置，協助目前現有的無限行走技術（重定向行走）融入VR遊戲中，以提升玩家遊玩時的融入性。"
              pic={RWPic}
            />
            <Card
              title="Cat's Life"
              subtitle="Motion Graphic"
              tags="b"
              describe="以貓咪的日常生活為發想主題的動態圖像短篇動畫。"
              pic={CatPic}
            />
            <Card
              title="海浪渲染"
              subtitle="Computer Gragh"
              tags="b"
              describe="使用 Blender 製作海水表面模型， 再根據 Tessendorf 的 Simulating ocean water 的演算法進行渲染。"
              pic={WavePic}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
