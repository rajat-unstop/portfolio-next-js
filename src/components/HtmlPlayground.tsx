'use client';

import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

import { RESUME_CARD_TEMPLATE } from '@/data/playgroundTemplates';

const HtmlPlayground: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>(RESUME_CARD_TEMPLATE);

  const [debouncedHtml, setDebouncedHtml] = useState<string>(htmlCode);

  // Debounce the HTML update to avoid flashing on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHtml(htmlCode);
    }, 500);
    return () => clearTimeout(timer);
  }, [htmlCode]);

  return (
    <div className="flex h-full w-full border border-gray-200 rounded-lg overflow-hidden">
      {/* Left Side: Editor */}
      <div className="w-1/2 border-r border-gray-200 bg-transparent">
        <Editor
          height="100%"
          defaultLanguage="html"
          value={htmlCode}
          onChange={value => setHtmlCode(value || '')}
          theme="transparent-theme"
          beforeMount={monaco => {
            monaco.editor.defineTheme('transparent-theme', {
              base: 'vs-dark',
              inherit: true,
              rules: [{ background: '00000000' }],
              colors: {
                'editor.background': '#00000000',
                'minimap.background': '#00000000',
              },
            });
          }}
          onMount={(editor, monaco) => {
            // Function to attempt folding
            const foldStyle = () => {
              const model = editor.getModel();
              if (!model) return;

              // Find the <style> tag
              // isRegex: false, matchCase: false, wordSeparators: null, captureMatches: false, limitResultCount: 1
              const matches = model.findMatches('<style>', false, false, false, null, true);

              if (matches.length > 0) {
                const startLine = matches[0].range.startLineNumber;

                // Move cursor to the style line to ensure fold applies to this block
                editor.setPosition({ lineNumber: startLine, column: 1 });

                // Execute the fold action
                editor
                  .getAction('editor.fold')
                  ?.run()
                  .then(() => {
                    // Reset cursor to the top of the file
                    editor.setPosition({ lineNumber: 1, column: 1 });
                    // Scroll to top
                    editor.revealLine(1);
                  });
              }
            };

            // Wait for language services to compute folding regions
            setTimeout(foldStyle, 1000);
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            renderLineHighlight: 'none',
          }}
        />
      </div>

      {/* Right Side: Preview */}
      <div className="w-1/2 bg-white">
        <iframe
          srcDoc={debouncedHtml}
          title="preview"
          className="w-full h-full border-none"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
};

export default HtmlPlayground;
