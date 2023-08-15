import PropTypes from 'prop-types';

const PageOne = ({ data, allPage, nowPage }) => {
    return (
        <div className='w-[210mm] h-[297mm]' id='pdfContent'>
            <div className="flex flex-col">
                <div className='text-end text-base'>共<span className='border-b-2 border-gray-700'> {allPage} </span>頁第<span className='border-b-2 border-gray-700'> {nowPage} </span>頁</div>
                {/* 最上方表格 */}
                <div className="flex w-full">
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
                        <div className="w-[140px] text-center">
                            <p className="text-xs">
                                （代表公司負責人印章）
                            </p>
                            <div className="border-y-2 border-r-2 border-gray-800 h-[94%]"></div>
                        </div>
                    </div>
                    {/* 右邊區塊 */}
                    <div className="text-left pt-1 w-full">
                        <h1 className="pb-1 font-black text-xl">有限公司設立登記表</h1>
                        {/* 右邊區塊的第一行 */}
                        <div className="flex items-center">
                            <p className="pr-2 whitespace-nowrap">&emsp; 公司預查編號</p>
                            <div className="border-2 border-gray-800 h-[36px] w-[100%] items-center flex pl-2">{data.compPreNo}</div>
                        </div>
                        {/* 右邊區塊的第二行 */}
                        <div className="flex flex-row items-center">
                            <p className="pr-2 whitespace-nowrap">※ 公司統一編號</p>
                            <div className="border-x-2 border-gray-800 h-[36px] w-[100%] items-center flex pl-2">{data.compUniNo}</div>
                        </div>
                        {/* 右邊區塊的第三行 */}
                        <div className="flex flex-row items-center">
                            <p className="pr-2 whitespace-nowrap">&emsp; 公司聯絡電話</p>
                            <div className="border-2 border-gray-800 h-[36px] w-[100%] items-center flex pl-2">{data.compContactTel}</div>
                        </div>
                        {/* 右邊區塊的第四行 */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <p className="pr-2 whitespace-nowrap">&emsp; 僑外投資事業</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{data.overseasInvest && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{!data.overseasInvest && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                            <div className="flex flex-row items-center pl-3">
                                <p className="pr-2 whitespace-nowrap">一人公司</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{data.soleCompany && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{!data.soleCompany && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                        </div>
                        {/* 右邊區塊的第五行 */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <p className="pr-2 whitespace-nowrap">&emsp; &emsp;&emsp;&emsp;&emsp;陸資
                                </p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{data.mainlandInvest && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[36px] w-6 flex items-center justify-center">{!data.mainlandInvest && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                            <div className="flex flex-row pl-3">
                                <p className="whitespace-nowrap">
                                    預定開業日期 <span className='pb-1 border-b border-gray-700 text-base tracking-wide'>&emsp;{data.scheduledOpenDate}&emsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs py-1">印章請用油性印泥蓋章,並勿超出框格。</p>
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
                            <div className=" border-gray-700 text-end flex justify-between">
                                <p className="items-center flex pl-2 text-base">{data.coNameCN}</p>
                                <p className="text-base py-2 pr-2">有限公司</p>
                            </div>
                            <div className="border-b border-gray-700" />
                            {/* 一﹑外文公司名稱 */}
                            <div className=" border-gray-700 py-2 h-[40px] flex items-center">
                                <p className="items-center flex pl-2 text-base">{data.coNameIntl}</p>
                            </div>
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
                            <p className="mx-2 items-center flex text-base"><span className="pr-2">(</span>{data.postalCode}<span className="px-2">)</span>{data.coAddress}</p>
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
                            <p className="text-base mx-2">新台幣
                                <span className='tracking-wide pl-2'>
                                    {parseFloat(data.amount).toLocaleString('zh-TW', {
                                        style: 'currency',
                                        currency: 'TWD',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    })}
                                </span>
                            </p>
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
                            <div className="flex items-center border-r border-gray-700 w-24 justify-between">
                                <p className="text-base mx-2">{data.directors}</p>
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
                                    <p className="text-base whitespace-nowrap pl-2">
                                        {/* 代表人姓名 */}
                                        {data.repName[0]}
                                    </p>
                                </div>
                                <div className="border-r border-gray-700 flex-grow flex items-center">
                                    <p className="text-base whitespace-nowrap pl-2">
                                        {/* 代表人姓名 */}
                                        {data.repName[0]}
                                    </p>
                                </div>
                                <div className=" border-gray-700 flex-grow flex items-center">
                                    <p className="text-base whitespace-nowrap pl-2">
                                        {/* 代表人姓名 */}
                                        {data.repName[0]}
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
                            <p className="text-base mx-2 tracking-widest">
                                {data.charterDate}
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
                                            <p className="text-base pr-2 ">
                                                <span className='tracking-wide px-2'>
                                                    {parseFloat(data.assetCash).toLocaleString('zh-TW', {
                                                        style: 'currency',
                                                        currency: 'TWD',
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0
                                                    })}
                                                </span>
                                                元
                                            </p>
                                        </div>
                                        <div className="border-b border-gray-700 flex items-center justify-between py-1">
                                            <p className="text-base pl-2">2. 財產</p>
                                            <p className="text-base pr-2 ">
                                                <span className='tracking-wide px-2'>
                                                    {parseFloat(data.assetProp).toLocaleString('zh-TW', {
                                                        style: 'currency',
                                                        currency: 'TWD',
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0
                                                    })}
                                                </span>
                                                元
                                            </p>
                                        </div>
                                        <div className="border-b border-gray-700 flex items-center justify-between py-1">
                                            <p className="text-base pl-2">3. 技術</p>
                                            <p className="text-base pr-2 ">
                                                <span className='tracking-wide px-2'>
                                                    {parseFloat(data.assetTech).toLocaleString('zh-TW', {
                                                        style: 'currency',
                                                        currency: 'TWD',
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0
                                                    })}
                                                </span>
                                                元
                                            </p>
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
                                        <p className="text-base pr-2 ">
                                            <span className='tracking-wide px-2'>
                                                {parseFloat(data.assetMerge).toLocaleString('zh-TW', {
                                                    style: 'currency',
                                                    currency: 'TWD',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                            </span>
                                            元
                                        </p>
                                    </div>
                                </div>
                                {/* 七﹑資本明細_內容-3 */}
                                <div className="flex flex-row">
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
                                            {data.mergeCo[0].mergeDate}
                                        </p>
                                    </div>
                                    <div className="border-r border-gray-700 w-24 text-center">
                                        <p className="py-2 mx-auto text-base">{data.mergeCo[0].compUniNo}</p>
                                    </div>
                                    <div>
                                        <p className="py-2 text-base pl-1">{data.mergeCo[0].comName}</p>
                                    </div>
                                </div>
                                {/* 八、被合併公司資料明細-3 */}
                                <div className=" flex flex-row border-b border-gray-700">
                                    <div className="border-r border-gray-700 w-40  text-center">
                                        <p className="text-base mx-2 py-1">
                                            {data.mergeCo[1].mergeDate}
                                        </p>
                                    </div>
                                    <div className="border-r border-gray-700 w-24 text-center">
                                        <p className="py-2 mx-auto text-base">{data.mergeCo[0].compUniNo}</p>
                                    </div>
                                    <div>
                                        <p className="py-2 text-base pl-1">{data.mergeCo[0].comName}</p>
                                    </div>
                                </div>
                                {/* 八、被合併公司資料明細-4 */}
                                <div className="flex flex-row">
                                    <div className="border-r border-gray-700 w-40 text-center">
                                        <p className="text-base mx-2 py-1">
                                            {data.mergeCo[2].mergeDate}
                                        </p>
                                    </div>
                                    <div className="border-r border-gray-700 w-24 text-center">
                                        <p className="py-2 mx-auto text-base">{data.mergeCo[0].compUniNo}</p>
                                    </div>
                                    <div>
                                        <p className="py-2 text-base pl-1">{data.mergeCo[0].comName}</p>
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
                        <div className="border-2 border-gray-800 h-[40px] w-[100%] items-center flex pl-2">{data.approvedDateRef}</div>
                    </div>
                    <div className="flex items-center w-1/3 pl-2">
                        <div className="text-lg font-bold">※</div>
                        <div className="pr-2">
                            <p className="whitespace-nowrap text-xs">檔號</p>
                        </div>
                        <div className="border-2 border-gray-800 h-[40px] w-[100%] items-center flex pl-2">{data.fileNo}</div>
                    </div>
                </div>
                {/* 公務記載蓋章欄 */}
                <div className="border-2 border-gray-800 mt-3 text-center">
                    <p className="text-lg">公務記載蓋章欄</p>
                    <div className="border-t-2 border-gray-500 h-[80px] w-[100%]"></div>
                </div>
                {/* 注意事項 */}
                <div className="mt-2 ml-6">
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
                <div className="text-sm self-end mr-2 mb-2 flex flex-col"><p>商2301 - 1網</p><p>1071108 公告</p></div>
            </div>
        </div>
    );
}

PageOne.propTypes = {
    data: PropTypes.object.isRequired,
    allPage: PropTypes.object.isRequired,
    nowPage: PropTypes.object.isRequired,
}

export default PageOne;
