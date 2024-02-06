import { spawn } from 'child_process'
import Color from 'colors'
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import process from 'process'

let today = new Date()

let year = today.getFullYear()
let month = today.getMonth() + 1
let day = today.getDate()

month = month < 10 ? '0' + month : month
day = day < 10 ? '0' + day : day

let formattedDate = year + '-' + month + '-' + day

const getAvailableTags = () => {
  const tags = JSON.parse(fs.readFileSync(path.resolve('./app/tag-data.json'), 'utf-8'))
  return Object.keys(tags)
}

getAvailableTags()

const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title?",
    validate: function (input) {
      if (input.trim() === '') {
        return 'Please enter a title.'
      }
      return true
    },
  },
  {
    type: 'input',
    name: 'summary',
    message: "What's the summary?",
  },
  {
    type: 'checkbox',
    name: 'tags',
    message: 'Assign tags for the posts.',
    choices: getAvailableTags(),
  },
  {
    type: 'input',
    name: 'extraTags',
    message: 'Add extra tags for the posts.',
  },
  {
    type: 'inpur',
    name: 'subFolder',
    message: 'Do you want to create a subfolder for this post?',
  },
]

const template = (title, summary, tags) => `---
title: ${title}
summary: ${summary}
date: '${formattedDate}'
tags: ${JSON.stringify(tags)}
---
`

inquirer.prompt(questions).then((answers) => {
  const tags = answers.tags
    .concat(
      answers.extraTags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== '')
    )
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '')
  const content = template(answers.title, answers.summary, tags)
  const sluggedTitle = answers.title.replace(/\s/g, '-')
  const postFileName = `${sluggedTitle}.mdx`
  const postPath = answers.subFolder ? `./data/blog/${answers.subFolder}` : './data/blog'
  const postFilePath = path.resolve(path.join(postPath, postFileName))
  fs.writeFile(postFilePath, content, 'utf-8', (err) => {
    if (err) console.log(err)
    console.log(Color.green(Color.bold('Create Post Succeed.')))
    console.log(`Open the file ${Color.cyan(postFilePath)} to write your blog now.`)
    console.log(
      'Some fields, such as summary, need to be filled in by yourself after opening the file.'
    )
    /*if (process.platform === 'win32') {
      spawn('cmd', ['/c', 'start', postFilePath])
      return
    }
    if (['darwin', 'linux', 'freebsd'].includes(process.platform)) {
      spawn('open', [postFilePath])
      return
    }*/
  })
})
