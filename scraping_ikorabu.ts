import axios from 'axios'
import cheerio from 'cheerio'

interface news {
    date: string
    category: string
    body: string
}

const scraping = async (i: number): Promise<string> => {
    try {
        const response = await axios.get('https://equal-love.jp/news/', {
            params: {
                page: i,
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
        return ''
    }

}

const analysis = (result: string): news[] => {
    const $ = cheerio.load(result)
    console.log($('title').text())

    const news: news[] = []
    $('.infoList li').map((i, element) => {
        const body = $(element).find('.tit').text()
        const category = $(element).find('span:first-child').text()
        const date = $(element).find('.date').text().replace(/[^0-9.]/g, '')

        const object: news = {
            date: date,
            category: category,
            body: body.trim(),
        }
        news.push(object)
    })
    return news
}

export const main = async () => {
    const news = []
    for (let i = 1; i < 11; ++i) {
        const result = await scraping(i)
        const tmp = analysis(result)
        news.push(tmp)
    }
    console.log(news)
}

// メインの実行
(async () => {
    await main()
})()