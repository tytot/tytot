const fs = require('fs')
const git = require('./git')
const questions = require('./questions.json')

const qIndex = (Math.random() * questions.length) | 0
console.log('Using question ' + qIndex)
const question = questions[qIndex]
let meta = {
    A: ':x: *Wrong...*',
    B: ':x: *Wrong...*',
    C: ':x: *Wrong...*',
    D: ':x: *Wrong...*',
}
meta[question.answer] = ':heavy_check_mark: *Correct!*'

const dateString = new Intl.DateTimeFormat(undefined, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    dateStyle: 'short',
}).format(new Date())

const data = fs.readFileSync('README-template.md', 'utf8')
console.log(data)
const newData = data.replace('_Question Here_', 
`*Updated ${dateString} at 12:00 AM*
### ${question.question}
<details>
<summary>
${question.A}    
</summary>

${meta.A}
</details>
<details>
<summary>
${question.B}  
</summary>

${meta.B}
</details>
<details>
<summary>
${question.C}   
</summary>

${meta.C}
</details>
<details>
<summary>
${question.D}  
</summary>

${meta.D}
</details>`)

fs.writeFile('README.md', newData, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Success.')
    git.push()
})
