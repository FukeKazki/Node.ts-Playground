import axios from 'axios'
import cheerio from 'cheerio'
import * as fs from 'fs'

const scraping = async (i: number): Promise<string> => {
    try {
        const response = await axios.get('http://blog.nogizaka46.com/momoko.oozono/', {
            params: {
                p: i,
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
        return ''
    }
}

const analysis = (result: string) => {
    const $ = cheerio.load(result)
    console.log($('title').text())

    const body: string[] = []
    $('.entrybody').map((i, element) => {
        body.push($(element).text().replace(/[\r\n\t\s]/g, ''))
    })
    return body
}

export const main = async () => {
    const news = []
    for (let i = 1; i <= 6; ++i) {
        const result = await scraping(i)
        const tmp = analysis(result)
        news.push(tmp)
    }
    const article = news
        .flat()
        .reduce((prev, current) => prev + current + '\n', '')
    fs.writeFile('article.txt', article, (err) => {
        if (err) console.log(err)
        else console.log('write success')
    })
}

// メインの実行
(async () => {
    await main()
})()