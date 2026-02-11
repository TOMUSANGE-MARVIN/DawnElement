'use client';

import Image from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ResizableImage from './ResizableImage';

const ResizableImageExtension = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (element) => {
          const wrapper = element.closest('div[data-image-wrapper]');
          return wrapper?.getAttribute('data-width') ||
            element.getAttribute('data-width') ||
            element.style.width?.replace('px', '') ||
            null;
        },
        renderHTML: (attributes) => {
          if (!attributes.width) return {};
          return { 'data-width': attributes.width };
        },
      },
      align: {
        default: 'center',
        parseHTML: (element) => {
          const wrapper = element.closest('div[data-image-wrapper]');
          return wrapper?.getAttribute('data-align') ||
            element.getAttribute('data-align') ||
            'center';
        },
        renderHTML: (attributes) => ({
          'data-align': attributes.align || 'center',
        }),
      },
      float: {
        default: 'none',
        parseHTML: (element) => {
          const wrapper = element.closest('div[data-image-wrapper]');
          return wrapper?.getAttribute('data-float') ||
            element.getAttribute('data-float') ||
            'none';
        },
        renderHTML: (attributes) => ({
          'data-float': attributes.float || 'none',
        }),
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    const width = HTMLAttributes['data-width'];
    const align = HTMLAttributes['data-align'] || 'center';
    const float = HTMLAttributes['data-float'] || 'none';

    const wrapperStyles: string[] = [];
    const imgStyles: string[] = ['max-width: 100%', 'height: auto', 'border-radius: 0.75rem'];

    if (width) {
      imgStyles.push(`width: ${width}px`);
    }

    if (float === 'left') {
      wrapperStyles.push('float: left', 'margin-right: 1.5rem', 'margin-bottom: 1rem');
      if (width) wrapperStyles.push(`width: ${width}px`);
    } else if (float === 'right') {
      wrapperStyles.push('float: right', 'margin-left: 1.5rem', 'margin-bottom: 1rem');
      if (width) wrapperStyles.push(`width: ${width}px`);
    } else {
      // Use flexbox for alignment - works even when prose forces display:block on img
      wrapperStyles.push('display: flex');
      if (align === 'left') {
        wrapperStyles.push('justify-content: flex-start');
      } else if (align === 'right') {
        wrapperStyles.push('justify-content: flex-end');
      } else {
        wrapperStyles.push('justify-content: center');
      }
    }

    wrapperStyles.push('margin-top: 1rem', 'margin-bottom: 1rem');

    // Clean img attributes - remove data attrs that belong on the wrapper
    const imgAttrs = { ...HTMLAttributes };
    delete imgAttrs['data-width'];
    delete imgAttrs['data-align'];
    delete imgAttrs['data-float'];
    // Remove any class that might have mx-auto or conflicting centering
    delete imgAttrs['class'];
    imgAttrs.style = imgStyles.join('; ');

    return [
      'div',
      {
        'data-image-wrapper': '',
        'data-align': align,
        'data-float': float,
        'data-width': width || '',
        style: wrapperStyles.join('; '),
      },
      ['img', imgAttrs],
    ];
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-image-wrapper] img',
        getAttrs: (element) => {
          const el = element as HTMLImageElement;
          const wrapper = el.closest('div[data-image-wrapper]');
          return {
            src: el.getAttribute('src'),
            alt: el.getAttribute('alt'),
            title: el.getAttribute('title'),
            width: wrapper?.getAttribute('data-width') || null,
            align: wrapper?.getAttribute('data-align') || 'center',
            float: wrapper?.getAttribute('data-float') || 'none',
          };
        },
      },
      {
        tag: 'img[src]',
        getAttrs: (element) => {
          const el = element as HTMLImageElement;
          return {
            src: el.getAttribute('src'),
            alt: el.getAttribute('alt'),
            title: el.getAttribute('title'),
            width: el.getAttribute('data-width') || null,
            align: el.getAttribute('data-align') || 'center',
            float: el.getAttribute('data-float') || 'none',
          };
        },
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImage);
  },
});

export default ResizableImageExtension;
