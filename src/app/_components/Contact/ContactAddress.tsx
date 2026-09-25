"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Button from "@/components/Button/Button";
import styles from "./Contact.module.scss";

/** 完成したアドレスをコードに書かないよう、部品に分けて持つ */
const USER = "ishiikoichi1022";
const DOMAIN = "gmail.com";

type CopyState = "idle" | "copied" | "failed";

const labels: Record<CopyState, string> = {
    idle: "アドレスをコピー",
    copied: "コピーしました",
    failed: "コピーできませんでした",
}

/** 購読するものがないので、何もしない関数を返す */
const subscribe = () => () => {};

export default function ContactAddress() {
    /** サーバーでは false 、ブラウザでは true になる */
    const isClient = useSyncExternalStore(subscribe, () => true, () => false);
    const address = isClient ? `${USER}@${DOMAIN}` : null;

    const [copyState, setCopyState] = useState<CopyState>("idle");

    /** 「コピーしました」を1.5秒後に元の文言へ戻す */
    useEffect(() => {
        if (copyState === "idle") return;
        const timer = setTimeout(() => setCopyState("idle"), 1500);
        return() => clearTimeout(timer);
    }, [copyState]);

    const handleCopy = async () => {
        if (!address) return;
        try {
            await navigator.clipboard.writeText(address);
            setCopyState("copied");
        } catch {
            setCopyState("failed");
        }
    };

    return (
        <div className={styles.block}>
            <p className={styles.address}>
                {address && <a href={`mailto:${address}`}>{address}</a>}
            </p>
            <div className={styles.actions}>
                <Button variant="outline" onClick={handleCopy}>
                    {labels[copyState]}
                </Button>
            </div>
            <p className={styles.srOnly} role="status">
                {copyState === "idle" ? "" : labels[copyState]}
            </p>
        </div>
    );
}