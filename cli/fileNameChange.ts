import * as fs from 'fs'

const path = process.cwd()

const fileNames = fs.readdirSync(path)

const markdownFiles = fileNames.filter(name => /\.md$/.test(name))

markdownFiles.map(prevName => {
	const nextName = prevName.replace(/-/g, '')

	fs.rename(prevName, nextName, err => {
		if (err) {
			console.log(`Rename Failed: ${err}`)
		} else {
			console.log(`${prevName} --> ${nextName}`)
		}
	})
})
