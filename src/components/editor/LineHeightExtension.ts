'use client';

import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    lineHeight: {
      setLineHeight: (lineHeight: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    };
  }
}

const LineHeight = Extension.create({
  name: 'lineHeight',

  addOptions() {
    return {
      types: ['paragraph', 'heading'],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (element) => element.style.lineHeight || null,
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) return {};
              return { style: `line-height: ${attributes.lineHeight}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setLineHeight:
        (lineHeight: string) =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let applied = false;

          state.doc.nodesBetween(from, to, (node, pos) => {
            if (this.options.types.includes(node.type.name)) {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight,
              });
              applied = true;
            }
          });

          if (applied && dispatch) {
            dispatch(tr);
          }

          return applied;
        },
      unsetLineHeight:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let applied = false;

          state.doc.nodesBetween(from, to, (node, pos) => {
            if (this.options.types.includes(node.type.name) && node.attrs.lineHeight) {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight: null,
              });
              applied = true;
            }
          });

          if (applied && dispatch) {
            dispatch(tr);
          }

          return applied;
        },
    };
  },
});

export default LineHeight;
