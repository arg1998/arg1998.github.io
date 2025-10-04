# [Argosta.me](https://argosta.me)

This repository contains the source code for my statically generated website that is hosted on [`gh-pages`](https://pages.github.com/). 


# Patches: 

- `gh-pages` version `6.3.0` has a issue when deploying the website on Windows. For this verison, manually applying [this patch](https://github.com/tschaub/gh-pages/issues/585#issuecomment-2585457896) fixed the issue. 
- For some reason, `gh-pages` decided to not include any dotfile into the deployment branch. This caused a lot of issue becuase it was ignoring the `.nojekyll` file. There is a poorly documented flag `t` which forces `gh-pages` to push dotfiles. [Here is](https://github.com/tschaub/gh-pages/issues/315) wehere I found the patch! 