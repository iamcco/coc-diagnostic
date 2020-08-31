/*
 * linters wiki: https://github.com/iamcco/diagnostic-languageserver/wiki/Linters
 */
export const linters = {
  "eslint": {
    "command": "./node_modules/.bin/eslint",  // this will find local eslint first, if local eslint not found, it
    "rootPatterns": [
      ".git"
    ],
    "debounce": 100,
    "args": [
      "--stdin",
      "--stdin-filename",
      "%filepath",
      "--format",
      "json"
    ],
    "sourceName": "eslint",
    "parseJson": {
      "errorsRoot": "[0].messages",
      "line": "line",
      "column": "column",
      "endLine": "endLine",
      "endColumn": "endColumn",
      "message": "${message} [${ruleId}]",
      "security": "severity"
    },
    "securities": {
      "2": "error",
      "1": "warning"
    }
  },

  "shellcheck": {
    "command": "shellcheck",
    "debounce": 100,
    "args": [
      "--format",
      "json",
      "-"
    ],
    "sourceName": "shellcheck",
    "parseJson": {
      "line": "line",
      "column": "column",
      "endLine": "endLine",
      "endColumn": "endColumn",
      "message": "${message} [${code}]",
      "security": "level"
    },
    "securities": {
      "error": "error",
      "warning": "warning",
      "info": "info",
      "style": "hint"
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
      "[^:]+:(\\d+):(\\d+):\\s*(.*)(\\r|\\n)*$",
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
      "^\\d+?\\.\\)\\s+Line\\s+(\\d+),\\s+column\\s+(\\d+),\\s+([^\\n]+)\nMessage:\\s+(.*)(\\r|\\n)*$",
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
      "^.*?:\\s+(\\d+):\\s+(.*)(\\r|\\n)*$",
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
      "^.*:(\\d+):(\\d+):\\s+(.*)\\s+-\\s+(.*)(\\r|\\n)*$",
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
      "^[^ ]+?:([0-9]+)(:([0-9]+))?:\\s+([^ ]+):\\s+(.*)(\\r|\\n)*$",
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
      "^([^ ]+)\\s+\\(([^)]+)\\)\\s+([^ ]+?):([0-9]+):\\s+(.*)(\\r|\\n)*$",
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
    "rootPatterns": [
      ".git"
    ],
    "debounce": 100,
    "args": [
      "--formatter",
      "json",
      "--stdin-filename",
      "%filepath"
    ],
    "sourceName": "stylelint",
    "parseJson": {
      "errorsRoot": "[0].warnings",
      "line": "line",
      "column": "column",
      "message": "${text}",
      "security": "severity"
    },
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
      "^\\s*<\\w+>:(\\d+):(\\d+):\\s+(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "message": 3
      }
    ]
  },

  "hadolint": {
    "command": "hadolint",
    "sourceName": "hadolint",
    "args": [
      "-f",
      "json",
      "-"
    ],
    "parseJson": {
      "line": "line",
      "column": "column",
      "security": "level",
      "message": "${message} [${code}]"
    },
    "securities": {
      "error": "error",
      "warning": "warning",
      "info": "info",
      "style": "hint"
    }
  },

  "golangci-lint": {
    "command": "golangci-lint",
    "rootPatterns": [ ".git", "go.mod" ],
    "debounce": 100,
    "args": [ "run", "--out-format", "json" ],
    "sourceName": "golangci-lint",
    "parseJson": {
      "sourceName": "Pos.Filename",
      "sourceNameFilter": true,
      "errorsRoot": "Issues",
      "line": "Pos.Line",
      "column": "Pos.Column",
      "message": "${Text} [${FromLinter}]",
    },
  },

  "revive": {
    "command": "revive",
    "rootPatterns": [ ".git", "go.mod" ],
    "debounce": 100,
    "args": [ "%file" ],
    "sourceName": "revive",
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "message": [3]
      }
    ]
  },

  "phpstan": {
    "command": "./vendor/bin/phpstan",
    "debounce": 100,
    "rootPatterns": [ "composer.json", "composer.lock", "vendor", ".git" ],
    "args": [ "analyze", "--error-format", "raw", "--no-progress", "%file" ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "phpstan",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "message": 2,
      },
    ],
  },

  "psalm": {
    "command": "./vendor/bin/psalm",
    "debounce": 100,
    "rootPatterns": ["composer.json", "composer.lock", "vendor", ".git"],
    "args": ["--output-format=emacs", "--no-progress"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "psalm",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d):(\\d):(.*)\\s-\\s(.*)(\\r|\\n)*$",
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
    },
    "requiredFiles": ["psalm.xml"]
  },

  "tidy": {
    "command": "tidy",
    "args": ["-e", "-q"],
    "rootPatterns": [".git/"],
    "isStderr": true,
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "tidy",
    "formatLines": 1,
    "formatPattern": [
      "^.*?(\\d+).*?(\\d+)\\s+-\\s+([^:]+):\\s+(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "endLine": 1,
        "endColumn": 2,
        "message": [4],
        "security": 3
      }
    ],
    "securities": {
      "Error": "error",
      "Warning": "warning"
    }
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
  },

  "lua-format": {
    "command": "lua-format",
    "args": ["-i"]
  },

  "shfmt": {
    "command": "shfmt"
  },

  "tffmt": {
    "command": "terraform",
    "args": ["fmt", "-"]
  },

  "blade-formatter": {
    "command": "blade-formatter",
    "args": ["--stdin"]
  }
}
