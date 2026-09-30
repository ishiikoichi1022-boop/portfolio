"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { scrollToHash } from "@/lib/scrollToHash";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
    href: string;
};

/** 同じページ内の見出しへのリンクでも、何度押しても飛ぶようにした Link */
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
        onClick?.(e);
        if (e.defaultPrevented) return;
        /** 新しいタブで開くなどの操作はブラウザに任せる */
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (scrollToHash(href)) e.preventDefault();
    }

    return <Link {...props} href={href} onClick={handleClick} />;
}