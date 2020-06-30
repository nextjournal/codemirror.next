import {EditorState, EditorView, basicSetup} from "@codemirror/next/basic-setup"
import {clojure} from "../lang-clojure/src/clojure"

//import {esLint} from "@codemirror/next/lang-javascript"
// @ts-ignore
//import Linter from "eslint4b-prebuilt"
//import {linter} from "@codemirror/next/lint"

//import {StreamSyntax} from "@codemirror/next/stream-syntax"
//import legacyJS from "@codemirror/next/legacy-modes/src/javascript"

let state = EditorState.create({doc: `(defn lezer-clojure
  "This is a showcase for \`lezer-clojure\`, an grammar for Clojure/Script to
  enable a decent editor experience in the browser."
  {:added "0.1"}
  [demo]
  nil ;; nil
  (+ 1 1.0 1/5 1E3 042 +042 -042) ;; numbers
  :hi :hi/ho ::ho :*+!-_? :abc:def:ghi ;; keywords
  true false ;; booleans
  :hello #_ :ignored ;; ignore next form
  #"[A-Z]" ;; regex
  ^{:meta/data 'is-data} 'too
  (if (test? demo)
    (inc demo)
    (dec demo)))
`, extensions: [
  basicSetup,
  clojure()
//  linter(esLint(new Linter)),
//  new StreamSyntax(legacyJS()).extension,
]})

;(window as any).view = new EditorView({state, parent: document.querySelector("#editor")!})
