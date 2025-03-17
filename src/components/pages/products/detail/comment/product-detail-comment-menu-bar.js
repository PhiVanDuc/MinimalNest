"use client"

import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/react";
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    Italic,
    List,
    ListOrdered,
    Send,
    Strikethrough,
} from "lucide-react";

export default function ProductDetailCommentMenuBar({ editor }) {
    if (!editor) {
        return null;
    }

    const Options = [
        {
          icon: <Heading1 className="size-4" />,
          onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
          preesed: editor.isActive("heading", { level: 1 }),
        },
        {
          icon: <Heading2 className="size-4" />,
          onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          preesed: editor.isActive("heading", { level: 2 }),
        },
        {
          icon: <Heading3 className="size-4" />,
          onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
          preesed: editor.isActive("heading", { level: 3 }),
        },
        {
          icon: <Bold className="size-4" />,
          onClick: () => editor.chain().focus().toggleBold().run(),
          preesed: editor.isActive("bold"),
        },
        {
          icon: <Italic className="size-4" />,
          onClick: () => editor.chain().focus().toggleItalic().run(),
          preesed: editor.isActive("italic"),
        },
        {
          icon: <Strikethrough className="size-4" />,
          onClick: () => editor.chain().focus().toggleStrike().run(),
          preesed: editor.isActive("strike"),
        },
        {
          icon: <AlignLeft className="size-4" />,
          onClick: () => editor.chain().focus().setTextAlign("left").run(),
          preesed: editor.isActive({ textAlign: "left" }),
        },
        {
          icon: <AlignCenter className="size-4" />,
          onClick: () => editor.chain().focus().setTextAlign("center").run(),
          preesed: editor.isActive({ textAlign: "center" }),
        },
        {
          icon: <AlignRight className="size-4" />,
          onClick: () => editor.chain().focus().setTextAlign("right").run(),
          preesed: editor.isActive({ textAlign: "right" }),
        },
        {
          icon: <List className="size-4" />,
          onClick: () => editor.chain().focus().toggleBulletList().run(),
          preesed: editor.isActive("bulletList"),
        },
        {
          icon: <ListOrdered className="size-4" />,
          onClick: () => editor.chain().focus().toggleOrderedList().run(),
          preesed: editor.isActive("orderedList"),
        },
        {
          icon: <Highlighter className="size-4" />,
          onClick: () => editor.chain().focus().toggleHighlight().run(),
          preesed: editor.isActive("highlight"),
        },
    ];
    
    return (
        <div className="border rounded-[15px] rounded-tr-none rounded-tl-none bg-neutral-50 px-[20px] py-[5px] flex flex-wrap items-center gap-x-[20px] gap-y-[5px]">
            {Options.map((option, index) => (
              <Toggle
                  key={index}
                  pressed={option.preesed}
                  onPressedChange={option.onClick}
              >
                  {option.icon}
              </Toggle>
            ))}
        </div>
    );
}