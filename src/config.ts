/*
 * linters wiki: https://github.com/iamcco/diagnostic-languageserver/wiki/Linters
 */
export const linters = {
  "eslint": {
    "command": "./node_modules/.bin/eslint",  // this will find local eslint first, if local eslint not found, it
    "rootPatterns": [
      ".eslintrc.js",
      ".eslintrc.cjs",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      ".eslintrc.json",
      "package.json"
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
      "json1",
      "-"
    ],
    "sourceName": "shellcheck",
    "parseJson": {
      "errorsRoot": "comments",
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

  "shfmt": {
    "command": "shfmt",
    "args": ["-w", "%file"],
    "isStdout": false,
    "isStderr": true,
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "shfmt",
    "formatLines": 1,
    "formatPattern": [
      ".*?:(\\d+):(\\d+): (.*)",
      {
        "line": 1,
        "column": 2,
        "message": 3
      }
    ]
  },

  "syntest": {
    "command": "syntest",
    "args": ["%file", "."],
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "syntest",
    "formatLines": 1,
    "formatPattern": [
      "Assertion selector \"[^\"]+\" from line (\\d+) failed against line \\d+, column range (\\d+)-(\\d+) \\(with text \"[^\"]+\"\\) has scope \\[([^\\]]+)\\]",
      {
        "line": 1,
        "column": 2,
        "endColumn": 3,
        "message": 4
      }
    ]
  },

  "lacheck": {
    "command": "lacheck",
    "args": ["%file"],
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "lacheck",
    "formatLines": 1,
    "formatPattern": [
      "\"[^\"]+\", line (\\d+):\\s*(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "securities": {
      "undefined": "warning"
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

  "alex": {
    "command": "alex",
    "debounce": 100,
    "args": ["%file"],
    "isStdout": false,
    "isStderr": true,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "alex",
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "warning": "warning"
    }
  },

  "alex-text": {
    "command": "alex",
    "debounce": 100,
    "args": ["-t", "%file"],
    "isStdout": false,
    "isStderr": true,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "alex",
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "warning": "warning"
    }
  },

  "alex-html": {
    "command": "alex",
    "debounce": 100,
    "args": ["-l", "%file"],
    "isStdout": false,
    "isStderr": true,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "alex",
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "warning": "warning"
    }
  },

  "jq": {
    "command": "jq",
    "args": ["-nf", "%file"],
    "isStdout": false,
    "isStderr": true,
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "jq",
    "formatLines": 1,
    "formatPattern": [
      "^jq: (error): syntax error, (.*) at <.*>, line (\\d+):$",
      {
        "security": 1,
        "message": 2,
        "line": 3
      }
    ]
  },

  "vint": {
    "command": "vint",
    "debounce": 100,
    "args": ["-f", "{file_path}:{line_number}:{column_number}: {severity}! {description}", "-"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "vint",
    "formatLines": 1,
    "formatPattern": [
      "[^:]+:(\\d+):(\\d+):\\s*([^!]*)! (.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning",
      "style_problem": "info"
    }
  },

  "pip-compile": {
    "command": "pip-compile",
    "args": ["-n", "%file"],
    "isStdout": false,
    "isStderr": true,
    "debounce": 100,
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "pip-compile",
    "formatLines": 1,
    "formatPattern": [
      "(Could not find a version that matches \\S+) \\(from -r ([^(]+) \\(line (\\d+)\\)\\)",
      {
        "message": 1,
        "errorsRoot": 2,
        "line": 3
      }
    ]
  },

  "languagetool": {
    "command": "languagetool",
    "debounce": 200,
    "args": ["%file"],
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
      "^.*?:\\s?(\\d+)(:(\\d+)?)?\\s(MD\\d{3}\\/[A-Za-z0-9-/]+)\\s(.*)$",
      {
        "line": 1,
        "column": 3,
        "message": [4]
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

  "perl": {
    "args": ["-w", "%file"],
    "command": "perl",
    "isStderr": true,
    "isStdout": false,
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^(.*) at .* line (\\d+)(.)(.*)$",
      {
        "message": [1, 4],
        "line": 2,
        "security": "3"
      }
    ],
    "securities": {
      ",": "error",
      ".": "warning"
    },
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "perl"
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
    "args": ["--output-format=emacs", "--no-progress", "%file"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "psalm",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):(.*)\\s-\\s(.*)(\\r|\\n)*$",
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
  },

  "nix-linter": {
    "command": "nix-linter",
    "sourceName": "nix-linter",
    "debounce": 100,
    "parseJson": {
      "line": "pos.spanBegin.sourceLine",
      "column": "pos.spanBegin.sourceColumn",
      "endLine": "pos.spanEnd.sourceLine",
      "endColumn": "pos.spanEnd.sourceColumn",
      "message": "${description}"
    },
    "securities": {
      "undefined": "warning"
    }
  },

  "yamllint": {
    "args": [ "-f", "parsable", "-" ],
    "command": "yamllint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*?:(\\d+):(\\d+): \\[(.*?)] (.*) \\((.*)\\)",
      {
        "line": 1,
        "endLine": 1,
        "column": 2,
        "endColumn": 2,
        "message": 4,
        "code": 5,
        "security": 3
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    },
    "sourceName": "yamllint"
  },

  "fish": {
    "command": "fish",
    "args": ["-n", "%file"],
    "isStdout": false,
    "isStderr": true,
    "sourceName": "fish",
    "formatLines": 1,
    "formatPattern": [
      "^.*\\(line (\\d+)\\): (.*)$",
      {
        "line": 1,
        "message": 2
      }
    ]
  },

  "textidote": {
    "command": "textidote",
    "debounce": 500,
    "args": ["--type", "tex", "--check", "en", "--output", "singleline", "--no-color"],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "textidote",
    "formatLines": 1,
    "formatPattern": [
      "\\(L(\\d+)C(\\d+)-L(\\d+)C(\\d+)\\):(.+)\".+\"$",
      {
        "line": 1,
        "column": 2,
        "endLine": 3,
        "endColumn": 4,
        "message": 5
      }
    ],
  },

  "hlint": {
    "command": "hlint",
    "debounce": 100,
    "args": ["--json", "-"],
    "sourceName": "hlint",
    "parseJson": {
      "line": "startLine",
      "column": "startColumn",
      "endLine": "endLine",
      "endColumn": "endColumn",
      "message": "${hint}",
      "security": "severity"
    },
    "securities": {
      "Error": "error",
      "Warning": "warning",
      "Suggestion": "info"
    }
  },

  "pylint": {
    "sourceName": "pylint",
    "command": "pylint",
    "debounce": 500,
    "args": [
      "-f",
      "json",
      "--from-stdin",
      "%filename"
    ],
    "parseJson": {
      "line": "line",
      "column": "column",
      "endLine": "endLine",
      "endColumn": "endColumn",
      "message": "${message-id}: ${message} (${symbol})",
      "security": "type"
    },
    "rootPatterns": [".git", "pyproject.toml", "setup.py"],
    "securities": {
      "informational": "hint",
      "refactor": "info",
      "convention": "info",
      "warning": "warning",
      "error": "error",
      "fatal": "error"
    },
    "offsetColumn": 1,
  },

  "mypy": {
    "sourceName": "mypy",
    "command": "mypy",
    "args": [
      "--no-color-output",
      "--no-error-summary",
      "--show-column-numbers",
      "--follow-imports=silent",
      "%file"
    ],
    "rootPatterns": [
      "mypy.ini",
      ".mypy.ini",
      "setup.cfg"
    ],
    "formatPattern": [
      "^.*:(\\d+?):(\\d+?): ([a-z]+?): (.*)$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "error": "error"
    }
  },

  "cpplint": {
    "command": "cpplint",
    "args": ["%file"],
    "debounce": 100,
    "isStderr": true,
    "isStdout": false,
    "sourceName": "cpplint",
    "offsetLine": 0,
    "offsetColumn": 0,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+)?\\s+(.+?)\\s\\[(\\d)\\]$",
      {
        "line": 1,
        "column": 2,
        "message": 3,
        "security": 4
      }
    ],
    "securities": {
      "1": "info",
      "2": "warning",
      "3": "warning",
      "4": "error",
      "5": "error"
    }
  },

  "cppcheck": {
    "command": "cppcheck",
    "args": [
      "--enable=all",
      "--suppress=missingIncludeSystem",
      "--addon=cert",
      "--addon=y2038",
      "--addon=threadsafety",
      "--library=googletest",
      "--inline-suppr",
      "%file"
    ],
    "debounce": 100,
    "isStderr": true,
    "isStdout": false,
    "sourceName": "cppcheck",
    "offsetLine": 0,
    "offsetColumn": 0,
    "formatPattern": [
      "^[^:]+:([1-9]\\d*):(\\d+):\\s+([^:]+):\\s+(.+?)$",
      {
        "line": 1,
        "column": 2,
        "message": 4,
        "security": 3
      }
    ],
    "securities": {
      "information": "info",
      "portability": "warning",
      "performance": "warning",
      "style": "warning",
      "warning": "warning",
      "error": "error"
    }
  },

  "xo": {
    "command": "./node_modules/.bin/xo",
    "rootPatterns": [
      "package.json",
      ".git"
    ],
    "debounce": 100,
    "args": [
      "--reporter",
      "json",
      "--stdin",
      "--stdin-filename",
      "%filepath"
    ],
    "sourceName": "xo",
    "parseJson": {
      "errorsRoot": "[0].messages",
      "line": "line",
      "column": "column",
      "endLine": "endLine",
      "endColumn": "endColumn",
      "message": "[xo] ${message} [${ruleId}]",
      "security": "severity"
    },
    "securities": {
      "2": "error",
      "1": "warning"
    }
  },

  "flake8": {
    "command": "flake8",
    "debounce": 100,
    "args": [ "--format=%(row)d,%(col)d,%(code).1s,%(code)s: %(text)s", "-" ],
    "rootPatterns": [
      ".flake8",
      "setup.cfg",
      "tox.ini"
    ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "flake8",
    "formatLines": 1,
    "formatPattern": [
      "(\\d+),(\\d+),([A-Z]),(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "column": 2,
        "security": 3,
        "message": 4
      }
    ],
    "securities": {
      "W": "warning",
      "E": "error",
      "F": "error",
      "C": "error",
      "N": "error"
    }
  },

  "ansibleLint": {
    "command": "ansible-lint",
    "args": ["--parseable-severity", "--nocolor", "-"],
    "sourceName": "ansibleLint",
    "formatPattern": [
      "^[^:]+:(\\d+):\\s\\[\\w+\\]\\s\\[(\\w+)\\]\\s(.*)$",
      {
        "line": 1,
        "security": 2,
        "message": 3
      }
    ],
    "securities": {
      "VERY_LOW": "hint",
      "LOW": "info",
      "HIGH": "warning",
      "VERY_HIGH": "error"
    }
  },

  "proselint": {
    "command": "proselint",
    "debounce": 300,
    "args": [ "-j" ],
    "sourceName": "proselint",
    "parseJson": {
      "errorsRoot": "data.errors",
      "line": "line",
      "column": "column",
      "message": "${message}",
      "security": "severity"
    },
    "securities": {
      "error": "error",
      "warning": "warning",
      "info": "suggestion"
    }
  },

  "luacheck": {
    "command": "luacheck",
    "args": [
      "--formatter",
      "plain",
      "--codes",
      "--ranges",
      "--filename",
      "%filepath",
      "-"
    ],
    "sourceName": "luacheck",
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+)-(\\d+):\\s+\\((\\w)\\d+\\)\\s+(.*)$",
      {
        "line": 1,
        "column": 2,
        "endLine": 1,
        "endColumn": 3,
        "security": 4,
        "message": 5
      }
    ],
    "rootPatterns": [
      ".luacheckrc",
      ".git"
    ],
    "debounce": 100,
    "securities": {
      "W": "warning",
      "E": "error"
    }
  },

  "cmakelint": {
    "command": "cmakelint",
    "debounce": 100,
    "args": [
      "%filepath"
    ],
    "offsetLine": 0,
    "offsetColumn": 1,
    "sourceName": "cmakelint",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+): (.*)$",
      {
        "line": 1,
        "message": 2
      }
    ]
  },

  "cmake-lint": {
    "command": "cmake-lint",
    "debounce": 100,
    "args": [
      "%filepath"
    ],
    "offsetLine": 0,
    "offsetColumn": 1,
    "sourceName": "cmakelint",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+)(,(\\d+))?: (\\[(.).*)$",
      {
        "line": 1,
        "column": 3,
        "message": 4,
        "security": 5
      }
    ],
    "securities": {
      "C": "info",
      "R": "info",
      "W": "warning",
      "E": "error"
    }
  },

  "systemd-analyze": {
    "command": "systemd-analyze",
    "debounce": 100,
    "args": [
      "verify",
      "%filepath"
    ],
    "isStdout": false,
    "isStderr": true,
    "sourceName": "systemd-analyze",
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:((\\d+):)?\\s*(.*)$",
      {
        "line": 2,
        "message": 3
      }
    ]
  },

  "protolint": {
    "command": "protolint",
    "debounce": 100,
    "args": [ "-reporter", "json", "%filepath" ],
    "offsetLine": 0,
    "offsetColumn": 0,
    "sourceName": "protolint",
    "formatLines": 1,
    "isStderr": true,
    "isStdout": false,
    "parseJson": {
      "errorsRoot": "lints",
      "line": "line",
      "column": "column",
      "message": "${message} [${rule}]"
    }
  },

  "bash": {
    "args": ["-n", "%file"],
    "command": "bash",
    "isStderr": true,
    "isStdout": false,
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*: line (\\d+): (syntax error near unexpected token .*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "bash"
  },

  "zsh": {
    "args": ["-n", "%file"],
    "command": "zsh",
    "isStderr": true,
    "isStdout": false,
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*:(\\d+): (parse error near .*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "zsh"
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
    "command": "shfmt",
    "args": ["-filename", "%filepath"]
  },

  "tffmt": {
    "command": "terraform",
    "args": ["fmt", "-"]
  },

  "blade-formatter": {
    "command": "blade-formatter",
    "args": ["--stdin"]
  },

  "nixfmt": {
    "command": "nixfmt"
  },

  "fish_indent": {
    "command": "fish_indent"
  },

  "prettier": {
    "command": "./node_modules/.bin/prettier",
    "args": ["--stdin", "--stdin-filepath", "%filepath"],
    "rootPatterns": [
      ".prettierrc",
      ".prettierrc.json",
      ".prettierrc.toml",
      ".prettierrc.json",
      ".prettierrc.yml",
      ".prettierrc.yaml",
      ".prettierrc.json5",
      ".prettierrc.js",
      ".prettierrc.cjs",
      "prettier.config.js",
      "prettier.config.cjs"
    ]
  },

  "prettier_eslint": {
    "command": "./node_modules/.bin/prettier-eslint",
    "args": ["--stdin"],
    "rootPatterns": [".git"]
  },

  "xo": {
    "command": "./node_modules/.bin/xo",
    "args": ["--fix", "--stdin", "--stdin-filename", "%filepath"],
    "rootPatterns": ["package.json"]
  },

  "black": {
    "command": "black",
    "args": ["--quiet", "-"]
  },

  "autopep8": {
    "command": "autopep8",
    "args": ["-"]
  },

  "yapf": {
    "command": "yapf",
    "args": ["--quiet"]
  },

  "isort": {
    "command": "isort",
    "args": ["--quiet", "-"]
  },

  "gofmt": {
    "command": "gofmt",
    "args": ["-s"]
  },

  "cmake-format": {
    "command": "cmake-format",
    "args": ["-i"]
  }
}

