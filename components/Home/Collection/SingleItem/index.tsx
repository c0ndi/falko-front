import s from './index.module.scss'
import { StrapiFile } from "@/types/types";
import Image from "next/image";
import { getSimpleImageUri } from "@/utils/getSimpleImageUri";
import Link from "next/link";
import { useRouter } from 'next/router';

export type SingleItemT = {
    title: string;
    shopLink: string;
    price: string;
    cover: StrapiFile;
    soldOutBadge?: boolean;
    comingSoonBadge?: boolean;
    newBadge?: boolean;
}

export default function SingleItem({ content }: { content: SingleItemT }) {
    const { title, shopLink, price, cover, soldOutBadge, comingSoonBadge, newBadge } = content;

    const router = useRouter();
    return (
        <article className={s.wrapper}>
            <Link
                href={shopLink}
                target={"_blank"}
            >
                <div className={s.badgeWrapper}>
                    {soldOutBadge && <p className={s.soldOutBadge}>SOLD OUT</p>}
                    {comingSoonBadge && <p className={s.comingSoonBadge}>COMING SOON</p>}
                    {newBadge && <p className={s.newBadge}>NEW</p>}
                </div>
                <div className={s.imageWrapper}>
                    <Image
                        src={getSimpleImageUri(cover)}
                        alt={title}
                        width={375}
                        height={375}
                        priority
                    />
                </div>
                <div className={s.bottomWrapper}>
                    <div>
                        <p className={s.title}>{title}</p>
                        <p className={s.price}>{price}</p>
                    </div>

                    <span style={{ fontFamily: "Coolvetica" }}>{router.locale == "en" ? "Check out" : "Kup teraz"}</span>
                </div>
            </Link>
        </article>
    )
}
