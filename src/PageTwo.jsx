import PropTypes from 'prop-types';

const PageTwo = ({ data, allPage, nowPage }) => {

    const businessActivities = data.businessActivities || [];
    const remainingBlankRows = 24 - businessActivities.length;

    const blankRows = Array(remainingBlankRows).fill({});

    return (
        <div className='w-[210mm] h-[297mm]' id='pdfContent'>
            <div className="flex flex-col">
                <div className='text-end text-base pb-4'>共<span className='border-b-2 border-gray-700'> {allPage} </span>頁第<span className='border-b-2 border-gray-700'> {nowPage} </span>頁</div>
                {/* 標題 */}
                <div className='flex flex-row pl-2'>
                    <p className='border-b-2 border-gray-700 text-xl'>&emsp;{data.coNameCN}&emsp;</p>
                    <span className='text-xl pl-10 font-black'>有限公司設立登記表</span>
                </div>
                <p className='text-blue-900 pl-3 pt-1'>註:欄位不足請自行複製，未使用之欄位可自行刪除，若本頁不足使用，請複製全頁後自行增減欄位。</p>
                {/* 所營事業 */}
                <div className="border-2 border-gray-800 mt-1 text-center">
                    <p className="text-xl font-black border-b-2 border-gray-700 ">所&emsp;營&emsp;事&emsp;業</p>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="py-1 border-r border-gray-700">編碼</th>
                                <th className="px-2 border-r border-gray-700">代&emsp;碼</th>
                                <th className="px-3 border-gray-700">營&emsp;業&emsp;項&emsp;目&emsp;說&emsp;明</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businessActivities.map((activity, index) => (
                                <tr key={index + 1} className='h-8'>
                                    <td className="border-y px-4 py-1 border-gray-700">{ index + 1}</td>
                                    <td className="border px-4 py-1 border-gray-700">{activity.code}</td>
                                    <td className="border-y px-4 py-1 border-gray-700">{activity.itemDescription}</td>
                                </tr>
                            ))}
                            {blankRows.map((row, index) => (
                                <tr key={index + businessActivities.length + 1} className='h-8'>
                                    <td className="border-y px-4 py-1 border-gray-700">{index + businessActivities.length + 1}</td>
                                    <td className="border px-4 py-1 border-gray-700"></td>
                                    <td className="border-y px-4 py-1 border-gray-700"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* 公務記載蓋章欄 */}
                <div className="border-2 border-gray-800 mt-3 text-center">
                    <p className="text-lg">公務記載蓋章欄</p>
                    <div className="border-t-2 border-gray-500 h-[80px] w-[100%]"></div>
                </div>
                <div className="text-sm self-end mr-2 mb-2 mt-2 flex flex-col"><p>商2301 - 1網</p><p>1071108 公告</p></div>
            </div>
        </div>
    );
}

PageTwo.propTypes = {
    data: PropTypes.object.isRequired,
    allPage: PropTypes.object.isRequired,
    nowPage: PropTypes.object.isRequired,
}

export default PageTwo;
