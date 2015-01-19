> npm init && npm install --save express express-session request
express-handlebars mongodb morgan cookie-parser body-parser
method-override underscore

Adding a second SSH key and tying to this project

Put two ssh identities in your global ssh config file ~/.ssh/config

#Default GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_personal


Update the git config for the project to reference the personal account,
i.e. set ~/code/moviedb/.git/config

[remote "origin"]
  url = git@github-personal:domhnall/moviedb.git
  fetch = +refs/heads/*:refs/remotes/origin/*

