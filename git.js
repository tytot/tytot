const git = require('simple-git')()

function push() {
    git.pull('origin', 'master')
        .add('.')
        .commit('Update daily trivia')
        .push('origin', 'master', ['--force'])
        .then(() => console.log('Push complete.'))
        .catch((err) => console.error(err))
}

module.exports = { push }
