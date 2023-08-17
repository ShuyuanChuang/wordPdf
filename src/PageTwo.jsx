import PropTypes from 'prop-types';

const PageTwo = ({ data }) => {

    const businessActivities = data.businessActivities || [];
    const totalRows = 20;
    const totalPages = Math.ceil(businessActivities.length / totalRows);

    const fillBlankRows = (rows) => {
        const remainingBlankRows = totalRows - rows.length;

        for (let i = 0; i < remainingBlankRows; i++) {
            rows.push({});
        }

        return rows;
    }

    const generateTable = (page) => {
        const startIndex = (page - 1) * totalRows;
        const endIndex = Math.min(page * totalRows, businessActivities.length);
        const rows = businessActivities.slice(startIndex, endIndex);

        return (
            <table className="min-w-full table-auto" key={`table-${page}`}>
                <thead>
                    <tr>
                        <th className="py-1 border-r border-gray-700">編碼</th>
                        <th className="px-2 border-r border-gray-700">代&emsp;碼</th>
                        <th className="px-3 border-gray-700">營&emsp;業&emsp;項&emsp;目&emsp;說&emsp;明</th>
                    </tr>
                </thead>
                <tbody>
                    {fillBlankRows(rows).map((activity, index) => (
                        <tr key={startIndex + index + 1} className='h-8'>
                            <td className="px-4 py-1 border-gray-700 border-y">{startIndex + index + 1}</td>
                            <td className="px-4 py-1 border border-gray-700 tracking-custom">{activity.code || ''}</td>
                            <td className="px-4 py-1 border-gray-700 border-y">{activity.itemDescription || ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const renderPages = () => {
        const pages = [];
        for (let page = 1; page <= totalPages; page++) {
            const table = generateTable(page);
            const pageContent = (
                <div className='w-[210mm] h-[297mm] border border-gray-700' key={`pdfContent-${page}`}>
                    <div className="flex flex-col p-12">
                        <div className='pb-4 text-base text-end'>共<span className='border-b-2 border-gray-700'> {totalPages+1} </span>頁第<span className='border-b-2 border-gray-700'> {page+1} </span>頁</div>
                        {/* 標題 */}
                        <div className='flex flex-row pl-2'>
                            <p className='text-xl border-b-2 border-gray-700'>&emsp;{data.coNameCN}&emsp;</p>
                            <span className='pl-10 text-xl font-black'>有限公司設立登記表</span>
                        </div>
                        <p className='pt-1 pl-3 text-blue-900'>註:欄位不足請自行複製，未使用之欄位可自行刪除，若本頁不足使用，請複製全頁後自行增減欄位。</p>
                        <div className="mt-1 text-center border-2 border-gray-800">
                            <p className="text-xl font-black border-b-2 border-gray-700 ">所&emsp;營&emsp;事&emsp;業</p>
                            {table}
                        </div>
                        {/* 公務記載蓋章欄 */}
                        <div className="mt-3 text-center border-2 border-gray-800">
                            <p className="text-lg">公務記載蓋章欄</p>
                            <div className="border-t-2 border-gray-500 h-[78px] w-[100%]"></div>
                        </div>
                        <div className="flex flex-col self-end mt-4 mb-2 mr-2 text-sm"><p className='tracking-custom'>商2301 - 1網</p><p className='tracking-custom'>1071108 公告</p></div>
                    </div>
                </div>
            );

            pages.push(pageContent);
        }

        return pages;
    }

    return (
        <div>
            {renderPages()}
        </div>
    );
}

PageTwo.propTypes = {
    data: PropTypes.object.isRequired
}

export default PageTwo;

