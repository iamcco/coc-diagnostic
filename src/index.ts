import {resolve} from 'path';
import {
  ExtensionContext,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
  workspace,
  services
} from 'coc.nvim';

import {
  linters as defaultLinters,
  formatters as defaultFormatters
} from './config';

import * as _ from "lodash";

export function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration('diagnostic-languageserver')
  const isEnable = config.get<boolean>('enable', true)
  // extension is disable
  if (!isEnable) {
    return
  }
  const filetypes = config.get<Record<string, string>>('filetypes', {})
  const formatFiletypes = config.get<Record<string, string>>('formatFiletypes', {})
  const documentSelector = Object.keys({
    ...filetypes,
    ...formatFiletypes
  })
  // no file types enable
  if (documentSelector.length === 0) {
    return
  }
  const linters = config.get<Record<string, string>>('linters', {})
  const formatters = config.get<Record<string, string>>('formatters', {})
  const isEnableDebug = config.get<boolean>('debug', false)
  // The server is implemented in node
  let serverModule = resolve(context.extensionPath, 'out', 'server')

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  let serverOptions: ServerOptions = {
    run : {
      module: serverModule,
      transport: TransportKind.ipc
    },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc
    }
  }

  // The debug options for the server
  if (isEnableDebug) {
    serverOptions.debug.options = {
      execArgv: [
        "--nolazy",
        "--debug=6009"
      ]
    }
  }

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    // Register the server for Angular templates
    documentSelector,

    initializationOptions: {
      linters: _.merge(_.cloneDeep(defaultLinters), linters),
      filetypes,
      formatters: _.merge(_.cloneDeep(defaultFormatters), formatters),
      formatFiletypes
    }
  }

  // Create the language client and start the client.
  let client = new LanguageClient(
    'diagnostic-languageserver',
    'diagnostic language service',
    serverOptions,
    clientOptions
  );

  // Push the disposable to the context's subscriptions so that the
  // client can be deactivated on extension deactivation
  context.subscriptions.push(services.registLanguageClient(client));
}
