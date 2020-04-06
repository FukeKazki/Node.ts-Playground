import axios from 'axios'
import querystring, {ParsedUrlQueryInput} from 'querystring'
import cheerio from 'cheerio'

interface news {
    date: string
    category: string
    body: string
}
// スクレイピングの実行
const scraping_hinatazaka46 = async (data: ParsedUrlQueryInput): Promise<string> => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://www.hinatazaka46.com/s/official/news/list',
            data: querystring.stringify(data),
        })
        console.log('success')
        return response.data
    } catch (err) {
        console.log('failed', err)
        return ''
    }
}
// DOMの解析
const analysis = (result: string): news[] => {
    const $ = cheerio.load(result)
    console.log($('title').text())

    const news: news[] = []
    // newsの取得
    $('.p-news__item').map((i, element) => {
        const date = $(element).find('.c-news__date').text()
        const category = $(element).find('.c-news__category').text()
        const body = $(element).find('.c-news__text').text()

        const object: news = {
            date: date,
            category: category,
            body: body.trim(),
        }
        news.push(object)
    })
    return news
}

const MEMBERS = [null, null, '潮 紗理菜', null, '影山 優佳', '加藤 史帆', '齊藤 京子', '佐々木 久美', '佐々木 美玲', '高瀬 愛奈',
    '高本 彩花', '東村 芽依', '金村 美玖', '河田 陽菜', '小坂 菜緒', '富田 鈴花', '丹生 明里', '濱岸 ひより', '松田 好花', '宮田 愛萌',
    '渡邉 美穂', '上村 ひなの']

const main = async () => {
    // メンバーの選択
    MEMBERS.map((member, i) => console.log(i, member))
    const data = {
        // 複数人選択可能
        list: [16],
    }

    const result = await scraping_hinatazaka46(data)
    const news = analysis(result)
    console.log(news)
}

// メインの実行
(async () => {
    await main()
})()