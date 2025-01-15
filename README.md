# Diagnostic Extension for CoC

> [diagnostic-languageserver](https://github.com/iamcco/diagnostic-languageserver)
> extension for CoC

## Install

``` vim
:CocInstall coc-diagnostic
```

![image](https://user-images.githubusercontent.com/5492542/54487533-15590b80-48d2-11e9-8cba-7e58c0edcf6f.png)

## Config

**NOTE**: If you want to support linter that do not include by default,
you should read the [README](https://github.com/iamcco/diagnostic-languageserver#how-to-config-a-new-linter)
for how to config a new linter.

> `linters` `filetypes` `formatters` `formatFiletypes` field config are same as diagnostic-languageserver.
> this extension include all linters config at [linters](https://github.com/iamcco/diagnostic-languageserver/wiki/Linters)
> therefor if you use the linter which have included then you don't need to config linters and formatters

If `mergeConfig` is `true` (default `false`) then any configuration for
`linters` and `formatters` is merged with [the default
configuration](./src/config.ts), this allow overriding specific parts of the
configuration only.

**To enable this plugin for filetypes** you have to config `diagnostic-languageserver.filetypes`
for linters and `diagnostic-languageserver.formatFiletypes` for formatters.

example coc-settings.json:

``` jsonc
{
  // diagnostic-languageserver
  "diagnostic-languageserver.filetypes": {
    "vim": "vint",
    "email": "languagetool",
    "markdown": [ "write-good", "markdownlint" ],
    "sh": "shellcheck",
    "elixir": ["mix_credo", "mix_credo_compile"],
    "eelixir": ["mix_credo", "mix_credo_compile"],
    "php": ["phpstan", "psalm"],
    "yaml": [ "yamllint" ],
    "cmake": [ "cmake-lint", "cmakelint" ],
    "systemd": "systemd-analyze",
    ...
  },
  "diagnostic-languageserver.formatFiletypes": {
    "dart": "dartfmt",
    "elixir": "mix_format",
    "eelixir": "mix_format",
    "python": ["black", "isort"],
    "lua": "lua-format",
    "sh": "shfmt",
    "blade": "blade-formatter",
    "cmake": "cmake-format",
    ...
  }
}
```

**All Options:**

``` jsonc
"diagnostic-languageserver.enable": {
  "type": "boolean",
  "default": true,
  "description": "enable this extension?"
},
"diagnostic-languageserver.mergeConfig": {
  "type": "boolean",
  "default": false,
  "description": "merge config?"
},
"diagnostic-languageserver.debug": {
  "type": "boolean",
  "default": true,
  "description": "enable debug?"
},
"diagnostic-languageserver.trace.server": {
  "type": "string",
  "default": "off",
  "enum": [
    "off",
    "messages",
    "verbose"
  ],
  "description": "Trace level of diagnostic-languageserver"
},
"diagnostic-languageserver.linters": {
  "type": "object",
  "default": {},
  "description": "linters config same as diagnostic-languageserver's linters config"
},
"diagnostic-languageserver.filetypes": {
  "type": "object",
  "default": {},
  "description": "filetypes config same as diagnostic-languageserver's filetypes config"
},
"diagnostic-languageserver.formatters": {
  "type": "object",
  "default": {},
  "description": "formatters config same as diagnostic-languageserver's formatters config"
},
"diagnostic-languageserver.formatFiletypes": {
  "type": "object",
  "default": {},
  "description": "formatFiletypes config same as diagnostic-languageserver's formatFiletypes config"
}
```

### Related Projects

Some coc extensions/language servers also use some linters/formatters.
So if you use them, you can skip some config of this project.

- [alex](https://github.com/get-alex/alex):
  [alex-server](https://www.npmjs.com/package/alex-server),
  [coc-alex](https://www.npmjs.com/package/coc-alex)
- [write-good](https://github.com/btford/write-good):
  [write-good-linter](https://www.npmjs.com/package/write-good-linter)
- [languagetool](https://languagetool.org/):
  [coc-ltex](https://www.npmjs.com/package/coc-ltex)
- [latexindent](https://github.com/cmhughes/latexindent.pl):
  [coc-texlab](https://github.com/fannheyward/coc-texlab)
- [perltidy](https://github.com/perltidy/perltidy):
  [Perl-LanguageServer](https://github.com/richterger/Perl-LanguageServer),
  [PerlNavigator](https://github.com/bscan/PerlNavigator),
  [coc-perl](https://github.com/perl-ide/coc-perl)
- [shellcheck](https://github.com/koalaman/shellcheck),
  [shfmt](https://github.com/patrickvane/shfmt):
  [coc-sh](https://github.com/josa42/coc-sh)
- [vint](https://github.com/Vimjas/vint):
  [vim-language-server](https://github.com/iamcco/vim-language-server),
  [coc-vimlsp](https://github.com/iamcco/coc-vimlsp).
  wait [this PR](https://github.com/iamcco/vim-language-server/pull/99)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli):
  [coc-markdownlint](https://github.com/fannheyward/coc-markdownlint)
- [prettier](https://prettier.io/):
  [coc-prettier](https://github.com/neoclide/coc-prettier)
- [biome](https://github.com/biomejs/biome):
  `biome lsp-proxy`, [coc-biome](https://github.com/fannheyward/coc-biome)
- [ruff](https://github.com/astral-sh/ruff):
  `ruff server`, [coc-ruff](https://github.com/yaegassy/coc-ruff)
- sort (ruff, pyright, isort),
  linter (bandit, flake8, mypy, ruff, prospector, pycodestyle, pydocstyle,
  pyflakes, pylama, pylint, pytype),
  formatter (ruff, yapf, black, autopep8, darker, blackd, pyink):
  [coc-pyright](https://github.com/fannheyward/coc-pyright)
- [py-doq](https://github.com/heavenshell/py-doq):
  [coc-pydocstring](https://github.com/yaegassy/coc-pydocstring)
- [typstyle](https://github.com/Enter-tainer/typstyle),
  [typstfmt](https://github.com/astrale-sharp/typstfmt):
  [tinymist](https://github.com/Myriad-Dreamin/tinymist)
- [clang-format](https://clang.llvm.org/docs/ClangFormat.html):
  [clangd](https://github.com/clangd/clangd),
  [coc-clangd](https://github.com/clangd/coc-clangd)
- [nixfmt](https://github.com/NixOS/nixfmt):
  [nixd](https://github.com/nix-community/nixd),
  [coc-nix](https://www.npmjs.com/package/coc-nix)
- [rubocop](https://rubygems.org/gems/rubocop):
  [ruby-lsp](https://github.com/Shopify/ruby-lsp),
  [solargraph](https://github.com/castwide/solargraph)
- [cmake_format](https://github.com/cheshirekow/cmake_format):
  [cmake-language-server](https://github.com/regen100/cmake-language-server),
  [coc-cmake](https://www.npmjs.com/package/coc-cmake)
- `neocmakelsp format`:
  [neocmakelsp](https://github.com/Decodetalkers/neocmakelsp),
  [coc-cmake](https://www.npmjs.com/package/coc-cmake)
- `muon analyze`, `muon fmt`:
  [mesonlsp](https://github.com/JCWasmx86/mesonlsp),
  [coc-meson](https://www.npmjs.com/package/coc-meson)
- [oelint-adv](https://github.com/priv-kweihmann/oelint-adv):
  [bitbake-language-server](https://github.com/Freed-Wu/bitbake-language-server)

### Buy Me A Coffee ☕️

![btc](https://img.shields.io/keybase/btc/iamcco.svg?style=popout-square)

![image](https://user-images.githubusercontent.com/5492542/42771079-962216b0-8958-11e8-81c0-520363ce1059.png)
