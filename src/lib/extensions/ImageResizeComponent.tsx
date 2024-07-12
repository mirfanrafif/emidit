import React from "react";
import { NodeViewWrapper } from "@tiptap/react";

export default function ImageResizeComponent(props: any) {
  const { width, height, ...rest } = props.node.attrs;

  const handler = (mouseDownEvent: React.MouseEvent<HTMLImageElement>) => {
    if (props.editor.options.editable === false) return;

    const parent = (mouseDownEvent.target as HTMLElement).closest(
      ".image-resizer"
    );
    const image = parent?.querySelector("img.postimage") ?? null;
    if (image === null) return;
    const startSize = { x: image.clientWidth, y: image.clientHeight };
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent: MouseEvent) {
      props.updateAttributes({
        width: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        height: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      });
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };
  return (
    <NodeViewWrapper className="image-resizer">
      <img
        {...rest}
        className="postimage"
        src={
          props.extension.options.isPreview &&
          (props.node.attrs.src as string).match(/({{|\[%)/gm)
            ? "https://placehold.co/600x400?text=Test+Image"
            : props.node.attrs.src
        }
        style={{
          objectFit: "cover",
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: "8px",
        }}
      />
      <div className="resize-trigger" onMouseDown={handler}>
        {props.extension.options.resizeIcon}
      </div>
    </NodeViewWrapper>
  );
}
