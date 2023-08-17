import PropTypes from 'prop-types';

const PageOne = ({ data, totalPages }) => {
    return (
        <div className='w-[210mm] h-[297mm] border border-gray-700' id='pdfContent'>
            <div className="flex flex-col p-12">
                <div className='text-base text-end'>共<span className='border-b-2 border-gray-700'> {totalPages} </span>頁第<span className='border-b-2 border-gray-700'> 1 </span>頁</div>
                {/* 最上方表格 */}
                <div className="flex w-full">
                    {/* 左邊區塊 */}
                    <div className="flex flex-row pr-2">
                        {/* 左邊區塊的第一格 */}
                        <div className="w-[150px] text-center">
                            <p className="text-xs">
                                （公 司 印 章）
                            </p>
                            <div className="border-2 border-gray-800 h-[91%]"></div>
                        </div>
                        {/* 左邊區塊的第二格 */}
                        <div className="w-[130px] text-center">
                            <p className="text-xs">
                                （代表公司負責人印章）
                            </p>
                            <div className="border-y-2 border-r-2 border-gray-800 h-[91%]"></div>
                        </div>
                    </div>
                    {/* 右邊區塊 */}
                    <div className='w-full'>
                        <h1 className="pb-1 text-xl font-black">有限公司設立登記表</h1>
                        {/* 右邊區塊的第一行 */}
                        <div className="flex items-center">
                            <p className="pr-2 whitespace-nowrap">&emsp; 公司預查編號</p>
                            <div className="border-2 border-gray-800 h-[28px] w-full items-center flex pl-2 tracking-custom">{data.compPreNo}</div>
                        </div>
                        {/* 右邊區塊的第二行 */}
                        <div className="flex flex-row items-center">
                            <p className="pr-2 whitespace-nowrap">※ 公司統一編號</p>
                            <div className="border-x-2 border-gray-800 h-[28px] w-full items-center flex pl-2 tracking-custom">{data.compUniNo}</div>
                        </div>
                        {/* 右邊區塊的第三行 */}
                        <div className="flex flex-row items-center">
                            <p className="pr-2 whitespace-nowrap">&emsp; 公司聯絡電話</p>
                            <div className="border-2 border-gray-800 h-[28px] w-full items-center flex pl-2 tracking-custom">{data.compContactTel}</div>
                        </div>
                        {/* 右邊區塊的第四行 */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <p className="pr-2 whitespace-nowrap">&emsp; 僑外投資事業</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{data.overseasInvest && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{!data.overseasInvest && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                            <div className="flex flex-row items-center pl-3">
                                <p className="pr-2 whitespace-nowrap">一人公司</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{data.soleCompany && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{!data.soleCompany && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                        </div>
                        {/* 右邊區塊的第五行 */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <p className="pr-2 whitespace-nowrap">&emsp; &emsp;&emsp;&emsp;&emsp;陸資
                                </p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{data.mainlandInvest && <p className='text-base'>✓</p>}</div>
                                <p className="p-1 whitespace-nowrap">是</p>
                                <div className="border-x-2 border-b-2 border-gray-800 h-[28px] w-6 flex items-center justify-center">{!data.mainlandInvest && <p className='text-base'>✓</p>}</div>
                                <p className="pl-1 whitespace-nowrap">否</p>
                            </div>
                            <div className="flex flex-row pl-3">
                                <p className="whitespace-nowrap">
                                    預定開業日期 <span className='pb-1 text-base tracking-wide border-b border-gray-700'>&emsp;{data.scheduledOpenDate}&emsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs">印章請用油性印泥蓋章,並勿超出框格。</p>
                {/* 中間大表格 */}
                <div className="border-2 border-gray-800">
                    {/* 一﹑公司名稱 */}
                    <div className="flex flex-row">
                        {/* 一﹑公司名稱_標題 */}
                        <div className="flex w-52">
                            <div className="flex items-center border-r border-gray-700">
                                <p className="mx-2 text-base whitespace-nowrap">一﹑公司名稱</p>
                            </div>
                            <div className="text-center w-52">
                                {/* 一﹑中文公司名稱 */}
                                <div className="w-full border-r border-gray-700">
                                    <p className="py-1 text-base whitespace-nowrap">中文</p>
                                </div>
                                <div className="border-b border-gray-700" />
                                {/* 一﹑外文公司名稱 */}
                                <div className="w-full border-r border-gray-700">
                                    <p className="text-xs whitespace-nowrap">（章程所訂）</p>
                                    <p className="text-base">外文</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            {/* 一﹑中文公司名稱 */}
                            <div className="flex justify-between border-gray-700 text-end">
                                <p className="flex items-center pl-2 text-base">{data.coNameCN}</p>
                                <p className="py-1 pr-2 text-base">有限公司</p>
                            </div>
                            <div className="border-b border-gray-700" />
                            {/* 一﹑外文公司名稱 */}
                            <div className=" border-gray-700 py-2 h-[40px] flex items-center">
                                <p className="flex items-center pl-2 text-base tracking-custom">{data.coNameIntl}</p>
                            </div>
                        </div>
                    </div>
                    {/* 二﹑公司所在地 */}
                    <div className="flex flex-row border-t border-gray-900">
                        {/* 二﹑公司所在地_標題 */}
                        <div className="flex w-52">
                            <div className="flex items-center border-r border-gray-700">
                                <p className="mx-2 text-base whitespace-nowrap">二﹑</p>
                            </div>
                            <div className="w-full py-1 text-center border-r border-gray-700">
                                <p className="text-base whitespace-nowrap">
                                    <span className="text-xs">（郵遞區號）</span>公司所在地
                                </p>
                                <p className="text-xs whitespace-nowrap">（含鄉鎮市區村里）</p>
                            </div>
                        </div>
                        {/* 二﹑公司所在地_內容 */}
                        <div className="flex items-center">
                            <p className="flex items-center mx-2 text-base"><span className="pr-2">(</span>{data.postalCode}<span className="px-2">)</span>{data.coAddress}</p>
                        </div>
                    </div>
                    {/* 三﹑資本總額 */}
                    <div className="flex flex-row border-t border-gray-900">
                        {/* 三﹑資本總額_標題 */}
                        <div className="flex w-52">
                            <div className="flex items-center border-r border-gray-700">
                                <p className="mx-2 text-base whitespace-nowrap">三﹑</p>
                            </div>
                            <div className="px-1 py-1 border-r border-gray-700 text-start w-52">
                                <p className="text-base whitespace-nowrap">資本總額</p>
                            </div>
                        </div>
                        {/* 三﹑資本總額_內容 */}
                        <div className="flex items-center justify-between w-[72%]">
                            <p className="mx-2 text-base">新台幣
                                <span className='pl-2 tracking-wide'>
                                    {parseFloat(data.amount).toLocaleString('zh-TW', {
                                        style: 'currency',
                                        currency: 'TWD',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    })}
                                </span>
                            </p>
                            <p className="mx-2 text-base">
                                元<span className="text-sm">(阿拉伯數字)</span>
                            </p>
                        </div>
                    </div>
                    {/* 四﹑董事人數 ＆ 五、代表人姓名 */}
                    <div className="flex flex-row border-t border-gray-900">
                        <div className="flex flex-row">
                            {/* 四﹑董事人數-標題 */}
                            <div className="flex w-52">
                                <div className="flex items-center border-r border-gray-700">
                                    <p className="mx-2 text-base whitespace-nowrap">四﹑</p>
                                </div>
                                <div className="w-full py-1 pl-1 border-r border-gray-700 text-start">
                                    <p className="text-base whitespace-nowrap">董事人數</p>
                                </div>
                            </div>
                            {/* 四﹑董事人數-內容 */}
                            <div className="flex items-center justify-between w-24 border-r border-gray-700">
                                <p className="mx-2 text-base">{data.directors}</p>
                                <p className="mx-2 text-base">人</p>
                            </div>
                        </div>
                        {/* 五、代表人姓名-標題 */}
                        <div className="flex flex-row w-full">
                            <div className="flex items-center border-r border-gray-700">
                                <p className="mx-2 text-base whitespace-nowrap">
                                    五﹑代表人姓名
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex items-center flex-grow border-r border-gray-700">
                                    <p className="pl-2 text-base whitespace-nowrap">
                                        {/* 代表人姓名 */}
                                        {data.repName[0]}
                                    </p>
                                </div>
                                <div className="flex items-center flex-grow border-r border-gray-700">
                                    <p className="pl-2 text-base whitespace-nowrap">
                                        {/* 代表人姓名 */}
                                        {data.repName[0]}
                                    </p>
                                </div>
                                <div className="flex items-center flex-grow border-gray-700 ">
                                    <p className="pl-2 text-base whitespace-nowrap">
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
                        <div className="flex flex-row w-52">
                            <div className="flex items-center border-r border-gray-700">
                                <p className="mx-2 text-base whitespace-nowrap">六﹑</p>
                            </div>
                            <div className="px-1 py-1 border-r border-gray-700 text-start w-52">
                                <p className="text-base whitespace-nowrap">公司章程訂定日期</p>
                            </div>
                        </div>
                        {/* 六﹑公司章程訂定日期_內容 */}
                        <div className="flex items-center w-[70%]">
                            <p className="mx-2 text-base tracking-custom">
                                {data.charterDate}
                            </p>
                        </div>
                    </div>
                    {/* 七﹑資本明細 */}
                    <div className="flex flex-row border-t border-gray-900">
                        <div className="flex flex-row w-full">
                            {/* 七﹑資本明細_標題 */}
                            <div className="flex w-52">
                                <div className="flex items-center border-r border-gray-700">
                                    <p className="mx-2 text-base whitespace-nowrap">七﹑</p>
                                </div>
                                <div className="flex items-center py-2 pl-1 border-r border-gray-700 text-start w-52">
                                    <p className="text-base">資本明細<span className="text-sm">(若資本為4者，請加填第八欄位)</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                {/* 七﹑資本明細_內容-1 */}
                                <div className="flex flex-row">
                                    <div className="flex items-center justify-between w-24 border-b border-r border-gray-700">
                                        <p className="mx-auto text-base">資產增加</p>
                                    </div>
                                    <div className="w-[80%]">
                                        <div className="flex items-center justify-between flex-grow py-1 border-b border-gray-700">
                                            <p className="pl-2 text-base">1. 現金</p>
                                            <p className="pr-2 text-base ">
                                                <span className='px-2 tracking-wide'>
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
                                        <div className="flex items-center justify-between flex-grow py-1 border-b border-gray-700">
                                            <p className="pl-2 text-base">2. 財產</p>
                                            <p className="pr-2 text-base ">
                                                <span className='px-2 tracking-wide'>
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
                                        <div className="flex items-center justify-between flex-grow py-1 border-b border-gray-700">
                                            <p className="pl-2 text-base">3. 技術</p>
                                            <p className="pr-2 text-base ">
                                                <span className='px-2 tracking-wide'>
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
                                    <div className="flex items-center justify-between w-24 border-b border-r border-gray-700">
                                        <p className="mx-auto text-base">併&emsp;&emsp;購</p>
                                    </div>
                                    <div className="flex items-center justify-between flex-grow py-1 border-b border-gray-700 w-[80%]">
                                        <p className="pl-2 text-base">4. 合併新設</p>
                                        <p className="pr-2 text-base ">
                                            <span className='px-2 tracking-wide'>
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
                                    <div className="flex items-center w-24 border-r border-gray-700">
                                        <p className="mx-auto text-base whitespace-nowrap"></p>
                                    </div>
                                    <div className="flex items-center flex-grow h-8 py-1 w-[80%]">
                                        <p className="pl-2 text-base"></p>
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
                            <div className="w-full">
                                <div className="flex flex-row border-b border-gray-700">
                                    <div className="w-[160.5px] text-center border-r border-gray-700">
                                        <p className="mx-2 my-1 text-base">合併基準日</p>
                                    </div>
                                    <div className="w-[96px] text-center border-r border-gray-700">
                                        <p className="mx-2 my-1 text-base">統一編號</p>
                                    </div>
                                    <div className="justify-center text-center w-[59%]">
                                        <p className="mx-2 my-1 text-base">公司名稱</p>
                                    </div>
                                </div>
                                <div className="flex flex-row border-b border-gray-700">
                                    <div className="text-center border-r border-gray-700 w-[160.5px]">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[0].mergeDate}</p>
                                    </div>
                                    <div className="w-[96px] text-center border-r border-gray-700">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[0].compUniNo}</p>
                                    </div>
                                    <div className="justify-center text-center w-[59%]">
                                        <p className="mx-2 my-1 text-base">{data.mergeCo[0].comName}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row border-b border-gray-700">
                                    <div className="text-center border-r border-gray-700 w-[160.5px]">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[1].mergeDate}</p>
                                    </div>
                                    <div className="w-[96px] text-center border-r border-gray-700">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[1].compUniNo}</p>
                                    </div>
                                    <div className="justify-center text-center w-[59%]">
                                        <p className="mx-2 my-1 text-base">{data.mergeCo[1].comName}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="text-center border-r border-gray-700 w-[160.5px]">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[2].mergeDate}</p>
                                    </div>
                                    <div className="w-[96px] text-center border-r border-gray-700">
                                        <p className="mx-2 my-1 text-base tracking-custom">{data.mergeCo[2].compUniNo}</p>
                                    </div>
                                    <div className="justify-center text-center w-[59%]">
                                        <p className="mx-2 my-1 text-base">{data.mergeCo[2].comName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 核准登記日期文號 & 檔號 */}
                <div className="flex flex-row w-full pt-2">
                    <div className="flex items-center w-2/3">
                        <div className="text-lg font-bold">※</div>
                        <div className="pr-2">
                            <p className="text-xs whitespace-nowrap">核准登記</p>
                            <p className="text-xs whitespace-nowrap">日期文號</p>
                        </div>
                        <div className="border-2 border-gray-800 h-[30px] w-[100%] items-center flex pl-2 tracking-custom">{data.approvedDateRef}</div>
                    </div>
                    <div className="flex items-center w-1/3 pl-2">
                        <div className="text-lg font-bold">※</div>
                        <div className="pr-2">
                            <p className="text-xs whitespace-nowrap">檔號</p>
                        </div>
                        <div className="border-2 border-gray-800 h-[30px] w-[100%] items-center flex pl-2 tracking-custom">{data.fileNo}</div>
                    </div>
                </div>
                {/* 公務記載蓋章欄 */}
                <div className="mt-3 text-center border-2 border-gray-800">
                    <p className="text-lg">公務記載蓋章欄</p>
                    <div className="border-t-2 border-gray-500 h-[78px] w-[100%]"></div>
                </div>
                {/* 注意事項 */}
                <div className="mt-1 ml-6">
                    <p className="text-xs">
                        (一) 申請表一式二份﹐於核辦後一份存核辦單位﹐一份送還申請公司收執。
                    </p>
                    <p className="text-xs">
                        (二) 為配合電腦作業，請打字或電腦以黑色列印填寫清楚，數字部份請採用阿拉伯數字，並請勿折疊、挖補、浮貼或塗改。
                    </p>
                    <p className="text-xs">
                        (三) ※各欄如公司統一編號、核准登記日期文號、檔號等，申請人請勿填寫。
                    </p>
                    <p className="text-xs">
                        (四) 違反公司法代作資金導致公司資本不實，公司負責人最高可處五年以下有期徒刑。
                    </p>
                    <p className="text-xs">
                        (五) 為配合郵政作業，請於所在地加填郵遞區號。
                    </p>
                </div>
                <div className="flex flex-col self-end mr-2 text-sm"><p className='tracking-custom'>商2301 - 1網</p><p className='tracking-custom'>1071108 公告</p></div>
            </div>
        </div>
    );
}

PageOne.propTypes = {
    data: PropTypes.object.isRequired,
    totalPages: PropTypes.number.isRequired
}

export default PageOne;
