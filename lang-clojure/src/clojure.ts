import {parser} from "lezer-clojure"
import {indentNodeProp, foldNodeProp, LezerSyntax} from "@codemirror/next/syntax"
import {Extension} from "@codemirror/next/state"
import {Subtree} from "lezer-tree"
import {styleTags} from "@codemirror/next/highlight"

/// A syntax provider based on the [Lezer Clojure
/// parser](#unreleased), extended with
/// highlighting and indentation information.
export const clojureSyntax = new LezerSyntax(parser.withProps(
  indentNodeProp.add({
  }),
  foldNodeProp.add({
    Vector(tree: Subtree) { return {from: tree.start + 1, to: tree.end - 1} },
    Map(tree: Subtree) { return {from: tree.start + 1, to: tree.end - 1} },
    Set(tree: Subtree) { return {from: tree.start + 1, to: tree.end - 1} },
    List(tree: Subtree) { return {from: tree.start + 1, to: tree.end - 1} },
    
  }),
  styleTags({
    "def defn": "keyword control",
    Comment: "lineComment",
    Number: "number",
    String: "string",
    Keyword: "atom",
    Nil: "null",
    Symbol: "labelName",
    LineComment: "lineComment",
    RegExp: "regexp",
  })
), {
  languageData: {
    closeBrackets: {brackets: ["(", "[", "{", "'", '"', "'''", '"""']},
    commentTokens: {line: ";;"}
  }
})

/// Returns an extension that installs the Clojure syntax provider.
export function clojure(): Extension {
  return clojureSyntax
}
