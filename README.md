# Vue 3 + Javascript + Vite

This template should help get you started developing with Vue 3 and Javascript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [Javascript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-javascript-vue-plugin).

## Type Support For `.vue` Imports in TS

Javascript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Javascript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-javascript-vue-plugin) to make the Javascript language service aware of `.vue` types.

If the standalone Javascript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in Javascript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
