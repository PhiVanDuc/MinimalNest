"use client"

import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import TextAlign from "@tiptap/extension-text-align"
import Highlight from "@tiptap/extension-highlight"

import ProductDetailTextEditorMenu from "./product-detail-text-editor-menu";
import { FaStar } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ProductDetailTextEditor() {
    const [post, setPost] = useState("Test tiptap");
    const [stars, setStars] = useState(0);

    const handleChooseStars = (quantity) => {
        if (quantity === stars) {
            setStars(0);
            return;
        }

        setStars(quantity);
    }

    const editor = useEditor(
        {
            extensions: [
                StarterKit.configure({
                    bulletList: {
                        HTMLAttributes: {
                            class: "list-disc ml-3",
                        },
                    },
                    orderedList: {
                        HTMLAttributes: {
                            class: "list-decimal ml-3",
                        },
                    },
                }),
                TextAlign.configure({
                    types: ["heading", "paragraph"],
                }),
                Highlight,
            ],
            content: post,
            editorProps: {
                attributes: {
                    class: "min-h-[100px] border border-b-0 rounded-[15px] rounded-br-none rounded-bl-none outline-none px-[20px] py-[20px]"
                }
            },
            onUpdate: ({ editor }) => {
                setPost(editor.getHTML());
            },
        }
    )

    return (
        <div className='space-y-[15px]'>
            <div>
                <EditorContent editor={editor} />
                <ProductDetailTextEditorMenu editor={editor} />
            </div>

            <div className='flex flex-wrap gap-[15px] items-center justify-between'>
                <div className='flex items-center gap-[20px]'>
                    <h3 className='text-[15px] sm:text-[16px] font-medium text-darkBland'>Số sao nhận xét</h3>

                    <div className="flex items-center gap-[6px] sm:gap-[10px] text-gray-300 text-sm">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i + "a"}
                                className={cn(
                                    "text-[16px] sm:text-[20px] aspect-square hover:text-darkBland cursor-pointer transition duration-300",
                                    (i + 1) <= stars ? "text-yellowBold hover:text-yellowBold hover:opacity-80" : ""
                                )}
                                onClick={() => { handleChooseStars(i + 1) }}
                            />
                        ))}
                    </div>
                </div>

                <Button>Nhận xét</Button>
            </div>
        </div>
    )
}
