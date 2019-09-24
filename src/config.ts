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
  },

  "mix_credo": {
    "command": "mix",
    "debounce": 100,
    "rootPatterns": ["mix.exs"],
    "args": ["credo", "suggest", "--format", "flycheck", "--read-from-stdin"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "mix_credo",
    "formatLines": 1,
    "formatPattern": [
      "^[^ ]+?:([0-9]+)(:([0-9]+))?:\\s+([^ ]+):\\s+(.*)$",
      {
        "line": 1,
        "column": 3,
        "message": 5,
        "security": 4
      }
    ],
    "securities": {
      "F": "warning",
      "C": "warning",
      "D": "info",
      "R": "info"
    }
  },

  "mix_credo_compile": {
    "command": "mix",
    "debounce": 100,
    "rootPatterns": ["mix.exs"],
    "args": ["credo", "suggest", "--format", "flycheck", "--read-from-stdin"],
    "offsetLine": -1,
    "offsetColumn": 0,
    "sourceName": "mix_credo",
    "formatLines": 1,
    "formatPattern": [
      "^([^ ]+)\\s+\\(([^)]+)\\)\\s+([^ ]+?):([0-9]+):\\s+(.*)$",
      {
        "line": -1,
        "column": -1,
        "message": ["[", 2, "]: ", 3, ": ", 5],
        "security": 1
      }
    ],
    "securities": {
      "**": "error"
    }
  },

  "stylelint": {
    "command": "./node_modules/.bin/stylelint",
    "rootPatterns": [".git"],
    "isStdout": true,
    "isStderr": false,
    "debounce": 100,
    "args": [
      "--formatter",
      "unix",
      "--stdin-filename",
      "%filename"
    ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "stylelint",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):\\s(.+)\\s\\[(\\w+)\\]$",
      {
        "line": 1,
        "column": 2,
        "message": 3,
        "security": 4
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    }
  },

  "standard": {
    "command": "./node_modules/.bin/standard",
    "isStderr": false,
    "isStdout": true,
    "args": ["--stdin", "--verbose"],
    "rootPatterns": [".git"],
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "standard",
    "formatLines": 1,
    "formatPattern": [
      "^\\s*<\\w+>:(\\d+):(\\d+):\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "message": 3
      }
    ]
  }
}

export const formatters = {
  "dartfmt": {
    "command": "dartfmt",
    "args": [ "--fix" ]
  },

  "mix_format": {
    "command": "mix",
    "args": ["format", "-"],
  },

  "stylelint": {
    "command": "./node_modules/.bin/stylelint",
    "args": ["--fix"],
    "rootPatterns": [".git"],
    "isStderr": false,
    "isStdout": true
  },

  "standard": {
    "command": "./node_modules/.bin/standard",
    "args": ["--stdin", "--fix"],
    "rootPatterns": [".git"],
    "isStderr": false,
    "isStdout": true
  }
}
