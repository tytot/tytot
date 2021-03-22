const git = require('simple-git')()

function push() {
    git.pull()
        .add('.')
        .commit('Update daily trivia')
        .push('origin', 'master')
        .then(() => console.log('Push complete.'))
        .catch((err) => console.error(err))
}

module.exports = { push }
