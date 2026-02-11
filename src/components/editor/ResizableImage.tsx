'use client';

import { NodeViewWrapper, NodeViewProps } from '@tiptap/react';
import { useCallback, useRef, useState } from 'react';

export default function ResizableImage({ node, updateAttributes, selected }: NodeViewProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [resizing, setResizing] = useState(false);

  const align = node.attrs.align || 'center';
  const width = node.attrs.width;
  const floatStyle = node.attrs.float || 'none';

  const onResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setResizing(true);

    const startX = e.clientX;
    const startWidth = imgRef.current?.offsetWidth || 300;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const diff = moveEvent.clientX - startX;
      const newWidth = Math.max(100, startWidth + diff);
      updateAttributes({ width: newWidth });
    };

    const onMouseUp = () => {
      setResizing(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [updateAttributes]);

  const alignmentClass =
    floatStyle === 'left' ? 'float-left mr-6 mb-4' :
    floatStyle === 'right' ? 'float-right ml-6 mb-4' :
    align === 'left' ? 'mr-auto' :
    align === 'right' ? 'ml-auto' :
    'mx-auto';

  return (
    <NodeViewWrapper
      className={`relative my-4 ${floatStyle === 'none' ? 'flex' : ''}`}
      style={floatStyle === 'none' ? { justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center' } : undefined}
    >
      <div className={`relative inline-block group ${alignmentClass}`} style={{ width: width ? `${width}px` : 'auto' }}>
        {/* Alignment & float toolbar - shows on select */}
        {selected && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 rounded-xl px-2 py-1.5 flex gap-1 z-20 shadow-xl">
            <ImgToolBtn
              active={align === 'left' && floatStyle === 'none'}
              onClick={() => updateAttributes({ align: 'left', float: 'none' })}
              title="Align Left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="10" height="16" rx="1" strokeWidth={2}/><path strokeWidth={2} d="M17 4h4M17 9h4M17 14h4"/></svg>
            </ImgToolBtn>
            <ImgToolBtn
              active={align === 'center' && floatStyle === 'none'}
              onClick={() => updateAttributes({ align: 'center', float: 'none' })}
              title="Center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="1" strokeWidth={2}/></svg>
            </ImgToolBtn>
            <ImgToolBtn
              active={align === 'right' && floatStyle === 'none'}
              onClick={() => updateAttributes({ align: 'right', float: 'none' })}
              title="Align Right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="11" y="4" width="10" height="16" rx="1" strokeWidth={2}/><path strokeWidth={2} d="M3 4h4M3 9h4M3 14h4"/></svg>
            </ImgToolBtn>

            <div className="w-px bg-slate-600 mx-1" />

            <ImgToolBtn
              active={floatStyle === 'left'}
              onClick={() => updateAttributes({ float: 'left', align: 'left' })}
              title="Float Left (text wraps)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="8" height="8" rx="1"/><path d="M13 4h9M13 8h9M2 14h20M2 18h20" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round"/></svg>
            </ImgToolBtn>
            <ImgToolBtn
              active={floatStyle === 'right'}
              onClick={() => updateAttributes({ float: 'right', align: 'right' })}
              title="Float Right (text wraps)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="14" y="3" width="8" height="8" rx="1"/><path d="M2 4h9M2 8h9M2 14h20M2 18h20" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round"/></svg>
            </ImgToolBtn>

            <div className="w-px bg-slate-600 mx-1" />

            <ImgToolBtn
              onClick={() => updateAttributes({ width: null })}
              title="Reset Size"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </ImgToolBtn>
          </div>
        )}

        {/* Image */}
        <img
          ref={imgRef}
          src={node.attrs.src}
          alt={node.attrs.alt || ''}
          className={`rounded-xl shadow-lg block max-w-full ${selected ? 'ring-3 ring-yellow-400 ring-offset-2' : ''}`}
          style={{ width: width ? `${width}px` : 'auto', cursor: resizing ? 'col-resize' : 'default' }}
          draggable={false}
        />

        {/* Resize handles - show on select */}
        {selected && (
          <>
            <div
              onMouseDown={onResizeStart}
              className="absolute top-0 right-0 w-4 h-full cursor-col-resize group/handle"
            >
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-10 bg-yellow-400 rounded-l-md opacity-80 hover:opacity-100 shadow-md" />
            </div>
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setResizing(true);
                const startX = e.clientX;
                const startWidth = imgRef.current?.offsetWidth || 300;
                const onMouseMove = (moveEvent: MouseEvent) => {
                  const diff = startX - moveEvent.clientX;
                  const newWidth = Math.max(100, startWidth + diff);
                  updateAttributes({ width: newWidth });
                };
                const onMouseUp = () => {
                  setResizing(false);
                  document.removeEventListener('mousemove', onMouseMove);
                  document.removeEventListener('mouseup', onMouseUp);
                };
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
              }}
              className="absolute top-0 left-0 w-4 h-full cursor-col-resize"
            >
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-10 bg-yellow-400 rounded-r-md opacity-80 hover:opacity-100 shadow-md" />
            </div>
          </>
        )}

        {/* Size indicator while resizing */}
        {resizing && width && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            {Math.round(width)}px
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
}

function ImgToolBtn({ onClick, active, title, children }: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded-lg transition ${active ? 'bg-yellow-400 text-slate-900' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
    >
      {children}
    </button>
  );
}
