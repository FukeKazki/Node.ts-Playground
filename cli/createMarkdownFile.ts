import * as fs from 'fs'
import {exec, ExecException} from 'child_process'

const [, , ...args] = process.argv

const yyyymmdd = args[0] as string

const year = yyyymmdd?.slice(0, 4) || new Date().getFullYear().toString()
const month = yyyymmdd?.slice(4, 6) || (new Date().getMonth() + 1).toString().padStart(2, '0')
const date = yyyymmdd?.slice(6, 8) || (new Date().getDate()).toString().padStart(2, '0')

const fileName = `${year}${month}${date}.md`

const isExist = fs.existsSync(fileName)

const template = `---
title: ''
date: ${year}-${month}-${date}
tags: []
---
`

const writeFileAsync = (file: string, data: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, (err) => err ? reject(err) : resolve())
	})
}

const execAsync = (command: string): Promise<string | ExecException> => {
	return new Promise((resolve, reject) => {
		exec(command, ((error, stdout, stderr) => {
			if (error) reject(error)
			if (stderr) reject(stderr)
			resolve(stdout)
		}))
	})
}

(async function () {
	if (!isExist) {
		try {
			await writeFileAsync(fileName, template)
			console.log(`Success: ${fileName} was created.`)
			const result = await execAsync(`open -a Typora ${fileName}`).catch(() => '')
		} catch (error) {
			console.error(error)
		}
	} else {
		console.log(`Failed: ${fileName} is already exist.`)
	}
}())