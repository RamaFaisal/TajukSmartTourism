import React, { useEffect, useState } from "react";
import { truncateText } from "@/lib/text";

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

const CategoryBadge = ({ category }) =>
    category ? (
        <span className="inline-flex shrink-0 items-center rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary ring-1 ring-primary/10">
            {category}
        </span>
    ) : null;

const PLACEHOLDER_IMAGE =
    "https://drive.google.com/thumbnail?id=1iUFsaecxCYEbc60h9l6Sm2VOJuKy_tnE&sz=w2000";

const FeaturedArticle = ({ article }) => (
    <article className="grid overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-200/60 ring-1 ring-gray-100 lg:grid-cols-2">
        <div className="relative h-48 sm:h-64 lg:h-full lg:min-h-[340px]">
            <img
                src={article.image || PLACEHOLDER_IMAGE}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                Terbaru
            </span>
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <CategoryBadge category={article.category} />
                <time className="text-xs font-medium text-gray-400">
                    {formatDate(article.created_at)}
                </time>
            </div>
            <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 sm:text-xl md:text-2xl">
                {article.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3 md:text-[15px]">
                {truncateText(article.content, 220)}
            </p>
            <a
                href={`/Informasi/Berita/${article.id}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 sm:mt-6 sm:w-fit sm:py-2.5"
            >
                Baca Selengkapnya
                <span aria-hidden="true">→</span>
            </a>
        </div>
    </article>
);

const ArticleCard = ({ article }) => (
    <a
        href={`/Informasi/Berita/${article.id}`}
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-gray-200/60 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/50"
    >
        <div className="relative h-40 overflow-hidden sm:h-44">
            <img
                src={article.image || PLACEHOLDER_IMAGE}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                <CategoryBadge category={article.category} />
                <time className="text-[11px] font-medium text-gray-400">
                    {formatDate(article.created_at)}
                </time>
            </div>
            <h4 className="mt-2.5 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary">
                {article.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {truncateText(article.content, 110)}
            </p>
            <span className="mt-auto pt-4 text-sm font-semibold text-primary">
                Baca selengkapnya →
            </span>
        </div>
    </a>
);

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("/api/articles");
                const data = await response.json();
                const sorted = [...(data.data ?? [])].sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                setArticles(sorted);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <p className="py-10 text-center text-gray-400">
                Memuat berita terbaru…
            </p>
        );
    }

    if (articles.length === 0) {
        return (
            <p className="py-10 text-center text-gray-400">
                Belum ada berita.
            </p>
        );
    }

    const [featured, ...rest] = articles;

    return (
        <div className="w-full">
            <FeaturedArticle article={featured} />

            {rest.length > 0 && (
                <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {rest.slice(0, 3).map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}

            <div className="mt-6 text-center sm:mt-8">
                <a
                    href="/Informasi/Berita"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:w-auto sm:py-2.5"
                >
                    Lihat Semua Berita
                    <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    );
}
