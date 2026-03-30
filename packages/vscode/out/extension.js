"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const completion_1 = require("./completion");
const EmdDefinitionProvide_1 = require("./EmdDefinitionProvide");
const formatter_1 = require("./formatter");
const checkers_1 = require("./checkers");
const tools_1 = require("./tools");
const EmdRenameProvider_1 = require("./EmdRenameProvider");
const EmdQuoteFixProvider_1 = require("./EmdQuoteFixProvider");
const commands_1 = require("./commands");
function activate(context) {
    const fileType = "emd";
    const collections = vscode.languages.createDiagnosticCollection("emd");
    const provider = vscode.languages.registerCompletionItemProvider(fileType, {
        provideCompletionItems: completion_1.provideCompletionItems,
    }, "{");
    vscode.languages.registerDocumentFormattingEditProvider(fileType, {
        provideDocumentFormattingEdits: formatter_1.provideDocumentFormattingEdits,
    });
    const definitionProvider = vscode.languages.registerDefinitionProvider(fileType, new EmdDefinitionProvide_1.EmdDefinitionProvider());
    const renameProvider = vscode.languages.registerRenameProvider("emd", new EmdRenameProvider_1.EmdRenameProvider());
    vscode.workspace.textDocuments.forEach(check);
    const onNewOpenedDocument = vscode.workspace.onDidOpenTextDocument(check);
    const onChangedDocument = vscode.workspace.onDidChangeTextDocument((e) => check(e.document));
    const onClosed = vscode.workspace.onDidCloseTextDocument((doc) => collections.delete(doc.uri));
    const quoteFixProvider = vscode.languages.registerCodeActionsProvider("emd", new EmdQuoteFixProvider_1.EmdQuoteFixProvider(), {
        providedCodeActionKinds: EmdQuoteFixProvider_1.EmdQuoteFixProvider.providedCodeActionKinds,
    });
    context.subscriptions.push(vscode.commands.registerCommand("emd.fixQuotes", commands_1.fixQuotes));
    context.subscriptions.push(provider, definitionProvider, collections, onNewOpenedDocument, onChangedDocument, renameProvider, onClosed, quoteFixProvider);
    function check(document) {
        let diagnostics = [];
        if (document.languageId !== "emd")
            return;
        const text = document.getText();
        const { fmData } = (0, tools_1.getVariables)(document);
        if (fmData?.variables) {
            diagnostics.push(...(0, checkers_1.checkUnrecognizedVariable)(text, document, fmData.variables));
        }
        collections.set(document.uri, diagnostics);
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map