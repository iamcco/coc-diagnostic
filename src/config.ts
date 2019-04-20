/*
 * linters wiki: https://github.com/iamcco/diagnostic-languageserver/wiki/Linters
 */
export const linters = {
  "eslint": {
    "command": "./node_modules/.bin/eslint",   // this will find local eslint first, if local eslint not found, it will use global eslint
    "rootPatterns": [".git"],
    "debounce": 100,
    "args": [ "--stdin", "--no-color" ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "eslint",
    "formatLines": 1,
    "formatPattern": [
      "^\\s*(\\d+):(\\d+)\\s+([^ ]+)\\s+(.*?)\\s+([^ ]+)$",
      {
        "line": 1,
        "column": 2,
        "message": [4, " [", 5, "]" ],
        "security": 3
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    }
  },

  "shellcheck": {
    "command": "shellcheck",
    "debounce": 100,
    "args": [ "--format=gcc", "-"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "shellcheck",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):\\s+([^:]+):\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "message": 4,
        "security": 3
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning",
      "note": "info"
    }
  },

  "write-good": {
    "command": "write-good",
    "debounce": 100,
    "args": [ "--text=%text" ],
    "offsetLine": 0,
    "offsetColumn": 1,
    "sourceName": "write-good",
    "formatLines": 1,
    "formatPattern": [
      "(.*)\\s+on\\s+line\\s+(\\d+)\\s+at\\s+column\\s+(\\d+)\\s*$",
      {
        "line": 2,
        "column": 3,
        "message": 1
      }
    ]
  },

  "vint": {
    "command": "vint",
    "debounce": 100,
    "args": [ "--enable-neovim", "-"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "vint",
    "formatLines": 1,
    "formatPattern": [
      "[^:]+:(\\d+):(\\d+):\\s*(.*$)",
      {
        "line": 1,
        "column": 2,
        "message": 3
      }
    ]
  },

  "languagetool": {
    "command": "languagetool",
    "debounce": 200,
    "args": ["-"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "languagetool",
    "formatLines": 2,
    "formatPattern": [
      "^\\d+?\\.\\)\\s+Line\\s+(\\d+),\\s+column\\s+(\\d+),\\s+([^\\n]+)\nMessage:\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "message": [4, 3]
      }
    ],
  },

  "markdownlint": {
    "command": "markdownlint",
    "isStderr": true,
    "debounce": 100,
    "args": [ "--stdin" ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "markdownlint",
    "formatLines": 1,
    "formatPattern": [
      "^.*?:\\s+(\\d+):\\s+(.*)$",
      {
        "line": 1,
        "column": -1,
        "message": 2
      }
    ]
  },

  "phpcs": {
    "command": "./vendor/bin/phpcs",
    "debounce": 100,
    "rootPatterns": [ "composer.json", "composer.lock", "vendor", ".git" ],
    "args": [ "--standard=PSR2", "--report=emacs", "-s", "-" ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "phpcs",
    "formatLines": 1,
    "formatPattern": [
      "^.*:(\\d+):(\\d+):\\s+(.*)\\s+-\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "message": 4,
        "security": 3
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    }
  }
}

export const formatters = {
  "dartfmt": {
    "command": "dartfmt",
    "args": [ "--fix" ]
  }
}
