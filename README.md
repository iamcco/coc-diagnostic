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
    ...
  },
  "diagnostic-languageserver.formatFiletypes": {
    "dart": "dartfmt",
    "elixir": "mix_format",
    "eelixir": "mix_format",
    "lua": "lua-format",
    "sh": "shfmt",
    "blade": "blade-formatter",
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

### Buy Me A Coffee ☕️

![btc](https://img.shields.io/keybase/btc/iamcco.svg?style=popout-square)

![image](https://user-images.githubusercontent.com/5492542/42771079-962216b0-8958-11e8-81c0-520363ce1059.png)
