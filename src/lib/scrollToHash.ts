/**
 * href が今いるページ内の見出しを指していれば、自分でスクロールして true を返す。
 * 別のページへの移動であれば何もせず false を返し、Next.jsのリンク遷移を続ける。
 * 
 * next/link は URLが同じだと何もしないため、/#worksにいる状態でWorksボタンを押しても何も起きない
 */

export function scrollToHash(href: string): boolean {
    const url = new URL(href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return false;

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return false;

    if (url.hash !== location.hash) history.pushState(null, "", url.hash);
    target.scrollIntoView();

    /** キーボードや読み上げの利用者も、とんだ先から読み進められるようにする */
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    return true;
}