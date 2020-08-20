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

const newData = `<div align="center">
<a href="https://tylerl.in"><img alt="Website" title="Website" src="https://raw.githubusercontent.com/tytot/tytot/master/me.png" alt="Tyler Lin" width="50%" height="50%" /></a>
</div>
<p align="center">
<a href="mailto:tyler@tylerl.in"><img alt="Email" title="Email" height="32" width="32" src="https://camo.githubusercontent.com/df5a487e714dcdebdb4b5473a4ebc3a19fed6e15/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6d61696c2e737667" /></a>
<a href="https://www.instagram.com/t.1in/"><img alt="Instagram" title="Instagram" height="32" width="32" src="https://camo.githubusercontent.com/68ff38b86f01b428567dcc406116e23728245f4e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" /></a>
<a href="https://www.youtube.com/channel/UCHohccum1zD32bCk3hZT7Pw"><img alt="Youtube" title="Youtube" height="32" width="32" src="https://camo.githubusercontent.com/0f31a4f7adb78461ca03dfaad4a138eedf0d14e0/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667" /></a>
</p>

## :mortar_board: Daily Trivia!
*Updated ${dateString} at 12:00 AM*
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
</details>

## :bar_chart: My Stats

![tytot's Github Stats](https://github-readme-stats.vercel.app/api?username=tytot&hide=stars&hide_title=true&show_icons=true&count_private=true&title_color=e31837&icon_color=e31837&text_color=c4ced4&bg_color=002b5c)

## :gem: My Favorite Repos

[![Attendance for Google Meet by tytot](https://github-readme-stats.vercel.app/api/pin/?username=tytot&repo=attendance-for-google-meet&title_color=ffb81c&text_color=ffffff&icon_color=ffb81c&bg_color=6f263d)](https://github.com/tytot/attendance-for-google-meet)
[![tytot.github.io by tytot](https://github-readme-stats.vercel.app/api/pin/?username=tytot&repo=tytot.github.io&title_color=ff3c00&text_color=ffffff&icon_color=ff3c00&bg_color=311d00)](https://github.com/tytot/tytot.github.io)

## :scroll: My Most Used Languages

![tytot's Most Used Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=tytot&hide_title=true&layout=compact&text_color=ffffff&bg_color=241773)`

fs.writeFile('README.md', newData, (err) => {
    if (err) throw err

    console.log('Success.')
    git.push()
})
