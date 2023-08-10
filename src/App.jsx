import './App.css'
import html2pdf from 'html2pdf.js';

function App() {

  const downloadPdf = () => {
    var element = document.getElementById('element-to-print');
    var opt = {
      margin: 5,
      filename: 'file.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, allowTaint: true },
      pagebreak: { mode: 'avoid-all', after: '.avoidThisRow' },    // 智能分页，防止图片被截断
      enableLinks: true  // 支持文本中放链接，可点击跳转
    };
    html2pdf(element, opt);
  };

  return (
    <div className="App flex flex-col">
      <div>
        {/* 文件本人 */}
        <div className='border border-black w-[210mm] h-[297mm] p-5'>
          <div className="flex flex-col" id={'element-to-print'}>
            {/* 最上方表格 */}
            <div className="flex">
              {/* 左邊區塊 */}
              <div className="flex flex-row pr-2">
                {/* 左邊區塊的第一格 */}
                <div className="w-[184px] text-center">
                  <p className="text-xs">
                    （公 司 印 章）
                  </p>
                  <div className="border-2 border-gray-800 h-[94%]"></div>
                </div>
                {/* 左邊區塊的第二格 */}
                <div className="w-[136px] text-center">
                  <p className="text-xs">
                    （代表公司負責人印章）
                  </p>
                  <div className="border-y-2 border-r-2 border-gray-800 h-[94%]"></div>
                </div>
              </div>
              {/* 右邊區塊 */}
              <div className="text-left pt-1">
                <h1 className="pb-1 font-black text-lg">有限公司設立登記表</h1>
                {/* 右邊區塊的第一行 */}
                <div className="flex items-center">
                  <p className="pr-2 whitespace-nowrap">
                    <span className="text-white">※ </span>公司預查編號
                  </p>
                  <div className="border-2 border-gray-800 h-[40px] w-[100%]"></div>
                </div>
                {/* 右邊區塊的第二行 */}
                <div className="flex flex-row items-center">
                  <p className="pr-2 whitespace-nowrap">※ 公司統一編號</p>
                  <div className="border-x-2 border-gray-800 h-[40px] w-[100%]"></div>
                </div>
                {/* 右邊區塊的第三行 */}
                <div className="flex flex-row items-center">
                  <p className="pr-2 whitespace-nowrap">
                    <span className="text-white">※ </span>公司聯絡電話
                  </p>
                  <div className="border-2 border-gray-800 h-[40px] w-[100%]"></div>
                </div>
                {/* 右邊區塊的第四行 */}
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <p className="pr-2 whitespace-nowrap">
                      <span className="text-white">※ </span>僑外投資事業
                    </p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="p-1 whitespace-nowrap">是</p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="pl-1 whitespace-nowrap">否</p>
                  </div>
                  <div className="flex flex-row items-center pl-3">
                    <p className="pr-2 whitespace-nowrap">一人公司</p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="p-1 whitespace-nowrap">是</p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="pl-1 whitespace-nowrap">否</p>
                  </div>
                </div>
                {/* 右邊區塊的第五行 */}
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <p className="pr-2 whitespace-nowrap">
                      <span className="text-white">※ 陸資陸資</span>陸資
                    </p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="p-1 whitespace-nowrap">是</p>
                    <div className="border-x-2 border-b-2 border-gray-800 h-[40px] w-6" />
                    <p className="pl-1 whitespace-nowrap">否</p>
                  </div>
                  <div className="flex flex-row items-center pl-3">
                    <p className="whitespace-nowrap">
                      預定開業日期 _______________
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="">印章請用油性印泥蓋章,並勿超出框格。</p>
            {/* 中間大表格 */}
            <div className="border-2 border-gray-800">
              {/* 一﹑公司名稱 */}
              <div className="flex flex-row">
                {/* 一﹑公司名稱_標題 */}
                <div className="flex w-52">
                  <div className="border-r border-gray-700 flex items-center">
                    <p className="text-base mx-2 whitespace-nowrap">一﹑公司名稱</p>
                  </div>
                  <div className="text-center w-52">
                    {/* 一﹑中文公司名稱 */}
                    <div className="border-r border-gray-700 w-full">
                      <p className="text-base whitespace-nowrap py-2">中文</p>
                    </div>
                    <div className="border-b border-gray-700" />
                    {/* 一﹑外文公司名稱 */}
                    <div className="border-r border-gray-700 px-1 w-full">
                      <p className="whitespace-nowrap">(章程所訂)</p>
                      <p className="text-base">外文</p>
                    </div>
                  </div>
                </div>
                <div className="text-center w-full">
                  {/* 一﹑中文公司名稱 */}
                  <div className=" border-gray-700 text-end">
                    <p className="text-base py-2 pr-2">有限公司</p>
                  </div>
                  <div className="border-b border-gray-700" />
                  {/* 一﹑外文公司名稱 */}
                  <div className=" border-gray-700 py-2 h-[40px] flex items-center"></div>
                </div>
              </div>
              {/* 二﹑公司所在地 */}
              <div className="flex flex-row border-t border-gray-900">
                {/* 二﹑公司所在地_標題 */}
                <div className="flex w-52">
                  <div className="border-r border-gray-700 flex items-center">
                    <p className="text-base mx-2 whitespace-nowrap">二﹑</p>
                  </div>
                  <div className="border-r border-gray-700 text-center py-1 w-full">
                    <p className="text-base whitespace-nowrap">
                      <span className="text-xs">(郵遞區號)</span>公司所在地
                    </p>
                    <p className="text-xs whitespace-nowrap">(含鄉鎮市區村里)</p>
                  </div>
                </div>
                {/* 二﹑公司所在地_內容 */}
                <div className="flex items-center">
                  <p className="text-base mx-2"><span className="pr-2">(</span><span className="pl-2">)</span></p>
                </div>
              </div>
              {/* 三﹑資本總額 */}
              <div className="flex flex-row border-t border-gray-900">
                {/* 三﹑資本總額_標題 */}
                <div className="flex w-52">
                  <div className="border-r border-gray-700 flex items-center">
                    <p className="text-base mx-2 whitespace-nowrap">三﹑</p>
                  </div>
                  <div className="border-r border-gray-700 text-start py-1 w-full pl-1">
                    <p className="text-base whitespace-nowrap">資本總額</p>
                  </div>
                </div>
                {/* 三﹑資本總額_內容 */}
                <div className="flex items-center justify-between w-[72%]">
                  <p className="text-base mx-2">新台幣</p>
                  <p className="text-base mx-2">
                    元<span className="text-sm">(阿拉伯數字)</span>
                  </p>
                </div>
              </div>
              {/* 四﹑董事人數 ＆ 五、代表人姓名 */}
              <div className="flex flex-row border-t border-gray-900">
                <div className="flex flex-row">
                  {/* 四﹑董事人數-標題 */}
                  <div className="flex w-52">
                    <div className="border-r border-gray-700 flex items-center">
                      <p className="text-base mx-2 whitespace-nowrap">四﹑</p>
                    </div>
                    <div className="border-r border-gray-700 text-start py-1 w-full pl-1">
                      <p className="text-base whitespace-nowrap">董事人數</p>
                    </div>
                  </div>
                  {/* 四﹑董事人數-內容 */}
                  <div className="flex items-center border-r border-gray-700 w-24">
                    <p className="text-base mx-2">人</p>
                  </div>
                </div>
                {/* 五、代表人姓名-標題 */}
                <div className="flex flex-row w-full">
                  <div className="border-r border-gray-700 flex items-center">
                    <p className="text-base mx-2 whitespace-nowrap">
                      五﹑代表人姓名
                    </p>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="border-r border-gray-700 flex-grow flex items-center">
                      <p className="text-base whitespace-nowrap">
                        {/* 代表人姓名 */}
                      </p>
                    </div>
                    <div className="border-r border-gray-700 flex-grow flex items-center">
                      <p className="text-base whitespace-nowrap">
                        {/* 代表人姓名 */}
                      </p>
                    </div>
                    <div className=" border-gray-700 flex-grow flex items-center">
                      <p className="text-base whitespace-nowrap">
                        {/* 代表人姓名 */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 六﹑公司章程訂定日期 */}
              <div className="flex flex-row border-t border-gray-900">
                {/* 六﹑公司章程訂定日期_標題 */}
                <div className="flex w-52">
                  <div className="border-r border-gray-700 flex items-center">
                    <p className="text-base mx-2 whitespace-nowrap">六﹑</p>
                  </div>
                  <div className="border-r border-gray-700 text-start py-1 w-full pl-1">
                    <p className="text-base whitespace-nowrap">公司章程訂定日期</p>
                  </div>
                </div>
                {/* 六﹑公司章程訂定日期_內容 */}
                <div className="flex items-center w-[70%]">
                  <p className="text-base mx-2">
                    <span> ? </span>年
                    <span> ? </span>月
                    <span> ? </span>日
                  </p>
                </div>
              </div>
              {/* 七﹑資本明細 */}
              <div className="flex flex-row border-t border-gray-900">
                <div className="flex flex-row w-full">
                  {/* 七﹑資本明細_標題 */}
                  <div className="flex w-52">
                    <div className="border-r border-gray-700 flex items-center">
                      <p className="text-base mx-2 whitespace-nowrap">七﹑</p>
                    </div>
                    <div className="border-r border-gray-700 text-start py-2 pl-1 w-52 flex items-center">
                      <p className="text-base">資本明細<span className="text-sm">(若資本為4者，請加填第八欄位)</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    {/* 七﹑資本明細_內容-1 */}
                    <div className="flex flex-row">
                      <div className="flex items-center border-r border-b border-gray-700 w-24">
                        <p className="text-base mx-auto">資產增加</p>
                      </div>
                      <div className="flex flex-col w-[82.5%]">
                        <div className="border-b border-gray-700 flex items-center justify-between py-1">
                          <p className="text-base pl-2">1. 現金</p>
                          <p className="text-base pr-2 ">元</p>
                        </div>
                        <div className="border-b border-gray-700 flex items-center justify-between py-1">
                          <p className="text-base pl-2">2. 財產</p>
                          <p className="text-base pr-2 ">元</p>
                        </div>
                        <div className="border-b border-gray-700 flex items-center justify-between py-1">
                          <p className="text-base pl-2">3. 技術</p>
                          <p className="text-base pr-2 ">元</p>
                        </div>
                      </div>
                    </div>
                    {/* 七﹑資本明細_內容-2 */}
                    <div className="flex flex-row">
                      <div className="flex items-center border-r border-b border-gray-700 w-24 justify-between">
                        <p className="text-base mx-auto">併</p>
                        <p className="text-base mx-auto">購</p>
                      </div>
                      <div className="border-b border-gray-700 flex-grow flex items-center justify-between py-1">
                        <p className="text-base pl-2">4. 合併新設</p>
                        <p className="text-base pr-2 ">元</p>
                      </div>
                    </div>
                    {/* 七﹑資本明細_內容-3 */}
                    <div className="flex flex-row text-white">
                      <div className="flex items-center border-r border-gray-700  w-24">
                        <p className="text-base mx-auto whitespace-nowrap"></p>
                      </div>
                      <div className="flex-grow flex items-center py-1 h-8">
                        <p className="text-base pl-2"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 八、被合併公司資料明細 */}
              <div className="flex flex-row border-t border-gray-900">
                <div className="flex flex-row w-full h-full">
                  <div className="border-r border-gray-700 flex items-center w-[51px]">
                    <p className="mx-2">八﹑被合併公司資料明細</p>
                  </div>
                  <div className="w-full h-full">
                    {/* 八、被合併公司資料明細-1 */}
                    <div className="flex flex-row border-b border-gray-700">
                      <div className="border-r border-gray-700 w-40 text-center">
                        <p className="text-base my-1">合併基準日</p>
                      </div>
                      <div className="border-r border-gray-700 w-24 text-center">
                        <p className="mx-auto text-base my-1">統一編號</p>
                      </div>
                      <div className="text-center w-[60%]">
                        <p className="mx-auto text-base my-1">公司名稱</p>
                      </div>
                    </div>
                    {/* 八、被合併公司資料明細-2 */}
                    <div className=" flex flex-row border-b border-gray-700">
                      <div className="border-r border-gray-700 w-40 text-center">
                        <p className="text-base mx-2 py-1">
                          <span> ? </span>年
                          <span> ? </span>月
                          <span> ? </span>日
                        </p>
                      </div>
                      <div className="border-r border-gray-700 w-24">
                        <p className="py-2 mx-auto text-base"></p>
                      </div>
                      <div>
                        <p className="py-2 text-base pl-1"></p>
                      </div>
                    </div>
                    {/* 八、被合併公司資料明細-3 */}
                    <div className=" flex flex-row border-b border-gray-700">
                      <div className="border-r border-gray-700 w-40  text-center">
                        <p className="text-base mx-2 py-1">
                          <span> ? </span>年
                          <span> ? </span>月
                          <span> ? </span>日
                        </p>
                      </div>
                      <div className="border-r border-gray-700 w-24">
                        <p className="py-2 mx-auto text-base"></p>
                      </div>
                      <div>
                        <p className="py-2 text-base pl-1"></p>
                      </div>
                    </div>
                    {/* 八、被合併公司資料明細-4 */}
                    <div className="flex flex-row">
                      <div className="border-r border-gray-700 w-40 text-center">
                        <p className="text-base mx-2 py-1">
                          <span> ? </span>年
                          <span> ? </span>月
                          <span> ? </span>日
                        </p>
                      </div>
                      <div className="border-r border-gray-700 w-24">
                        <p className="py-2 mx-auto text-base"></p>
                      </div>
                      <div>
                        <p className="py-2 text-base pl-1"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 核准登記日期文號 & 檔號 */}
            <div className="pt-3 flex flex-row w-full">
              <div className="flex items-center w-2/3">
                <div className="text-lg font-bold">※</div>
                <div className="pr-2">
                  <p className="whitespace-nowrap text-xs">核准登記</p>
                  <p className="whitespace-nowrap text-xs">日期文號</p>
                </div>
                <div className="border-2 border-gray-800 h-[40px] w-[100%]"></div>
              </div>
              <div className="flex items-center w-1/3 pl-2">
                <div className="text-lg font-bold">※</div>
                <div className="pr-2">
                  <p className="whitespace-nowrap text-xs">檔號</p>
                </div>
                <div className="border-2 border-gray-800 h-[40px] w-[100%]"></div>
              </div>
            </div>
            {/* 公務記載蓋章欄 */}
            <div className="border-2 border-gray-800 mt-3 text-center">
              <p className="text-lg">公務記載蓋章欄</p>
              <div className="border-t-2 border-gray-500 h-[80px] w-[100%]"></div>
            </div>
            {/* 注意事項 */}
            <div className="mt-1 ml-6">
              <p className="text-xs">
                (一)申請表一式二份﹐於核辦後一份存核辦單位﹐一份送還申請公司收執。
              </p>
              <p className="text-xs">
                (二)為配合電腦作業，請打字或電腦以黑色列印填寫清楚，數字部份請採用阿拉伯數字，並請勿折疊、挖補、浮貼或塗改。
              </p>
              <p className="text-xs">
                (三)※各欄如公司統一編號、核准登記日期文號、檔號等，申請人請勿填寫。
              </p>
              <p className="text-xs">
                (四)違反公司法代作資金導致公司資本不實，公司負責人最高可處五年以下有期徒刑。
              </p>
              <p className="text-xs">
                (五)為配合郵政作業，請於所在地加填郵遞區號。
              </p>
            </div>
            <div className="text-sm self-end mr-2 mb-2">商2301 - 1網</div>
          </div>
        </div>
      </div>
      <button onClick={downloadPdf} className='m-3 rounded border-2 border-gray-700'>print</button>
    </div>
  )
}

export default App
